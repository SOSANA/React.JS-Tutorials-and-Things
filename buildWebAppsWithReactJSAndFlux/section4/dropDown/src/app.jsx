var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // what should show up on the button to open/close the dropdown
  items: [ // list of items to show in the dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

// react, please render this class
var element = React.createElement(Dropdown, options);

// react, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));
