import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getAllUsers = async () => {
  return axios.get(`${API_URL}/users`);
};

export const createUser = async (user) => {
  return axios.post(`${API_URL}/users`, user, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateUser = async (userId, user) => {
  return axios.put(`${API_URL}/users/${userId}`, user, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteUser = async (userId) => {
  return axios.delete(`${API_URL}/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loginUser = async (credentials) => {
  return axios.post(`${API_URL}/login`, credentials, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
