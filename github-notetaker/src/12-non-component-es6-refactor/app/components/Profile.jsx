var React = require('react');
var Router = require('react-router').Router;
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
import helpers from '../utils/helpers';

var Profile = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function () {
    return {
      notes: [1, 2, 3],
      bio: {},
      repos: [],
    };
  },

  // this where you want to do your ajax requests and firebase listeners
  // 'componentDidMount' lifecycle event will be called right after your
  // component mounts the view
  componentDidMount: function () {
    // creating a new instance of firebase which will return you a new object
    // full firebase e type properties and save that on your instance under
    // the ref property
    this.ref = new Firebase('https://sosana-note-taker.firebaseio.com/');
    this.init(this.props.params.username);
  },

  // when ever our profile component receives new props this call back function
  // is going to get invoked
  componentWillReceiveProps: function (nextProps) {
    // console.log('The next props are', nextProps);
    this.unbind('notes');
    this.init(nextProps.params.username);
  },

  componentWillUnmount: function () {
    // calling the 'unbind' property on reactfire and pass it notes
    // This removes that listener so that we are not always listening and not
    // always trying to update our state even after we out component has moved
    // on
    this.unbind('notes');
  },

  init: function (username) {
    // take our ref and add what ever username passed the url above .../:username
    var childRef = this.ref.child(username);

    // this is from reactfire, takes two arugments, the first is a ref to your
    // firebase and the second argument is the property on  your state that you
    // want to bind your firebase too
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(username)
      .then(function (data) {
        this.setState({
          bio: data.bio,
          repos: data.repos,
        });
      }.bind(this));
  },

  handleAddNote: function (newNote) {
    // update firebase with the newNote
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    );
  },
});

module.exports = Profile;
