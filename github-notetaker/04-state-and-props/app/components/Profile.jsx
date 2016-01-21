var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'The Sosana',
      },
      repos: ['a', 'b', 'c'],
    };
  },

  render: function() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-4">
          User Profile Component
        </div>
        <div className="col-md-4">
          Repos Component
        </div>
        <div className="col-md-4">
          Notes Component
        </div>
      </div>
    );
  },
});

module.exports = Profile;
