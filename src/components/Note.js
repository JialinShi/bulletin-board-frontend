import React from 'react';
import './Note.css';

const Note = ({ note, onDelete, onUpdate }) => {
  return (
    <div className="note">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>
      <p className="note-author"><strong>Author:</strong> {note.username}</p>
      <button className="button edit-button" onClick={() => onUpdate(note)}>Edit</button>
      <button className="button delete-button" onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};
export default Note;