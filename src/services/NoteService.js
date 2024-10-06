import axios from 'axios';

const API_URL = 'http://localhost:8080/api/notes';

export const getAllNotes = async () => {
  return axios.get(API_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getAllNotesForUser = async (userId) => {
  return axios.get(`${API_URL}?userId=${userId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createNote = async (note, userId) => {
  return axios.post(`${API_URL}?userId=${userId}`, note, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateNote = async (noteId, note, userId) => {
  return axios.put(`${API_URL}/${noteId}?userId=${userId}`, note, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteNote = async (noteId, userId) => {
  return axios.delete(`${API_URL}/${noteId}?userId=${userId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};