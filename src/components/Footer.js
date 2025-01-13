import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/AboutUs') {
      const element = document.getElementById('contact-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to AboutUs with a hash in the URL
      navigate('/AboutUs#contact-section');
    }
    
  };

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
    <li><a href="#contact-section" onClick={handleContactClick}>Contact Us</a></li>
    <li><a href="/privacy">Privacy Policy</a></li>
    <li><a href="/Terms&Conditions">Terms & Condition</a></li>
  </ul>
</div>

        {/* Social Media Links */}
        <div className="footer-social">
  <h3>Connect With Us</h3>
  <div className="social-icons">
    <a href="https://www.facebook.com/p/Optus-edtech-100083838727322/" className="facebook" target="_blank" rel="noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="social-icon">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
      </svg>
    </a>
    <a href="https://www.instagram.com/coder___house/" className="instagram" target="_blank" rel="noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="social-icon">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
      </svg>
    </a>
    <a href="https://www.linkedin.com/showcase/coderrhouse/posts/?feedView=all" className="linkedin" target="_blank" rel="noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="social-icon">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
      </svg>
    </a>
  </div>
</div>

        </div>

      {/* Footer Logo */}
      <div className="footer-logo">
        <img src="/images/logo1.png" alt="Coder House Logo" />
        <img src="/images/optus.png" className='optus' alt="Optus Logo" />
      </div>
    </footer>
  );
};

export default Footer;
