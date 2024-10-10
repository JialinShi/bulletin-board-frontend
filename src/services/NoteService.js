import axios from 'axios';

const API_URL = 'http://localhost:8080/api/notes';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

export const getAllNotesForUser = async (userId) => {
  return axios.get(`${API_URL}/user/${userId}`, {
    headers: getAuthHeaders(),
  });
};

export const createNote = async (note) => {
  return axios.post(`${API_URL}`, note, {
    headers: getAuthHeaders(),
  });
};

export const updateNote = async (noteId, note, userId) => {
  return axios.put(`${API_URL}/user/${userId}/note/${noteId}`, note, {
    headers: getAuthHeaders(),
  });
};

export const deleteNote = async (noteId, userId) => {
  return axios.delete(`${API_URL}/user/${userId}/note/${noteId}`, {
    headers: getAuthHeaders(),
  });
};
