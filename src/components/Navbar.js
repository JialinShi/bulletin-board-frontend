import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Bulletin Board
        </Link>
        <ul className="nav-menu">
        <li className="nav-item">
            <Link to="/notes" className="nav-links">
              My Notes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-links">
              Signup
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/useradmin" className="nav-links">
              UserAdmin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/noteadmin" className="nav-links">
              NoteAdmin
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;