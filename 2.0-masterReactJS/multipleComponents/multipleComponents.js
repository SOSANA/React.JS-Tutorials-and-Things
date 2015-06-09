/*
 *  using multiple components in react.js
 *  
*/
var Courses = React.createClass({
    render: function() {
        return (
            <div>
                We have following courses to offer
                <div>
            
                </div>
            </div>
        );
    }
});

var coursesElement = <Courses />;
React.render(coursesElement,document.getElementById('divContainer'));