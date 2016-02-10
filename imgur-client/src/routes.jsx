var React = require('react');
// This is the actual react router library
var ReactRouter = require('react-router');
// an object that tells the router how we will be keeping track of what page the user is on at any given time
var HashHistory = require('react-router/lib/HashHistory');
// is the actual Router that will be deciding what content to show on the page at any given time
var Router = ReactRouter.Router;
// is an object that will be used to configure the router
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic');
var ImageDetail = require('./components/image-detail');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      {/* using '/:' for parameters */}
      <Route path="topics/:id" component={Topic} />
      <Route path="images/:id" component={ImageDetail} />
    </Route>
  </Router>
)
