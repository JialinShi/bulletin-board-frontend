import axios from 'axios';

const API_URL = 'http://localhost:8080/api/notes';

/**
 * Fetches all notes from the server. 
 * 
 * @returns A promise that contains resolves to the response from the API containing all notes
 */
export const getAllNotes = async () => {
  return axios.get(API_URL);
};

/**
 * Creates a new Note
 * 
 * @param {*} note 
 * @returns A promise that resolves to the response from the API after creating the note.
 */
export const createNote = async (note) => {
  return axios.post(API_URL, note);
};

/**
 * Updates an existing note by its ID.
 * 
 * @param {*} noteId The ID of the note to update.
 * @param {*} note The updated note object.
 * @returns A promise that resolves to the response from the API after updating the note.
 */
export const updateNote = async (noteId, note) => {
  return axios.put(`${API_URL}/${noteId}`, note);
};

/**
 * Deletes a note by its ID.
 * 
 * @param {*} noteId The ID of the note to be deleted.
 * @returns A promise that resolves to the response from the API after deleting the note.
 */
export const deleteNote = async (noteId) => {
  return axios.delete(`${API_URL}/${noteId}`);
};