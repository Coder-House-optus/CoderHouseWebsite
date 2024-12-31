import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grey-box"></div>

      <div className="footer-container">
        {/* Location Box */}
        <div className="location-box">
          <h3><i className="fas fa-map-marker-alt"></i> Our Location</h3>
          <p>
            3rd Floor, <br />
            Above Indian Bank, <br />
            MR-4 Road, Vijay Nagar, <br />
            Jabalpur, Madhya Pradesh.
          </p>
          {/* White Square Overlay */}
          <div className="white-square"></div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <ul>
            <li><a href="mailto:coderhouseoptus@gmail.com">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/Terms&Conditions">Terms & Condition</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
  <a href="https://www.facebook.com/p/Optus-edtech-100083838727322/" className="facebook" target="_blank" rel="noreferrer">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://instagram.com" className="instagram" target="_blank" rel="noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noreferrer">
    <i className="fab fa-linkedin-in"></i>
  </a>
</div>

        </div>
      </div>

      {/* Footer Logo */}
      <div className="footer-logo">
        <img src="/images/logo1.png" alt="Coder House Logo" />
        <img src="/images/optus.png" alt="Optus Logo"/>
      </div>
    </footer>
  );
};

export default Footer;
