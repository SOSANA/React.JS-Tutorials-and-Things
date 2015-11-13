/** @jsx React.DOM */

var React = require('react');
var TweetsApp = require('./components/TweetsApp.react');

// We start by getting our intitial state from the script element that we added
// in home.handlebars. We parse the JSON data and then call React.renderComponent.
// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

// Render the components, picking up where react left off on the server
React.renderComponent(
  <TweetsApp tweets={initialState}/>,
  document.getElementById('react-app')
);
