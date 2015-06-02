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
  onSelect: function(i) {
    console.log('You clicked: ' + this.props.list[i].courseName);
  },
   render: function() {
      return ( 
            <div>
                We have following courses to offer
                { this.props.list.map(function(course, i) {
                    return (
                            <div onClick={this.onSelect.bind(this, i)} key={i}>{course}</div>
                    );
                }, this)}
            </div> 
            );
    }
});

var coursesElement=<Courses list={courseList}/>;
React.render(coursesElement,document.getElementById('divContainer'));