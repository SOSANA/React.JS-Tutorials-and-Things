var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');

ReactDom.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
