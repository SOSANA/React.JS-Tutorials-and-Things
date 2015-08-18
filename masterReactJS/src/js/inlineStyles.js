//classes
var imgUrl="https://d2vvqscadf4c1f.cloudfront.net/9GOJj6mLTxGXvuJZaZIg_eee.png";
var divStyle = {
  color: '#007de6',
  height:60,
  background: 'url(' + imgUrl + ') no-repeat',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

var Courses = React.createClass({
   
   render: function() {
    return (
      <div style={divStyle}>
        this course is brought to you by SkillBakery.com
      </div>
      );
   }
});
var courseElement=<Courses />;

React.render(courseElement,document.getElementById('divContainer'));