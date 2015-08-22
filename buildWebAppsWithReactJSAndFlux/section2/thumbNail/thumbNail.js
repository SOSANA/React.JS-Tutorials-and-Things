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

var ThumbNail = React.createClass({
  render: function() {
    return <div className="thumbnail">
      <img src={this.props.imageUrl} />
      <div className="caption">
        <h3>{this.props.header}</h3>
        <p>{this.props.description}</p>
        <p>
          <Badge title={this.props.title} number={this.props.number} />
        </p>
      </div>
    </div>
  }
});

var options = {
  title: 'See Tutorials',
  number: 32,
  header: 'Learn React',
  description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
  imageUrl: 'http://formatjs.io/img/react.svg'
}
  
// react, please render this class
var element = React.createElement(ThumbNail, options);

// react, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.target'));
