var React = require('react');

module.exports = React.createClass({
  // setting initial value to be empty text string
  getInitialState: function() {
    return {
      text: ''
    }
  },
  render: function() {
    return <div className="input-group">
      <input 
        value={this.state.text}
        onChange={this.handleInputChange}
        type="text" 
        className="form-control" />
      <span className="input-group-btn">
        <button 
          onClick={this.handleClick}
          className="btn btn-default" 
          type="button">
          Add
        </button>
      </span>
    </div>
  },
  handleClick: function() {
    // testing click button works
    console.log('the Add button  was clicked!');
    // send value of text input to firebase
    
  },
  handleInputChange: function(event) {
    // testing the event handler for inputing text works
    //console.log(event.target.value);
    this.setState({text: event.target.value});
    
  }
});