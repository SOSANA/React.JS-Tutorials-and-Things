/*
 * This was converted manually from jsx to js via: 
 * https://facebook.github.io/react/jsx-compiler.html
 * This example shows the transpiled version from jsx to js that can be used with 
 * npm install -g react-tools and than 
 * > jsx --watch js/ build/
 */

var divTag=React.createElement("div", {class: "course"}, "Display Data via React");

var Courses = React.createClass({displayName: "Courses",
   
   render: function() {
    return (
      React.createElement("p", null, 
        "Course Name: ", React.createElement("input", {type: "text", placeholder: "Course Name Here"}), "!" + ' ' +
        "The Date is ", this.props.date.toString()
      )
      );
   }
});
var courseElement=React.createElement(Courses, null);
var properties={};
properties.date=new Date();
courseElement.props=properties;

React.render(courseElement,document.getElementById('divContainer'));