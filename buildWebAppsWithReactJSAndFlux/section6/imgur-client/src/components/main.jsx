var React = require('react');
var Header = require('./header');

// a way to test our component is rendering
//var renderCount = 0;

module.exports = React.createClass({
  render: function() {
    // logging out our renderCount to test we rendering when click on Imgur Browser
    //console.log("I've been rendered " + renderCount++ + " f*cken times with no full page refresh!!");
    
    return <div>
      <Header />
      {this.props.children}
    </div>
  }
});
