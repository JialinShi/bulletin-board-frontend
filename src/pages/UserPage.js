import React, { useEffect, useState } from 'react';
import { getAllUsers, createUser, deleteUser, updateUser } from '../services/UserService';
import User from '../components/User';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
    try {
      const newUser = { name, email };
      await createUser(newUser);
      setUsers([...users, newUser]);
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

  const handleUpdateUser = (userId) => {
    // Implement your update logic here
    console.log(`Update user with ID: ${userId}`);
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="User Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="User Email"
      />
      <button onClick={handleCreateUser}>Create User</button>

      {users.map(user => (
        <User key={user.id} user={user} onDelete={handleDeleteUser} onUpdate={handleUpdateUser} />
      ))}
    </div>
  );
};

export default UserPage;
