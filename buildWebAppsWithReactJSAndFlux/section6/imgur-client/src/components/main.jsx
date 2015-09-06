var React = require('react');
var Header = require('./header');

module.exports = React.createClass({
  render: function() {
    return <div>
      I am a header.
      {this.props.children}
    </div>
  }
});