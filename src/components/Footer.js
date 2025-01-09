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
  <a 
    href="https://www.google.com/maps/place/Optus+EdTech+Solutions%2F+Coder+House+-+CAT%7C+MAT%7C+CMAT%7C+CAMPUS+PLACEMENT+(CRT)/@23.1811776,79.9094439,17z/data=!4m14!1m7!3m6!1s0x3981b1d49488b069:0xd0324f5742a34f41!2sOptus+EdTech+Solutions%2F+Coder+House+-+CAT%7C+MAT%7C+CMAT%7C+CAMPUS+PLACEMENT+(CRT)!8m2!3d23.1811776!4d79.9094439!16s%2Fg%2F11rzwtsxxw!3m5!1s0x3981b1d49488b069:0xd0324f5742a34f41!8m2!3d23.1811776!4d79.9094439!16s%2Fg%2F11rzwtsxxw?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      className="map-container" 
      src="/images/location1.jpeg" 
      alt="Location Map" 
      loading="lazy" 
    />
  </a>
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
  <a href="https://www.linkedin.com/showcase/coderrhouse/posts/?feedView=all" className="linkedin" target="_blank" rel="noreferrer">
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
