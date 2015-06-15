var Courses = React.createClass({ 
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
      <p>
        Course Name: {this.props.course}
        <br/>
        The Date is {this.props.date.toString()}
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
      </p>
      );
   }
});

var CourseCollection = React.createClass({
  render : function() {
    return (
      <Courses platform={this.props.platform} />
    );
  }
});

var courseElement=<CourseCollection platform={"udemy"} />;
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

