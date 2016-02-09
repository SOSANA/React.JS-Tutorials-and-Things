import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

// stateless function - only has a render method or no methods at all
// instead of doing 'this.props.notes' we can pass them in as arguments
const Notes = ({ username, notes, addNote }) => {
  return (
    <div>
      <h3>Notes for {username}</h3>
      <AddNote username={username} addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
};

Notes.propTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired,
  };

export default Notes;
