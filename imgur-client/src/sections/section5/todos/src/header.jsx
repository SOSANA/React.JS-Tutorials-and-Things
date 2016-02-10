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
    console.log(this.state.text);
    
    // send value of text input to firebase. We immediately make a reference to our
    // firebase object. We use the 'push' method provided by firebase to create a 
    // new object in our remote database. Basically were saying hey firebase take 
    // this data and go and save it online on our database
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });
    // this basically helps clear out the text input field 
    this.setState({text: ''});
  },
  handleInputChange: function(event) {
    // testing the event handler for inputing text works
    //console.log(event.target.value);
    this.setState({text: event.target.value});
    
  }
});