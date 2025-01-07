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
          <div className="white-square">
 <iframe 
   className="map-container"
   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.23106539936572!2d79.9095391!3d23.1812547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1d49488b069%3A0xd0324f5742a34f41!2sOptus%20EdTech%20Solutions%2F%20Coder%20House%20-%20CAT%7C%20MAT%7C%20CMAT%7C%20CAMPUS%20PLACEMENT%20(CRT)!5e0!3m2!1sen!2sin!4v1736236995503!5m2!1sen!2sin"
   allowFullScreen=""
   loading="lazy"
   referrerPolicy="no-referrer-when-downgrade"
 ></iframe>
</div>
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
  <a href="https://www.instagram.com/coder___house/" className="instagram" target="_blank" rel="noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.linkedin.com/company/optus-ed-tech-solutions/" className="linkedin" target="_blank" rel="noreferrer">
    <i className="fab fa-linkedin-in"></i>
  </a>
</div>

        </div>
      </div>

      {/* Footer Logo */}
      <div className="footer-logo">
        <img src="/images/logo1.png" alt="Coder House Logo" />
        <img src="/images/optus.png" className='optus' alt="Optus Logo"/>
      </div>
    </footer>
  );
};

export default Footer;
