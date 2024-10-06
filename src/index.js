import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import NotePage from './pages/NotePage';
import UserPage from './pages/UserPage';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NotePage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
