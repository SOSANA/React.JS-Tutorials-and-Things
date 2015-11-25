var React = require('react');
var LocationStore = require('../stores/LocationStore');

var Locations = React.createClass({
  getInitalState() {
    return LocationStore.getState();
  },
});

module.exports = Locations;
