//Needed for dotenv
require("dotenv").config();

//Needed for Express
var express = require('express')
var app = express()

//Setting where the location of your EJS files are
app.set('views', '.')

//Needed for EJS
app.set('view engine', 'ejs');

//Needed for public directory
app.use(express.static(_dirname + '/public'));

//Needed for parsing form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//root page
app.get('/', function(req, res) {
res.render('index');
});

app.get('/page2', function(req, res) {
    res.render('page2');
    });


    app.get('/page3', function(req, res) {
        res.render('page3');
        });

//Tells the app which port to run on
App.listen(8080)

