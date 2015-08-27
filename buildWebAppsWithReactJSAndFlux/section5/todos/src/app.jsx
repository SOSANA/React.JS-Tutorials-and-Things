var React = require('react');
// bridge between firebase and our components
var ReactFire = require('reactfire');
// bridge between online database and our app
var Firebase = require('firebase');
// where we want firebase to reach out too to look for our data
var rootURL = 'https://blistering-inferno-5460.firebaseio.com/';

var App = React.createClass({
  // a mixin is a group of methods that sits on one object, that gets copied over to another object
  // in this case 'this', basically cops code from this object (ReactFire) onto our component
  mixins: [ ReactFire ],
  componentWillMount: function() {
    // creating a new instance of Firebase which is the object that is going to make network requests
    // and communicate with our online database. bindAsObject() is a method defined by ReactFire
    this.bindAsObject(new Firebase(rootURL + 'items/'), 'items');
  },
  render: function() {
    // doing a little test to see if its working
    console.log(this.state);
    return <h1>
      Hello, React!
    </h1>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
