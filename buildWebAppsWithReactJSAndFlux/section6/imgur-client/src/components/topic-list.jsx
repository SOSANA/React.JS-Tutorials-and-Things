var React = require('react');
var Api = require('../utils/api');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Api.get('topics/defaults')
    // our function has a reference to 'this'
    .then(function(data) {
      this.setState({
        // so happens that our object data we created has a key called data 
        topics: data.data
      });
    }.bind(this));
  },
  render: function() {
    return <div className="list-group">
      Topic List
    </div>
  },
  renderTopics: function() {
    return this.state.topics.map(function(topic) {
      return <li>
        {topic}
      </li>
    });
  }
});