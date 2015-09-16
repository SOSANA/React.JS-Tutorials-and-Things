var React = require('react');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      topics: []
    };
  },
  // always ran right before the component is rendered and only runs once
  componentWillMount: function() {
    // when ever we call getTopics, the TopicStore will reach out and grab 
    // our data and assign it to 'this.topics'
    TopicStore.getTopics()
      // when we pass a function to .then we know that 'TopicStore.topics'
      // will be defined with our list of data or all the data we want. We
      // then assign it to setState which will cause our component to render
      // which will show us a list of topics
      .then(function(){
        // once this is run we have successfully fetched topics and topics are
        // available on TopicStore.topics
        this.setState({
          topics: TopicStore.topics
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