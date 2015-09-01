var React = require('react');
// bridge between online database and our app
var Firebase = require('firebase');
// where we want firebase to reach out too to look for our data
var rootURL = 'https://blistering-inferno-5460.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  componentWillMount: function() {
    // we want our reference to point at one todo by appending the todo's id but in list.jsx we assigned it
    // a key so instead of 'this.props.item.id' it will be 'this.props.item.key'
    this.fb = new Firebase(rootURL + 'items/' + this.props.item.key);
  },
  render: function() {
    return <div className="input-group">
      <span className="input-group-addon">
        <input 
        type="checkbox" 
        checked={this.state.done}
        onChange={this.handleDoneChange}
        />
      </span>
      <input type="text"
        className="form-control"
        value={this.state.text}
        onChange={this.handleTextChange}
        />
      <span className="input-group-btn">
        {this.changesButtons()}
        <button 
        className="btn btn-default"
        onClick={this.handleDeleteClick}
        >
          Delete
        </button>
      </span>
    </div>
  },
  // here is how we render the buttons once we click inside the input
  changesButtons: function() {
    if (!this.state.textChanged) {
      return null
    } else {
      // can't return an array, use span
      return <span>
        <button className="btn btn-default">Save</button>
        <button className="btn btn-default">Undo</button>
      </span>
    }
  },
  handleTextChange: function(event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    });
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked}
    this.setState(update);
    // fb.update is a firebase object 
    this.fb.update(update);
  },
  handleDeleteClick: function() {
    // fb.remove() is a firebase object to remove or delete an item
    this.fb.remove();
  }
});