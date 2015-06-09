var Courses = React.createClass({ 
   propTypes: {
     published:React.PropTypes.bool.isRequired
   },
   getInitialState: function() {
    return {sold: "Not Sold"};
   },
   getDefaultProps: function() {
    return { date: new Date("2015-02-14"),launch:" April First Week" };
   },
  
   render: function() {
    return (
      <p>
        Course Name: <input type="text" placeholder="Course Name Here"/>!
        <br/>
        The Date is {this.props.date.toString()}
        <br/>
        This course is {this.state.sold}
        <br/>
        Course will Launch in {this.props.launch}
        <br/>
      </p>
      );
   }
});
var courseElement=<Courses date={new Date()} published={false}/>;
//var properties={};
//properties.date=new Date();
//properties.students=0;
//courseElement.props=properties;

React.render(courseElement,document.getElementById('divContainer'));