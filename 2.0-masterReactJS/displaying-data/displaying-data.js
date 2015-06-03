// created div tag
var divTag = <div class ='course'>Display Data via React</div>;

// making use of the render method to render 'divTag' inside the 'divContainer'
// React.render(divTag, document.getElementById('divContainer'));

var Courses = React.createClass({
    render: function() {
        return (
            <p>
                Course Name: <input type="text" placeholder="Course Name Here"/>
            </p>
        );
    }
});

var courseElement = <Courses/>;
React.render(courseElement, document.getElementById('divContainer'));
