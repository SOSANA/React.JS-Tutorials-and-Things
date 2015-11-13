/** @jsx React.DOM */

// Our Notification Bar is fixed to the top of the page, and displays the
// current 'count' of unread tweets, and when clicked, shows all the tweets
// currently in the queue.
//
// We conditionally display an active class based upon whether we actually have
// any unread tweets, using the count prop.
//
// On our anchor tag, an onClick handler calls our components own prop
// 'onShowNewTweets' which is bound to 'showNewTweets' in it’s parent. This allows
// us to pass the event back upwards so it can be handled in our parent
// component, where we keep our state management.
var React = require('react');

module.exports = NotificationBar = React.createClass({
  render: function(){
    var count = this.props.count;
    return (
      <div className={"notification-bar" + (count > 0 ? ' active' : '')}>
        <p>There are {count} new tweets! <a href="#top" onClick={this.props.onShowNewTweets}>Click here to see them.</a></p>
      </div>
    )
  }
});
