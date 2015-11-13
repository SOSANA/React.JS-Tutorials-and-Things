/** @jsx React.DOM */

// Our Tweets component is passed our current state’s tweets via its tweets prop
// and is used to render our tweets. In our render method, we build a list of
// tweets by executing the map method on our array of tweets.
// Each iteration creates a new rendering of a child Tweet component, and the
// results are inserted into an unordered list.
var React = require('react');
var Tweet = require('./Tweet.react.js');

module.exports = Tweets = React.createClass({

  // Render our tweets
  render: function(){

    // Build list items of single tweet components using map
    var content = this.props.tweets.map(function(tweet){
      return (
        <Tweet key={tweet.twid} tweet={tweet} />
      )
    });

    // Return ul filled with our mapped tweets
    return (
      <ul className="tweets">{content}</ul>
    )

  }

});
