var React = require('react');

// this tells react render on the dom and not the server
var ReactDom = require('react-dom');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        Hello World
      </div>
    );
  },
});

ReactDom.render(<Main />, document.getElementById('app'));
