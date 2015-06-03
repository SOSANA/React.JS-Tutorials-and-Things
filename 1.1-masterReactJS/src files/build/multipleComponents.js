var courseList=[
    {courseName:"Master ReactJS"},
    {courseName:"Master AngularJS"},
    {courseName:"Master JavaScript & jQuery"},
    {courseName:"Browser Developer Tools"},
    {courseName:"Master KnockoutJS"},
    {courseName:"Advanced jQuery for Designers & Developers"},
    {courseName:"Amazon EC2 LAMP"},
    {courseName:"NodeJS"}
]

var Courses = React.createClass({displayName: "Courses", 
   render: function() {
      return ( 
            React.createElement("div", null, 
                "We have following courses to offer", 
                React.createElement(CourseCollection, {list: this.props.list})
            ) 
            );
   }
});

var CourseCollection = React.createClass({displayName: "CourseCollection",
    render:function(){
        var course=this.props.list.map(function(course){
            return React.createElement(Course, {courseName: course.courseName})
        });
   
    return (React.createElement("div", null, " ", course, " ")) 
    }
})

var Course = React.createClass({displayName: "Course", 
   render: function() {
    return (
        React.createElement("div", null, 
           this.props.courseName
        )
      );
   }
});

var coursesElement=React.createElement(Courses, {list: courseList});
React.render(coursesElement,document.getElementById('divContainer'));