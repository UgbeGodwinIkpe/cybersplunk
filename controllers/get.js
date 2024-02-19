const homePage = (req, res) => {
    res.render('index');
}


const contactPage = (req, res) => {
    // const user = req.query.user;
    res.render('contact', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: ''
            // user: user
    });
}
const aboutPage = (req, res) => {
    // const user = req.query.user;
    res.render('about', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}

const servicePage = (req, res) => {
    // const user = req.query.user;
    res.render('service', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}

const teamPage = (req, res) => {
    // const user = req.query.user;
    res.render('team', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}

const quotePage = (req, res) => {
    // const user = req.query.user;
    res.render('quote', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}

const blogPage = (req, res) => {
    // const user = req.query.user;
    res.render('blog', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}

const featurePage = (req, res) => {
    // const user = req.query.user;
    res.render('feature', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}

const penetrationPage = (req, res) => {
    // const user = req.query.user;
    res.render('penetration', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}
const whiteboxTestingPage = (req, res) => {
    // const user = req.query.user;
    res.render('whitebox', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}
const blackboxTestingPage = (req, res) => {
    // const user = req.query.user;
    res.render('blackbox', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}
const networkSecurityPage = (req, res) => {
    // const user = req.query.user;
    res.render('network', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}

const forensicPage = (req, res) => {
    // const user = req.query.user;
    res.render('forensic', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}
const devopsPage = (req, res) => {
    // const user = req.query.user;
    res.render('devops', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}
const webDevelopmentPage = (req, res) => {
    // const user = req.query.user;
    res.render('webdevelopment', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}
const blogBehindTheScenes = (req, res) => {
    // const user = req.query.user;
    res.render('scenes', {
        error: '',
        msg: '',
        fname: '',
        email: '',
        password: '',
        phoneNumber: '',
        // user: user
    });
}
module.exports = {
    homePage,
    contactPage,
    aboutPage,
    servicePage,
    teamPage,
    quotePage,
    blogPage,
    featurePage,
    penetrationPage,
    whiteboxTestingPage,
    blackboxTestingPage,
    networkSecurityPage,
    forensicPage,
    devopsPage,
    webDevelopmentPage,
    blogBehindTheScenes,
}