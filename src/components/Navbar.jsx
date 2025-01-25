// src/components/Navbar.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import "../css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.clear("user");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Shams🛒</div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          {/* <Link to="/Home" className="navbar-link">Home</Link> */}
          {user && <li onClick={logout} className='navbar-li'>Logout</li>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
