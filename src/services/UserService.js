import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const getAllUsers = async () => {
  return axios.get(API_URL);
};

export const createUser = async (user) => {
  return axios.post(API_URL, user, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateUser = async (userId, user) => {
  return axios.put(`${API_URL}/${userId}`, user, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteUser = async (userId) => {
  return axios.delete(`${API_URL}/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};