import React, { useState } from 'react';
import { createUser } from '../services/UserService';
import { useNavigate } from 'react-router-dom';
import './UserPage.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser({ username, email, password });
      // Redirect to login page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className="user-page-container">
      <h2 className="title">Sign Up</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
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
      <p className="redirect-text">
        Already have an account? <a href="/login">Login here</a>.
      </p>
    </div>
  );
}

export default SignupPage;
