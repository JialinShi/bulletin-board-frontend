import React, { useEffect, useState } from 'react';
import { getAllNotes, createNote, deleteNote, updateNote } from '../services/NoteService';
import Note from '../components/Note';

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await getAllNotes();
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchNotes();
  }, []);

  const handleCreateNote = async () => {
    try {
      const newNote = { title, content };
      await createNote(newNote);
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNote(noteId);
      setNotes(notes.filter(note => note.id !== noteId));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleUpdateNote = (noteId) => {
    console.log(`Update note with ID: ${noteId}`);
  };

  return (
    <div>
      <h1>Bulletin Board Notes</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
      />
      <button onClick={handleCreateNote}>Create Note</button>

      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={handleDeleteNote} onUpdate={handleUpdateNote} />
      ))}
    </div>
  );
};

export default NotePage;