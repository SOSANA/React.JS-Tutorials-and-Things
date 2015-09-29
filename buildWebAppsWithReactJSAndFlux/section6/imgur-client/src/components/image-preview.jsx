var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div>
      I am an image with id {this.props.id}
    </div>
  }
});