import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

/**
 * Fetches all users from the server
 * 
 * @returns Respnse of all users
 */
export const getAllUsers = async () => {
  return axios.get(API_URL);
};

/**
 * Creates a new User
 * 
 * @param {*} user The user object to be created
 * @returns Response of creating a new user
 */
export const createUser = async (user) => {
  return axios.post(API_URL, user);
};

/**
 * Updates an existing user based on userId
 * 
 * @param {*} userId Id of the user to be updated 
 * @param {*} user Response of updating the existing user
 * @returns 
 */
export const updateUser = async (userId, user) => {
  return axios.put(`${API_URL}/${userId}`, user);
};

/**
 * Deletes an existing user based on userId
 * 
 * @param {*} userId Id of the user to be deleted
 * @returns Response of deleting the existing user
 */
export const deleteUser = async (userId) => {
  return axios.delete(`${API_URL}/${userId}`);
};