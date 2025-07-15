import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Hasibur.Dev</div>

        <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#work" onClick={closeMenu}>Work</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li><a href="/admin" onClick={closeMenu}>Admin</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
