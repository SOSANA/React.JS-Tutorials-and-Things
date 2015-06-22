// created div tag
// html tags should be camel cased
// you can either create html tags here or use components below
// var divTag = <div class ='course'>Display Data via React</div>;
// making use of the render method to render 'divTag' inside the 'divContainer'
// React.render(divTag, document.getElementById('divContainer'));

// noticed this variable starts with a capital letter. All components should start with a capital letter
// Components are functions
var Courses = React.createClass({displayName: "Courses",
    // making use of the render method to render this particular output
    render: function() {
        return (
            React.createElement("div", null, 
            React.createElement("p", null, 
                "Course Name: ", React.createElement("input", {type: "text", placeholder: "Course Name Here"})
            ), 
            React.createElement("p", null, 
                "The Date is ", this.props.date.toString()
            )
            )
        );
    }
});
// storing the Courses element inside the courseElement variable
// the variable name assigned will be camel cased
var courseElement = React.createElement(Courses, null);
// third way to store properties (aka properties) in a javascript literal
var properties = {};
properties.date = new Date();
courseElement.props = properties;
// making use of the render method to render 'courseElement' inside the 'divContainer'
React.render(courseElement, document.getElementById('divContainer'));

// one way to pass in props (aka properties) is inline shown below
// var courseElement = <Courses date={new Date()}/>;

// second way to pass in props (aka properties)
// var courseElement = <Courses />;
// courseElement.props.date=new Date();