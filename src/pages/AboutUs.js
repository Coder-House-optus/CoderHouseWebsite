import React from 'react';
import './AboutUs.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navigation />
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>
          Coder House is a dynamic learning platform that empowers individuals to master coding through hands-on courses, expert guidance, and a vibrant community.
        </p>
      </div>

      <div className="about-us-section trust-section">
        <div className="trust-content">
          <h2>Unlock Your Potential, Code Your Future</h2>
          <p>Here's why Coder House is the best:</p>
          <ul>
            <li><strong>Hands-on Learning:</strong> Gain real-world experience with projects.</li>
            <li><strong>Expert Mentorship:</strong> Learn from industry professionals.</li>
            <li><strong>Flexible Learning:</strong> Study at your own pace, on your schedule.</li>
            <li><strong>Comprehensive Curriculum:</strong> Master a wide range of coding languages and tools.</li>
            <li><strong>Vibrant Community:</strong> Collaborate with peers and expand your network.</li>
            <li><strong>Job-Ready Skills:</strong> Acquire the skills employers are looking for.</li>
          </ul>
        </div>

        <div className="trust-image-container">
          <div></div>
          <div className="trust-overlay">
            <h3>Why Choose Coder House?</h3>
            <p>Join us and experience real transformation in your career:</p>
            <ul>
              <li><strong>147% Average Hike</strong> in career growth</li>
              <li><strong>1000+ Careers Transformed</strong> with real-world skills</li>
              <li><strong>50+ Experienced Mentors</strong> guiding you to success</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="green-square"></div>

      <div className="about-us-section give-back-section">
        <h2>We Give Back</h2>
        <p>
          At Coder House, we believe in making education accessible to all. Our mission is to uplift students in Tier 2 and Tier 3 cities by providing them with high-quality coding education, empowering them to unlock new career opportunities and build a better future. For students in Tier 1 cities, we offer additional support to help them refine their skills, advance their careers, and stay ahead in the ever-evolving tech landscape. We're dedicated to creating a level playing field, ensuring every student has the chance to succeed, no matter where they're from.
        </p>
      </div>

      <div className="about-us-section quote-section">
        <div className="quote-content">
          <h3>"The future belongs to those who learn more skills and combine them in creative ways."</h3>
          <p>- Coder House</p>
        </div>
      </div>

      <div className="about-us-section cta-section">
        <div className="cta-content">
          <p>
            Unlock your potential and shape your future with Coder House. Join us today to start your learning journey!
          </p>
          <button className="cta-button">Join Us Today!</button>
        </div>
      </div>
      <div className='card-section-about'>
      <div className="contact-card">
        <img src="./images/about-contact.jpg" alt="Contact" className="contact-image" />
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: coderhouseoptus@gmail.com</p>
          <p>Phone: +91 9926865740</p>
        </div>
      </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default AboutUs;