var Course = React.createClass({
  setFocus: function() {
    // refering to textbox by making use of the keyword refs
    // when the render function gets inserted into the DOM we
    // can make use of that id(ref keyword and value) for that
    // particular node and than do what ever you want to do with it
    // in this case we are setting its focus
    // getDOMNode() will return txtCourse DOM node and than calling
    // a focus() function on that particular node
    this.refs.txtCourse.getDOMNode().focus();
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    // The render function is returning a textbox and button
    return (
      <div>
        {/* making use of the ref key word and assigning a value
            can be thought of similar to giving it a id */}
        <input type="text" ref="txtCourse" />
        <input
          type="button"
          value="Focus the course input"
          // onclick handler is calling a function called setFocus. 
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