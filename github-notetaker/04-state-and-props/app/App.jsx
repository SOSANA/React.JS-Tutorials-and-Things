var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');
var browserHistory = require('react-router').browserHistory;

ReactDom.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
);
