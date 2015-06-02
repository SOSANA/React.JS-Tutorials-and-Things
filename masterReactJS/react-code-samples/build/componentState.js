var Courses = React.createClass({displayName: "Courses", 
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
      React.createElement("p", null, 
        "Course Name: ", React.createElement("input", {type: "text", placeholder: "Course Name Here"}), "!", 
        React.createElement("br", null), 
        "The Date is ", this.props.date.toString(), 
        React.createElement("br", null), 
        "This course is ", this.state.sold, 
        React.createElement("br", null), 
        "Course will Launch in ", this.props.launch, 
        React.createElement("br", null)
      )
      );
   }
});
var courseElement=React.createElement(Courses, {date: new Date(), published: false});
//var properties={};
//properties.date=new Date();
//properties.students=0;
//courseElement.props=properties;

React.render(courseElement,document.getElementById('divContainer'));