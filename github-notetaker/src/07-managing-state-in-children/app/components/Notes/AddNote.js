var React = require('react');

var AddNote = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired,
  },

  setRef: function(ref) {
    this.note = ref;
  },

  handleSubmit: function() {
    var newNote = this.note.value;
    this.note.value = ''; // this is to clear the input field
    this.props.addNote(newNote);
  },

  // ref is like a name tag that you give a input field so you can access that
  // specific value later
  render: function() {
    console.log('Notes: ', this.props.notes);
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add New Note"
          ref={this.setRef} />
        <span className='input-group-btn'>
        <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    );
  },
});

module.exports = AddNote;
