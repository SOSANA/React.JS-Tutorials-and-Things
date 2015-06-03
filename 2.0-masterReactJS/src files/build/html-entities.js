var element=React.createElement("div", null, "© skillbakery.com")
//React.render(element,document.getElementById("divContainer"));

var Courses = React.createClass({displayName: "Courses",
   render: function() {
    return (
      React.createElement("p", null, 
        "Course Name: ", React.createElement("input", {type: "text", placeholder: "Course Name Here"}), "!", 
        this.props.copy, " skillbakery.com"
      )
      );
   }
});

var courseElement=React.createElement(Courses, {copy: String.fromCharCode(169)});
React.render(courseElement,document.getElementById("divContainer"));