/*
 *  Following makes use render, getInitialState, getDefaultProps, and propTypes (used to validate the different
 *  properties we set in our component) attribute
 *  
*/

var Courses = React.createClass({ 
   // allows you to control the presence and type of properties your component has
   propTypes: {
     published: React.PropTypes.bool.isRequired
   },
   // getInitialState method is called  
   getInitialState: function() {
    // setting getInitialState default value to Not Sold  
    return {sold: "Not Sold"};
   },
   // used to initialize default values to our properties  
   getDefaultProps: function() {
    return { date: new Date("2015-02-14"),launch:" April First Week" };
   },
  
   render: function() {
    return (
      <p>
        Course Name: <input type="text" placeholder="Course Name Here"/>!
        <br/>
        // in order to get access to getDefaultProps method we make use of "this.props.date.toString()"
        The Date is {this.props.date.toString()}
        <br/>
        // in order to get access to getInitialState method we make use of "this.state.sold"  
        This course is {this.state.sold}
        <br/>
        Course will Launch in {this.props.launch}
        <br/>
      </p>
      );
   }
});
var courseElement = <Courses date={new Date()} published={false}/>;
//var properties={};
//properties.date=new Date();
//properties.students=0;
//courseElement.props=properties;

React.render(courseElement,document.getElementById('divContainer'));