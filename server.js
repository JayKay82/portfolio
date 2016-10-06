'use strict';

// Pull in dependencies:
  // Express is the micro-framework for creating this REST API
var express = require('express'),
  // Morgan is a logging tool
    morgan = require('morgan');

var app = express();
// Use Morgan middleware to log in the dev environment
app.use(morgan('dev'));
// Setup a static server to serve the frontend Angular app
app.use('/', express.static(__dirname + '/app'));

// Run an http server
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('The server is running on port: ', port);
});
