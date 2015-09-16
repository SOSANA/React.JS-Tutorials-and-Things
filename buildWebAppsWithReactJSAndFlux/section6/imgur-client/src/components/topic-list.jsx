var React = require('react');
var Api = require('../utils/api');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      topics: []
    }
  },
  // always ran right before the component is rendered
  componentWillMount: function() {
    Api.get('topics/defaults')
    // our function has a reference to 'this'
    .then(function(data) {
      this.setState({
        // function is getting called that we are calling data and it so happens that
        // object contains a key called data as well which is an array of topics
        topics: data.data
      });
    }.bind(this));
  },
  render: function() {
    return <div className="list-group">
      Topic List
      {this.renderTopics()}
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