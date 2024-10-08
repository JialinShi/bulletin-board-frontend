import React, { useState } from 'react';
import { createUser } from '../services/UserService';
import './UserPage.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser({ username, email, password });
      console.log('Signup successful:', response.data);
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Signup failed:', error.response.data);
    }
  };

  return (
    <div className="user-page-container">
      <h2 className="title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-field"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
