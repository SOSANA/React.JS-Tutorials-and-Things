var React = require('react');
var ProductData = require('./CourseData');
var CartAPI = require('./utils/CartAPI')
var FluxCartApp = require('./components/FluxCartApp.react');

// Load Course Data
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();

// Render FluxCartApp Controller View
React.render(
  <FluxCartApp />,
  document.getElementById('flux-course-cart')
);
