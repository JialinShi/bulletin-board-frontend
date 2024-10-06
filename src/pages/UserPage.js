// src/pages/UserPage.js
import React, { useEffect, useState } from 'react';
import { getAllUsers, createUser, deleteUser, updateUser } from '../services/UserService';
import './UserPage.css';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

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

  const handleCreateUser = async () => {
    if (isEditing) {
      handleUpdateUser();
      return;
    }

    try {
      const newUser = { username, email, password };
      const response = await createUser(newUser);
      setUsers([...users, response.data]);
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditUser = (user) => {
    setIsEditing(true);
    setCurrentUserId(user.id);
    setUsername(user.username);
    setEmail(user.email);
    setPassword(''); // Clear password field for security reasons
  };

  const handleUpdateUser = async () => {
    try {
      const updatedUser = { username, email, password };
      await updateUser(currentUserId, updatedUser);
      setUsers(users.map(user => (user.id === currentUserId ? { ...user, ...updatedUser } : user)));
      setIsEditing(false);
      setUsername('');
      setEmail('');
      setPassword('');
      setCurrentUserId(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleClear = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setIsEditing(false);
    setCurrentUserId(null);
  };

  return (
    <div className="user-page-container">
      <h1 className="title">User Management</h1>
      <div className="form-container">
        <input
          className="input-field"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="input-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="button" onClick={handleCreateUser}>{isEditing ? 'Update User' : 'Create User'}</button>
        <button className="button clear-button" onClick={handleClear}>Clear</button>
      </div>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user">
            <h3 className="user-username">{user.username}</h3>
            <p className="user-email">{user.email}</p>
            <button className="button edit-button" onClick={() => handleEditUser(user)}>Edit</button>
            <button className="button delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;