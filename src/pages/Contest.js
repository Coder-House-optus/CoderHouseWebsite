import React from 'react';
import "./Contest.css";
import { useNavigate } from 'react-router-dom';

const Contest = () => {
  const navigate = useNavigate();

  return (
    <div className="contest-container">
      <button className="nav-return-btn" onClick={() => navigate('/Features')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <h1 className="contest-title">Contest Journey</h1>

      <div className="main-layout">
        <div className="cards-container">
          <div className="info-card">
            <div className="card-contents">
              <h3>In-house Coding Challenges</h3>
              <p>Structured programs for skill enhancement.</p>
            </div>
            <img src="../images/contest1.png" alt="Coding challenge icon" />
          </div>
          <div className="info-card">
            <div className="card-contents">
              <h3>National & International Competitions</h3>
              <p>Visual guides and flowcharts for contest prep.</p>
            </div>
            <img src="../images/contest2.png" alt="Competition icon" />
          </div>
        </div>

        <div className="visual-section">
          <img src="/images/code1.png" alt="Contest Illustration" className="feature-image" />
        </div>
      </div>
    </div>
  );
};

export default Contest;