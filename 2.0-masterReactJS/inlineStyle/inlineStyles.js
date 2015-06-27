/*
 * Example working with inline styles
 *  - In reactjs inline styles are specified with an object
 *  - The keys specified are camel cased with exception to WebkitTransition
 *  - reactjs automatically assigns px to the height value
 *  - WebkitTransition is for chrome/firefox and msTransition is for IE
 */

//classes
var imgUrl = "https://d2vvqscadf4c1f.cloudfront.net/9GOJj6mLTxGXvuJZaZIg_eee.png";
// here we have created a object called divStyle with some properties of style attributes
var divStyle = {
  color: '#007de6',
  height:60,
  background: 'url(' + imgUrl + ') no-repeat',
  //backgroundImage: 'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

var Courses = React.createClass({
   
   render: function() {
    return (
      // values are passed
      <div style={divStyle}>
        this course is brought to you by SkillBakery.com
      </div>
      );
   }
});
var courseElement=<Courses />;

React.render(courseElement,document.getElementById('divContainer'));