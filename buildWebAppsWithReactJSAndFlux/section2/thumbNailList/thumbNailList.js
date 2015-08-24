/**
 * - define a 'class' using the react method createClass and must always
 *   contain a render method. 
 * - always make to capitlize for your variable name for classes
 * - also remember that class is a reserved keyword and there for the use
 *   of className will render our css class name as shown below. Try
 * - removing Name form className to show difference when rendering
 * - rather than manually entering ever this.props.value we use '...' we
 *   use a short cut created by reactjs to render all prop values in options
 *   as shown on line 40 below
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
      return <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.imageUrl} alt="..."></img>
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p>
              <Badge title={this.props.title} number={this.props.number} />
            </p>
          </div>
        </div>
      </div>
    }
});

var ThumbNailList = React.createClass({
  render: function() {
    var list = this.props.thumbNailData.map(function(thumbNailProps){
      return <ThumbNail {...thumbNailProps}/>
    });
    
    return <div>
      {list}
    </div>
  }
});

var options = {
  thumbNailData: [{
    title: 'See Tutorials',
    number: 12,
    header: 'Learn React',
    description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
    imageUrl: 'http://formatjs.io/img/react.svg'
  },{
    title: 'See Tutorials',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development work flow. Gulp will speed up your development work flow',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
};
  
// react, please render this class
var element = React.createElement(ThumbNailList, options);

// react, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));
