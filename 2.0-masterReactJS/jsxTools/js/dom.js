var Course = React.createClass({
  setFocus: function() {
    this.refs.txtCourse.getDOMNode().focus();
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <div>
        <input type="text" ref="txtCourse" />
        <input
          type="button"
          value="Focus the course input"
          onClick={this.setFocus}
        />
      </div>
    );
  }
});

React.render(
  <Course />,
  document.getElementById('divContainer')
);