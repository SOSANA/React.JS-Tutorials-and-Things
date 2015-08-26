var React = require('react');
// bridge between firebase and our components
var ReactFire = require('reactfire');
// bridge between online database and our app
var Firebase = require('firebase');

var App = React.createClass({
  render: function() {
    return <h1>
      Hello, React!
    </h1>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
