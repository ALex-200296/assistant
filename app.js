const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true }));
app.use('/', require('./routes/auth.routers'));
app.use(express.static(path.join(__dirname + '/public/css')));
app.use(express.static(path.join(__dirname + '/public/js')));
app.use(express.static(path.join(__dirname + '/public/fonts')));
app.use(express.static(path.join(__dirname + '/public/icons')));
app.use(express.static(path.join(__dirname + '/public/img')));

module.exports = app;

