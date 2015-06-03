var Courses = React.createClass({displayName: "Courses", 
   propTypes: {
     published:React.PropTypes.bool.isRequired
   },
   getInitialState: function() {
    return {sold: "Not Sold"};
   },
   getDefaultProps: function() {
    return { date: new Date("2015-02-14"),launch:" April First Week",course:"Master ReactJS",author:"Skillbakery",students:1,published:false,platform:"Skillbakery" };
   },
  
   render: function() {
    return (
      React.createElement("p", null, 
        "Course Name: ", this.props.course, 
        React.createElement("br", null), 
        "The Date is ", this.props.date.toString(), 
        React.createElement("br", null), 
        "This course is ", this.state.sold, 
        React.createElement("br", null), 
        "Course will Launch in ", this.props.launch, 
        React.createElement("br", null), 
        "Author is ", this.props.author, 
        React.createElement("br", null), 
        "Student Count ", this.props.students, 
        React.createElement("br", null), 
        "Course is ", this.props.published.toString(), 
        React.createElement("br", null), 
        "Course will be availble on ", this.props.platform
      )
      );
   }
});

var CourseCollection = React.createClass({displayName: "CourseCollection",
  render : function() {
    return (
      React.createElement(Courses, {platform: this.props.platform})
    );
  }
});

var courseElement=React.createElement(CourseCollection, {platform: "udemy"});
React.render(courseElement,document.getElementById('divContainer'));




/*
var properties={};
properties.date=new Date();
properties.students=0;
properties.published=true;
properties.author="SkillBakery.com";
properties.course="Master ReactJS";
properties.launch="April First Week";
properties.platform="SkillBakery.com";
courseElement.props=properties;
*/

