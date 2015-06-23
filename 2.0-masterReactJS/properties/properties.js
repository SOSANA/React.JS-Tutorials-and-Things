/**
 * Following shows how to use properties which are external to components and could be used 
 * to further define that component does. 
 * We communicate between Parent-Child to make use of props.
 */
var Courses = React.createClass({ 
    // if you need a property that is manditory you can use propTypes with .isRequired and also if 
    // its a boolean you can add that at well
   propTypes: {
     published:React.PropTypes.bool.isRequired
   },
   getInitialState: function() {
    return {sold: "Not Sold"};
   },
   // the simplest way to use properties is to define getDefaultProps function and return the properties 
   // such as date, launch, course, author, students, etc
   getDefaultProps: function() {
    return { 
        date: new Date("2015-02-14"),
        currentDate: new Date,
        launch:" April First Week",
        course:"Master ReactJS",
        author:"Skillbakery",
        students:1,
        published:false,
        platform:"Skillbakery" };
   },
  
   render: function() {
    return (
      <p>
        Course Name: {this.props.course}
        <br/>
        The original Date {this.props.date.toString()}
        <br/>
        The current Date is: {this.props.currentDate.toString()}
        <br/>
        This course is {this.state.sold}
        <br/>
        Course will Launch in {this.props.launch}
        <br/>
        Author is {this.props.author}
        <br/>
        Student Count {this.props.students}
        <br/>
        Course is {this.props.published.toString()}
        <br/>
        Course will be availble on {this.props.platform}
        <br/>
        Course review: {this.props.review}
      </p>
      );
   }
});
// this component can transfer properties when working with multple components. There may be a situation 
// where its need to send properties down the structual tree. This has the benefit of reducing code 
// duplication with DRY (Don't Repeat Yourself)
var CourseCollection = React.createClass({
  render : function() {
    return (
      // you can overwrite the getDefaultProps here by passing in new property and value
      // this another way to define a new property and as well overwrite original property and value
      <Courses author="Sosana" review="this is not to shabby" platform={this.props.platform} />
    );
  }
});

// here we are over writing the original property by passing a new property and value
// and shows how to pass properties
var courseElement=<CourseCollection platform={"udemy"} />;
React.render(courseElement,document.getElementById('divContainer'));

/*
// here is another way to define properties
var properties={};
// this will show current date
properties.date=new Date();
properties.students=0;
properties.published=true;
properties.author="SkillBakery.com";
properties.course="Master ReactJS";
properties.launch="April First Week";
properties.platform="SkillBakery.com";
courseElement.props=properties;
*/

