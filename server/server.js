//entry point for server JavaScript
//creating an app with express
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

app.use(morgan('dev'));
//static file - serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

//parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api routes
app.use('/api', require('./apiRoutes'));



app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, './path/to/index.html');
  });</