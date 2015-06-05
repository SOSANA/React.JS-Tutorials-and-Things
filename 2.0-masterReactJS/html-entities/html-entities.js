var element = <div>&copy; skillbakery.com</div>
//React.render(element,document.getElementById("divContainer"));

var Courses = React.createClass({
    render: function() {
        return (
            <p>
            Course Name: <input type="text" placeholder="Course name here"/>
            {this.props.copy} skillbaker.com
            </p>            
        );    
    }
});


// the reason we pass in the properties with html entities for charcode is 
// because react double scapped to prevent SSL attacks
// making use of the html entity for copy right symbol with CharCode
var courseElement = <Courses copy={String.fromCharCode(169)}/>;
React.render(courseElement, document.getElementById("divContainer"));
