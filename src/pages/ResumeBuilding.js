import React from 'react';
import './Resumebuilding.css';
import { FaCheckCircle } from 'react-icons/fa'; // Using FontAwesome icons
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation

const ResumeBuilding = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBackClick = () => {
    navigate('/Features'); // Specify the route of the feature page
  };

  return (
    <div className="resume-container">
      <button className="back-button1" onClick={handleBackClick}>
        Back to Feature
      </button>
      <div className="main-heading">
        <h1>Resume Building | Technical Interview Modules</h1>
      </div>
      <div className="resume-item">
        <FaCheckCircle className="icon" />
        <div>
          <h3 className="resume-heading">Professional Resume Workshops</h3>
          <p className="resume-description">
            Craft standout resumes with personalized guidance.
          </p>
          <p className="resume-description">
            Industry-standard templates and best practices.
          </p>
        </div>
      </div>
      <div className="resume-item">
        <FaCheckCircle className="icon" />
        <div>
          <h3 className="resume-heading">Technical & HR Mock Interviews</h3>
          <p className="resume-description">
            Simulated real-world interviews with expert evaluators.
          </p>
          <p className="resume-description">
            Feedback to refine communication and technical skills.
          </p>
        </div>
      </div>
      <div className="resume-item">
        <FaCheckCircle className="icon" />
        <div>
          <h3 className="resume-heading">Soft Skill Enhancement</h3>
          <p className="resume-description">
            Build confidence and ace behavioral questions.
          </p>
        </div>
      </div>
      <div className="resume-item">
        <FaCheckCircle className="icon" />
        <div>
          <h3 className="resume-heading">Job-Ready Prep</h3>
          <p className="resume-description">
            Comprehensive training to tackle recruitment challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilding;
