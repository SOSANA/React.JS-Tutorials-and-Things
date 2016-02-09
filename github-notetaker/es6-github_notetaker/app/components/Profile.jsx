import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import helpers from '../utils/helpers';
import Rebase from 're-base';

// Rebase returns an object with a bunch of helper methods for interfacing better with firebase
const base = Rebase.createClass('https://sosana-note-taker.firebaseio.com/');

class Profile extends React.Component {
  // with es6 classes getInitialState function gets taken over by the constructor function
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: [],
    };
  }

  // this where you want to do your ajax requests and listeners
  // 'componentDidMount' lifecycle event will be called right after your
  // component mounts the view
  componentDidMount() {
    this.init(this.props.params.username);
  }

  // when ever our profile component receives new props this call back function
  // is going to get invoked
  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  init(username) {
    // binding our firebase with state, bindToState() allows you to bind a
    // property on your state ie: 'notes' property to an endpoint in firebase
    // first argument is your endpoint in firebase you want to bind too
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes',
    });

    helpers.getGithubInfo(username)
      .then(function (data) {
        this.setState({
          bio: data.bio,
          repos: data.repos,
        });
      }.bind(this));
  }

  handleAddNote(newNote) {
    // creates a brand new array with our new note
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote]),
    });
  }

  // remember es6 classes don't auto bind the 'this' key word
  render() {
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
            addNote={ (newNote) => this.handleAddNote(newNote) } />
        </div>
      </div>
    );
  }
}

export default Profile;
