/**
 * - define a 'class' using the react method createClass and must always
 *   contain a render method. 
 * - always make to capitlize for your variable name for classes
 * - also remember that class is a reserved keyword and there for the use
 *   of className will render our css class name as shown below. Try
 * - removing Name form className to show difference when rendering
 */
var Badge = React.createClass({
  render: function() {
    return <button className="btn btn-primary" type="button">
      {this.props.title} <span className="badge">{this.props.number}</span>
    </button>
  }
});

var options = {
  title: 'Sent',
  number: 12
}
  
// react, please render this class
var element = React.createElement(Badge, options);
// react, after you render this class, please place it in my body tag
// takes two arugments, instance of class and target to where it should
// be rendered too
React.render(element, document.body);
