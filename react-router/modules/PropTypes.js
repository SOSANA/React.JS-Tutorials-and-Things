import React from 'react';
import Location from './Location';
import History from './History';

var { func, object, arrayOf, instanceOf, oneOfType, element } = React.PropTypes;

function falsy(props, propName, componentName) {
  if (props[propName])
    return new Error(`<${componentName}> should not have a "${propName}" prop`);
}

var component = func;
var components = oneOfType([ component, object ]);
var history = instanceOf(History);
var location = instanceOf(Location);
var route = oneOfType([ object, element ]);
var routes = oneOfType([ route, arrayOf(route) ]);

module.exports = {
  falsy,
  component,
  components,
  history,
  location,
  route,
  routes
};
