/** @jsx React.DOM */

// Our loader component is a fancy svg loading animation. It is used during
// paging to indicate that we are loading a new page. An active class is set
// using our paging prop, that controls whether our component is shown or not
// (via CSS).
var React = require('react');

module.exports = Loader = React.createClass({
  render: function(){
    return (
      <div className={"loader " + (this.props.paging ? "active" : "")}>
        <img src="svg/loader.svg" />
      </div>
    )
  }
});
