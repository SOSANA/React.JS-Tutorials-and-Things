'use strict';

require('babel-register')({
  presets: ['react'],
});

var PORT = 3000;
var path = require('path');
var express = require('express');
var ReactEngine = require('react-engine');

var app = express();

// create the view engine with `react-engine`
var reactRoutesFilePath = path.join(__dirname + '/app/config/routes.jsx');

var engine = ReactEngine.server.create({
  routes: require(reactRoutesFilePath),
  routesFilePath: reactRoutesFilePath,
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', path.join(__dirname, '/components'));

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', ReactEngine.expressView);

// expose public folder as static assets
app.use(express.static(path.join(__dirname, '/public')));

var server = app.listen(PORT, function() {
  console.log('Express app is listening at http://localhost:%s', PORT);
});
