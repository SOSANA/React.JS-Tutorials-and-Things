var SimpleMixin = {
    getDefaultProps: function () {
        return {name: "Skillbakery"};
    }
};

var NestedMixin = {
    mixins:[SimpleMixin]
};

var AuthorMixin = {
    getDefaultProps: function () {
        return {author: "Skillbakery.com"};
    }
};

var Courses = React.createClass({displayName: "Courses", 
mixins:[SimpleMixin,AuthorMixin],
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