const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./routes/index');
const db = require('./config/key').MongoURI;

const app = express();

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


// Accessing your public folder
app.use(express.static(__dirname + '/public'));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');



// app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'securitor',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(flash());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


const port = process.env.PORT || 8100;



app.listen(port, (err, res) => {
    if (err) throw err;
    console.log('App run port ' + port)
});