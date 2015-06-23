/*
 * We communicate between Child-Parent components to make use of some pure JavaScript 
 * concepts like subscribing to events. 
 */
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

var Courses = React.createClass({ 
  // here we are defining an event called onSelect
  // when ever you are selecting any of the courses that is being printed in the console
  onSelect: function(i) {
    console.log('You clicked: ' + this.props.list[i].courseName);
  },
   render: function() {
      return ( 
            <div>
                We have following courses to offer
                // here we are using map function to loop through all the courses in the
                // course list and in doing so we are assigning the onSelect even of the 
                // parent to this particular child. When we click on any of the courses 
                // the onSelect in the parent gets called because we are binding that with 
                // the onClick event. When you click the onClick event is calling the parent
                // onSelect by this function {this.onSelect.bind(this, i)} and making use of 
                // the bind event. This bind event is actually binding the select event to
                // the onclick event of the div. You are calling the parent function using 
                // the child click event. This way communicates between child and parent
                { this.props.list.map(function(course, i) {
                    return (
                            <div onClick={this.onSelect.bind(this, i)} key={i}>{course}</div>
                    );
                }, this)}
            </div> 
            );
    }
});

// courses has property called list
var coursesElement=<Courses list={courseList}/>;
React.render(coursesElement,document.getElementById('divContainer'));