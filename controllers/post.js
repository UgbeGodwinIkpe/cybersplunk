// ===========================
// === libraries requires ====
// ===========================
require('dotenv').config()
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
validator = require('validator');
// =============================
// === funtion to create token==
// ============================= 
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: '1d' })
}

//=============================
// === auth permissions =======
// ============================

// function to check if user is authenticated
exports.isAuth = async(req, res, next) => {

    // distructure auth from request headers
    const { authorization } = req.headers

    try {
        // if not available throw error 
        if (!authorization) {
            throw Error('Authorization token required')
        }

        // getting token from auth
        const token = authorization.split(' ')[1]

        // destructuring and getting _id from verified jwt
        const { _id } = jwt.verify(token, process.env.SECRET_KEY)
        console.log({ id: _id })
            // searhing db and geting user using _id and assigning to req.user
        req.user = await Alumni.findOne({ _id }).select('_id')

        // if bot found throw error
        if (!req.user) {
            throw Error('token not accessible')
        }

        // call th enext set of function
        next()

    } catch (error) {
        // catch all errors and send as json
        res.status(401).json({ error: 'Request is unauthorized', message: error.message })
    }

}

const register = (req, res) => {
    const { fname, email, phoneNumber, password, userType } = req.body;

    if (!fname || !email || !phoneNumber || !password) {
        req.flash('error', 'All fields are required');
        res.render('projectsupervisor', {
            error: req.flash('error'),
            msg: '',
            fname: fname,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            user: userType
        });
    }
    // using validator to check if password is strong
    if (!validator.isStrongPassword(password)) {
        // throw Error('password not strong enough')
        req.flash('error', 'Password combination not strong enough.');
        res.render('projectsupervisor', {
            error: req.flash('error'),
            msg: '',
            fname: fname,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            user: userType
        });
    } else {
        User.findOne({ 'email': email }, (err, user) => {
            if (err) {
                throw err;
            }
            if (user) {
                req.flash('msg', 'Email address: ' + email + ' is already in use.')
                return res.render('projectsupervisor', {
                    msg: req.flash('msg'),
                    error: '',
                    fname: fname,
                    email: email,
                    phoneNumber: phoneNumber,
                    user: userType
                });
            } else {
                //generate salt for password hashing
                let salt = bcrypt.genSaltSync(8);
                //hash the user password
                const hashedPassword = bcrypt.hashSync(password, salt);
                // create new user instance
                const newUser = new User();
                newUser.fname = fname;
                newUser.phoneNumber = phoneNumber;
                newUser.email = email;
                newUser.password = hashedPassword;
                newUser.userType = userType;
                // newUser.project_topics.topic1 = topic1;
                // newUser.project_topics.topic2 = topic2;
                // newUser.project_topics.topic3 = topic3;
                newUser.save((err, result) => {
                    if (err) throw err;
                    console.log(result);
                    req.flash('msg', 'Account successfully create. You can now login with your email and password.');
                    return res.render('projectsupervisor', {
                        Student: result,
                        smsg: req.flash('msg'),
                        error: '',
                        fname: '',
                        email: '',
                        phoneNumber: '',
                        user: userType
                    });

                });
            }
        });
    }
}

const checksupervisor = (req, res) => {
    const regNumber = req.body.regNumber;
    if (!regNumber) {
        req.flash('error', 'Please enter your registration number');
        res.render('registerproject', {
            error: req.flash('error'),
            msg: ''

        });
    } else {
        Student.findOne({ 'Reg_Number': regNumber }, (err, user) => {
            if (err) {
                throw err;
            }
            if (!user) {
                req.flash('error', "Invalid Reg. Number entered. Or you haven't registered your project topics for approval");
                return res.render('projectsupervisor', {
                    error: req.flash('error'),
                    msg: ''
                });
            }
            if (user.approved_topic == '') {
                req.flash('msg', 'Your project topic have not been aproved yet!');
                return res.render('approvedtopic', {
                    msg: req.flash('msg'),
                    Student: user
                });
            } else {
                req.flash('msg', 'Congratulation, your project topic has been approved! ');
                console.log(user.approved_topic);
                return res.render('approvedproject', {
                    msg: req.flash('msg'),
                    Student: user
                });
            }
        });
    }
}
const login = async(req, res) => {
    const { email, password } = req.body
    try {
        // validation
        if (!email || !password) {
            req.flash('lError', 'All fields are required.');
            return res.render('projectsupervisor', {
                lError: req.flash('lError'),
                loginEmail: email,
                fname: '',
                email: '',
                phoneNumber: '',
                user: 'Sender'
            });
        }
        User.findOne({ 'email': email }, async(err, user) => {
            if (user) {
                // compare password with user's password
                const isMatch = await bcrypt.compare(password, user.password);
                // throw an error if not match
                if (!isMatch) {
                    req.flash('lError', 'Incorrect email or password.');
                    return res.render('projectsupervisor', {
                        lError: req.flash('lError'),
                        loginEmail: email,
                        fname: '',
                        email: '',
                        phoneNumber: '',
                        user: 'Sender'
                    });
                } else {
                    console.log(user);
                    res.redirect('/dashboard', (req, res) => {
                        res.send({ user });
                    });
                    return;
                }
            } else {
                req.flash('lError', 'Incorrect email or password.');
                return res.render('projectsupervisor', {
                    lError: req.flash('lError'),
                    loginEmail: email,
                    fname: '',
                    email: '',
                    phoneNumber: '',
                    user: 'Sender'
                });
            }
        })

        // create a token
        // const token = createToken(alumni._id);

    } catch (error) {
        // return error code and message 
        console.log(error);
    }
}



module.exports = {
    register: register,
    checksupervisor: checksupervisor,
    login: login
}