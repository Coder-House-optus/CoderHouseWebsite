import React from 'react';
import { Link } from 'react-router-dom';
import './Plan.css';

const Plan = () => {
  return (
    <div className="programs-container1">
      <div className="review-title1">
        <span>Our </span><span className="highlight">Programs</span>
      </div>
      <div className="container">
        <div className="btn">
        <Link to="/SchoolProgram">School Program</Link>
        </div>
        <div className="btn">
          <Link to="/collegePrograms">College Program</Link>
        </div>
        <div className="btn">
          <Link to="/CampusPrograms">Campus Program</Link>
        </div>
        <div className="btn">
          <Link to="/marathon-classes">Company Specific Workshop</Link>
        </div>
        <div className="btn">
          <Link to="/internship">Internship</Link>
        </div>
      </div>
    </div>
  );
};

export default Plan;