import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isProgramsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [isInfoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleProgramsDropdown = () => {
    setProgramsDropdownOpen(!isProgramsDropdownOpen);
    setInfoDropdownOpen(false); // Close other dropdown
  };

  const toggleInfoDropdown = () => {
    setInfoDropdownOpen(!isInfoDropdownOpen);
    setProgramsDropdownOpen(false); // Close other dropdown
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <a href="/" className="logo">
        <img src="/images/logo1.png" alt="Logo" />
      </a>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>

        <li className={`dropdown ${isProgramsDropdownOpen ? 'active' : ''}`}>
          <button className="dropdown-toggle set-font" onClick={toggleProgramsDropdown}>
            Programs
          </button>
          <ul className="dropdown-content">
            <li><a href="/CollegePrograms">College Programs</a></li>
            <li><a href="/campusPrograms">Campus Programs</a></li>
          </ul>
        </li>

        <li className={`dropdown ${isInfoDropdownOpen ? 'active' : ''}`}>
          <button className="dropdown-toggle set-font" onClick={toggleInfoDropdown}>
            Information
          </button>
          <ul className="dropdown-content">
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/Gform">Contact Us</a></li>
          </ul>
        </li>

        <li><a href="/features">Features</a></li>
        <li><a href="/Notes">Notes</a></li>
        <li><a href="/Achievers">Achievers</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;