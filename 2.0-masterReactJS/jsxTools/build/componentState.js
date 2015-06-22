/*
 *  Following makes use render, getInitialState, getDefaultProps, and propTypes (used to validate the different
 *  properties we set in our component) attribute
 *  
*/

var Courses = React.createClass({displayName: "Courses", 
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
      React.createElement("p", null, 
        "Course Name: ", React.createElement("input", {type: "text", placeholder: "Course Name Here"}), "!", 
        React.createElement("br", null), 
        "// in order to get access to getDefaultProps method we make use of \"this.props.date.toString()\"" + ' ' +
        "The Date is ", this.props.date.toString(), 
        React.createElement("br", null), 
        "// in order to get access to getInitialState method we make use of \"this.state.sold\"" + ' ' +  
        "This course is ", this.state.sold, 
        React.createElement("br", null), 
        "Course will Launch in ", this.props.launch, 
        React.createElement("br", null)
      )
      );
   }
});
var courseElement = React.createElement(Courses, {date: new Date(), published: false});
//var properties={};
//properties.date=new Date();
//properties.students=0;
//courseElement.props=properties;

React.render(courseElement,document.getElementById('divContainer'));