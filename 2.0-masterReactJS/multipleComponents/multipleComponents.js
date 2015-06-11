/*
 *  using multiple components in react.js
 *  
*/
var courseList = [
    {courseName: "Master ReactJS"},
    {courseName: "Master AngularJS"},
    {courseName: "Master Hacking"},
    {courseName: "Master immutableJS"},
    {courseName: "Master RadiumJS"},
    {courseName: "Master NodeJS"},
    {courseName: "Master ExpressJS"},
    {courseName: "Master BaconJS"},
    {courseName: "Master MongooseJS"}
]
var Courses = React.createClass({
    render: function() {
        return (
            <div>
                We have following courses to offer
                <CourseCollection list = {this.props.list} />
            </div>
        );
    }
});

var CourseCollection = React.createClass({
    render: function() {
        // this exposes a method map function that loops through our list, passing cours as arugment
        var course = this.props.list.map(function(course){
            // Course clase is being returned with course arugment and courseName which is our list
            return <Course courseName = {course.courseName} />
        });
        return (
            <div> {course} </div>
        );
    }
});

var Course = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.courseName}
            </div>
        );
    }
});

var coursesElement = <Courses list={courseList} />;
React.render(coursesElement,document.getElementById('divContainer'));