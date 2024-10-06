import React from 'react';

const Note = ({ note, onDelete, onUpdate }) => {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onUpdate(note.id)}>Update</button>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default Note;