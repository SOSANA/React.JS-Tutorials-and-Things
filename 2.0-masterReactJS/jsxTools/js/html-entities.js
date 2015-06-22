var element=<div>&copy; skillbakery.com</div>
//React.render(element,document.getElementById("divContainer"));

var Courses = React.createClass({
   render: function() {
    return (
      <p>
        Course Name: <input type="text" placeholder="Course Name Here"/>!
        {this.props.copy} skillbakery.com
      </p>
      );
   }
});

var courseElement=<Courses copy={String.fromCharCode(169)}/>;
React.render(courseElement,document.getElementById("divContainer"));