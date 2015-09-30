var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div>
      { this.image() }
    </div>
  },
  image: function() {
    // 'h' represent the quality of the pixal, h is 200x200 Pixel
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
    
    return <img src={link} />
  }
});