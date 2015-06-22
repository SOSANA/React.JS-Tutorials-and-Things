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
  onSelect: function(i) {
    console.log('You clicked: ' + this.props.list[i].courseName);
  },
   render: function() {
      return ( 
            React.createElement("div", null, 
                "We have following courses to offer", 
                 this.props.list.map(function(course, i) {
                    return (
                            React.createElement("div", {onClick: this.onSelect.bind(this, i), key: i}, course)
                    );
                }, this)
            ) 
            );
    }
});

var coursesElement=React.createElement(Courses, {list: courseList});
React.render(coursesElement,document.getElementById('divContainer'));