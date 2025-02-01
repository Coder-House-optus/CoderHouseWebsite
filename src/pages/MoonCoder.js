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
      {/* <div className="box3 shadow3">
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
      </div> */}

      {/* <div className="mentorship-program">
        <p className="mentorship-description">
          <strong>1. Topic-Wise Daily Coding Practice</strong>  
          Our structured practice sheets cover topics ranging from data structures (Arrays, Linked Lists, Trees, Graphs) to algorithms (Sorting, Searching, Dynamic Programming) and programming languages (C++, Python, Java).  
          The practice problems are curated to:
          <ul>
            <li>Strengthen fundamental concepts.</li>
            <li>Enhance problem-solving skills.</li>
            <li>Prepare students for coding rounds in job placements.</li>
          </ul>
        </p>
        <p className="mentorship-description">
          <strong>2. Hybrid Mode Analysis Sessions</strong>  
          We conduct analysis sessions two days a week, where expert mentors guide you through solutions—available online or offline.  
          Here, you’ll:
          <ul>
            <li>Explore alternative approaches.</li>
            <li>Get real-time answers to your doubts.</li>
          </ul>
        </p>
      </div> */}

      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Real-Time Doubt Resolution</p>
      </div>
      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Holistic Learning</p>
      </div>
      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Flexible Learning Modes</p>
      </div>
      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Curated Content</p>
      </div>
      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Personalized Attention</p>
      </div>
      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Experience</p>
      </div>

      {/* Image Section */}
      <div className="image-gallery">
        <div className="image-item">
          <img
            className="image-thumbnail"
            src="/images/Arrays.jpeg"
            alt="Arrays"
          />
          <div className="image-action">
            <button 
              className="action-button" 
              onClick={() => handleImageButtonClick('Documents/ArrayQuestion.docx')}>
              Go to Arrays
            </button>
          </div>
        </div>

        <div className="image-item">
          <img
            className="image-thumbnail"
            src="/images/Trees.jpeg"
            alt="Trees"
          />
          <div className="image-action">
            <button 
              className="action-button" 
              onClick={() => handleImageButtonClick('Documents/TreeQuestion.docx')}>
              Go to Trees
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MoonCoder;
