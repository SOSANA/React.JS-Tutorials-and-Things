import React from 'react';

class AddNote extends React.Component {
  handleSubmit() {
    var newNote = this.note.value;
    this.note.value = ''; // this is to clear the input field
    this.props.addNote(newNote);
  }

  setRef(ref) {
    this.note = ref;
  }

  // ref is like a name tag that you give a input field so you can access that specific value later
  // by using the arrow function we avoid using the bind in both ref and onClick below
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add New Note"
          ref={ (ref) => this.setRef(ref) } />
        <span className='input-group-btn'>
        <button className="btn btn-default" type="button" onClick={ () => this.handleSubmit() }>Submit</button>
        </span>
      </div>
    );
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired,
};

export default AddNote;
