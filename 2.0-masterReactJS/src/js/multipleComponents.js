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
   render: function() {
      return ( 
            <div>
                We have following courses to offer
                <CourseCollection list={this.props.list} />
            </div> 
            );
   }
});

var CourseCollection = React.createClass({
    render:function(){
        var course=this.props.list.map(function(course){
            return <Course courseName={course.courseName} />
        });
   
    return (<div> {course} </div>) 
    }
})

var Course = React.createClass({ 
   render: function() {
    return (
        <div>
           {this.props.courseName}
        </div>
      );
   }
});

var coursesElement=<Courses list={courseList}/>;
React.render(coursesElement,document.getElementById('divContainer'));