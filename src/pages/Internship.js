import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./Internship.css";

const Internship = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const handleBack = () => {
    navigate("/features");  // Navigate to the Features page
  };

  return (
    <div className="internship-container1">
      {/* Back Button */}
      <button className="back-button1" onClick={handleBack}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
      </button>

      {/* Internship Title */}
      <h1 className="internship-title">Internship</h1>

      {/* Who Can Apply Section */}
      <div className="eligibility-section">
        <h2 className="section-title">Who Can Apply</h2>
        <p className="resume-heading3">Students from Relevant Streams: Engineering and Coding Lovers
        </p>
        <br/>
        <p className="resume-heading3">Passionate learners eager to gain real-world experience.</p>
      </div>

      {/* Internship Highlights Section */}
      <div className="highlights-section">
        <h2 className="section-title">Internship Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <div className="highlight-circle1">💡</div>
            <h3 className="highlight-title">Practical Learning</h3>
            <p className="highlight-description">
              Work on live projects and enhance your skills.
            </p>
          </div>
          <div className="highlight-item">
            <div className="highlight-circle2">🎓</div>
            <h3 className="highlight-title">Guidance from Experts</h3>
            <p className="highlight-description">
              Learn from Industry Professionals.
            </p>
          </div>
          <div className="highlight-item">
            <div className="highlight-circle3">🤝</div>
            <h3 className="highlight-title">Networking Opportunities</h3>
            <p className="highlight-description">
              Connect with Peers and Mentors.
            </p>
          </div>
          <div className="highlight-item">
            <div className="highlight-circle4">🏅</div>
            <h3 className="highlight-title">Certificate of Completion</h3>
            <p className="highlight-description">
              Add a valuable credential to your resume!
            </p>
          </div>
        </div>

        {/* Connecting Lines */}
        
      </div>
    </div>
  );
};

export default Internship;
