// Needed for dotenv
require('dotenv').config();

// Needed for Express
var express = require('express');
var app = express();
var path = require('path');

// Setting where the location of your EJS files are
app.set('views', '.');

// Needed for EJS
app.set('view engine', 'ejs');

// Needed for public directory
app.use(express.static(__dirname + '/public')); // Use __dirname instead of _dirname

// Needed for parsing form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root page
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/page2', function (req, res) {
  res.render('page2');
});

app.get('/page3', function (req, res) {
  res.render('page3');
});

// Tells the app which port to run on
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

