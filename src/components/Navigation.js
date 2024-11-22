// src/components/Navigation.js
import React, { useState } from 'react';
import './Navigation.css'; // Make sure to import your CSS for styling

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navigation">
      <a href="/" className="logo">
        <img src="/images/logo1.png" alt="Logo" /> {/* Accessing logo from public folder */}
      </a>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Programs
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li><a href="/CollegePrograms">College Programs</a></li>
              <li><a href="/campusPrograms">Campus Programs</a></li>
            </ul>
          )}
        </li>
        {/* Update the link for the "Features" section */}
        <li><a href="/features">Features</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;