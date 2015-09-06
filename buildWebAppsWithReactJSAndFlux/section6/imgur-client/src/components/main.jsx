var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div>
      I am a header.
      {this.props.children}
    </div>
  }
});