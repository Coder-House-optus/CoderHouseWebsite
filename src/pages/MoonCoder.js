import React from 'react';
import './MoonCoder.css';  // Ensure the styles are adapted to Moon Coder
import { useNavigate } from 'react-router-dom';

const MoonCoder = () => {
  const navigate = useNavigate();

  // Function to handle Join Us button click
  const handleJoinUs = () => {
    navigate('/join-us');
  };

  // Function to handle navigation for buttons below images
  const handleImageButtonClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="moon-coder">
      {/* Back Button */}
      <button className="back-button1" onClick={() => navigate('/Features')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <div className="header1">
      <h1 className="mainTitle1">
         Moon Coder
        </h1>
        <p className="mentorpara3">
          Dive into a world of innovation, challenges, and growth with Moon Coder: The Contest Journey. A platform designed to inspire and empower students through coding contests and hackathons.
        </p>
      </div>

      <div className="moon-coder-program">
        <p className="moon-coder-description">
          <strong>1. Exclusive Coding Contests and Hackathons</strong>
          Participate in online coding contests and hackathons hosted exclusively for Coder House students. Showcase your skills in a competitive yet collaborative environment.
        </p>
        <p className="moon-coder-description">
          <strong>2. Global Event Updates</strong>
          Stay updated on worldwide coding contests and hackathons with event details, registration info, and tips.
        </p>
        <p className="moon-coder-description">
          <strong>3. Exciting Rewards and Recognition</strong>
          Compete for cash rewards, certificates, internship opportunities, and industry recognition.
        </p>
        <p className="moon-coder-description">
          <strong>4. Real-World Experience</strong>
          Develop critical skills like time management, teamwork, and innovative thinking through real-world challenges.
        </p>
        <p className="moon-coder-description">
          <strong>5. Community Engagement and Networking</strong>
          Collaborate with peers and industry professionals to build lasting connections in the tech community.
        </p>
      </div>

      {/* Types of Events */}
      <div className="box3 shadow3">
        <span className="circle"></span>
        <p className="content3">Beginner-Friendly Coding Contests</p>
      </div>
      <div className="box3 shadow3">
        <span className="circle"></span>
        <p className="content3">Advanced Coding Competitions</p>
      </div>
      <div className="box3 shadow3">
        <span className="circle"></span>
        <p className="content3">Team-Based Hackathons</p>
      </div>
      <div className="box3 shadow3">
        <span className="circle"></span>
        <p className="content3">Thematic Hackathons</p>
      </div>
    </div>
  );
};

export default MoonCoder;
