import React, { useState } from 'react';
import { loginUser } from '../services/UserService';
import { useNavigate } from 'react-router-dom';
import './UserPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log('Login successful:', response.data);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      // Redirect to the NotePage
      navigate('/notes');
    } catch (error) {
      console.error('Login failed:', error.response.data);
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className="user-page-container">
      <h2 className="title">Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="form-container">
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
        <button type="submit" className="button">Login</button>
      </form>
      <p className="redirect-text">
        Don't have an account? <a href="/signup">Sign up here</a>.
      </p>
    </div>
  );
}

export default LoginPage;
