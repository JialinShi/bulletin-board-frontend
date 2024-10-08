import React, { useEffect, useState } from 'react';
import { getAllNotesForUser, createNote, deleteNote, updateNote } from '../services/NoteService';
import Note from '../components/Note';
import './NotePage.css';

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      setUserId(user.id);
      fetchNotes(user.id);
    } else {
      // Redirect to login page if user is not logged in
      window.location.href = '/login';
    }
  }, []);

  const fetchNotes = async (userId) => {
    try {
      const response = await getAllNotesForUser(userId);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
      setErrorMessage('Error fetching notes.');
    }
  };

  const handleCreateNote = async () => {
    if (isEditing) {
      handleUpdateNote();
      return;
    }

    try {
      const newNote = { title, content };
      const response = await createNote(newNote);
      setNotes([...notes, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating note:', error);
      setErrorMessage('Error creating note.');
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNote(noteId, userId);
      setNotes(notes.filter(note => note.id !== noteId));
    } catch (error) {
      console.error('Error deleting note:', error);
      setErrorMessage('Error deleting note.');
    }
  };

  const handleEditNote = (note) => {
    setIsEditing(true);
    setCurrentNoteId(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleUpdateNote = async () => {
    try {
      const updatedNote = { title, content };
      await updateNote(currentNoteId, updatedNote, userId);
      setNotes(notes.map(note => (note.id === currentNoteId ? { ...note, ...updatedNote } : note)));
      setIsEditing(false);
      setTitle('');
      setContent('');
      setCurrentNoteId(null);
    } catch (error) {
      console.error('Error updating note:', error);
      setErrorMessage('Error updating note.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div className="note-page-container">
      <h1 className="title">Bulletin Board Notes</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="form-container">
        <input
          className="input-field"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
        />
        <textarea
          className="textarea-field"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note Content"
        />
        <button className="button" onClick={handleCreateNote}>{isEditing ? 'Update Note' : 'Create Note'}</button>
      </div>
      <div className="note-list">
        {notes.map(note => (
          <Note key={note.id} note={note} onDelete={handleDeleteNote} onUpdate={handleEditNote} />
        ))}
      </div>
    </div>
  );
};

export default NotePage;
