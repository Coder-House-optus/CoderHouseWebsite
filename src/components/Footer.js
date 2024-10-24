import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="location-box">
          <h3><i className="fas fa-map-marker-alt"></i> Our Location</h3>
          <p>3rd Floor, <br /> Above Indian Bank,<br /> MR-4 Road, Vijay Nagar,<br /> Jabalpur</p>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-logo">
        <img src="/images/logo1.png" alt="Coder House Logo" />
      </div>
    </footer>
  );
};

export default Footer;
