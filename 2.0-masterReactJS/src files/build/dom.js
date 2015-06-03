var Course = React.createClass({displayName: "Course",
  setFocus: function() {
    this.refs.txtCourse.getDOMNode().focus();
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "text", ref: "txtCourse"}), 
        React.createElement("input", {
          type: "button", 
          value: "Focus the course input", 
          onClick: this.setFocus}
        )
      )
    );
  }
});

React.render(
  React.createElement(Course, null),
  document.getElementById('divContainer')
);