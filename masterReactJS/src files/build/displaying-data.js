var divTag=React.createElement("div", {class: "course"}, "Display Data via React");
//React.render(divTag,document.getElementById('divContainer'));

//classes
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