/** @jsx React.DOM */

// Our singular Tweet component renders each individual tweet as a list item.
// We conditionally render an active class based upon the tweet’s active status,
// that helps us hide it while it is still in the queue.
// Each tweet’s data is then used to fill in the predefined tweet template, so
// that our tweet display looks legit.
var React = require('react');

module.exports = Tweet = React.createClass({
  render: function(){
    var tweet = this.props.tweet;
    return (
      <li className={"tweet" + (tweet.active ? ' active' : '')}>
        <img src={tweet.avatar} className="avatar"/>
        <blockquote>
          <cite>
            <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a>
            <span className="screen-name">@{tweet.screenname}</span>
          </cite>
          <span className="content">{tweet.body}</span>
        </blockquote>
      </li>
    )
  }
});
