/**
 * mixins allow the same functionality to multiple components. You need encapsulate in a mixin 
 * and include it in your classes (conponents)
 */

// here is a simple mixin showing name as the property and value "skillbakery"
var SimpleMixin = {
    getDefaultProps: function () {
        return {name: "Skillbakery"};
    }
};
// here we are passing the SimpleMixin and passing a mixin to a mixin 
var NestedMixin = {
    mixins:[SimpleMixin]
};

var AuthorMixin = {
    getDefaultProps: function () {
        return {author: "Skillbakery.com"};
    }
};
// here we are passing in multiple mixins using an array
// our mixins will always get excuted first from left to right
var Courses = React.createClass({displayName: "Courses", 
mixins:[SimpleMixin,AuthorMixin],
// this is an example of trying to return two objects with clashing keys (name & author properties)
//getDefaultProps:function(){
//  return {
//      name: "Udemy",
//      author: "Skillbakery"
//  };
//},
   render: function() {
    return (
      React.createElement("p", null, 
        "Course will be availble on ", this.props.name, 
        React.createElement("br", null), 
        "Authored by ", this.props.author
      )
      );
   }
});

var Students = React.createClass({displayName: "Students",
   mixins:[SimpleMixin],
   render: function() {
    return (
      React.createElement("p", null, 
       "Students says I love ", this.props.name
      )
      );
   }
});
React.render(React.createElement(Courses, null),document.getElementById("divContainer"));
React.render(React.createElement(Students, null),document.getElementById("divStudentContainer"));