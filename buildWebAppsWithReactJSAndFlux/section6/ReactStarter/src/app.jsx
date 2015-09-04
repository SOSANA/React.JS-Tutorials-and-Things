var React = require('react');
// This is the actual react router library
var ReactRouter = require('react-router');
// is an object that tells the router how we will be keeping track of what page the user is on at 
// any given time
var HashHistory = require('react-router/lib/hashhistory');
// is the actual Router that will be deciding what content to show on the page at any given time
var Router = ReactRouter.Router;
// is an object that will be used to configure the router
var Route = ReactRouter.Route;

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
  render: function() {
    return <h1>I'm a child! </h1>
  }
});

var Child2 = React.createClass({
  render: function() {
    return <h1>I'm the other child, child2.</h1>
  }
});

var routes = (
  <Router history={new HashHistory}>
    <Route path="/" component={Hello}>
      <Route path="1" component={child1} />
      <Route path="2" component={child2} />
    </Route>
  </Router>
)


//var element = React.createElement(Hello, {});
React.render(routes, document.querySelector('.container'));
