import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import NoteAdminPage from './pages/NoteAdminPage';
import UserAdminPage from './pages/UserAdminPage';
import Navbar from './components/Navbar';
import NotePage from './pages/NotePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/notes" element={<NotePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/noteadmin" element={<NoteAdminPage />} />
        <Route path="/useradmin" element={<UserAdminPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
