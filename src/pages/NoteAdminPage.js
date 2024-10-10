import React, { useEffect, useState } from 'react';
import { getAllNotesForUser, createNote, deleteNote, updateNote } from '../services/NoteService';
import { getAllUsers } from '../services/UserService';
import Note from '../components/Note';
import './NotePage.css';

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchNotes = async () => {
        try {
          const response = await getAllNotesForUser(userId);
          setNotes(response.data);
        } catch (error) {
          console.error('Error fetching notes:', error);
        }
      };
      fetchNotes();
    }
  }, [userId]);

  const handleCreateNote = async () => {
    if (isEditing) {
      handleUpdateNote();
      return;
    }

    try {
      const newNote = { title, content };
      const response = await createNote(newNote, userId);
      setNotes([...notes, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNote(noteId, userId);
      setNotes(notes.filter(note => note.id !== noteId));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleEditNote = (note) => {
    setIsEditing(true);
    setCurrentNoteId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setUserId(userId);
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
    }
  };

  const handleClear = () => {
    setTitle('');
    setContent('');
    setIsEditing(false);
    setCurrentNoteId(null);
  };

  return (
    <div className="note-page-container">
      <select
          className="select-field"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          disabled={isEditing}
        >
          <option value="" disabled>Select Author</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
      <h1 className="title">Bulletin Board Notes</h1>
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
