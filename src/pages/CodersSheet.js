import React from 'react';
import './CoderSheet.css';
import { useNavigate } from 'react-router-dom';

const CoderSheet = () => {
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
    <div className="coder-sheet">
      {/* Back Button */}
      <button className="back-button1" onClick={() => navigate('/Features')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <div className="header1">
        <h1 className="mainTitle1">
          <span className="textGreen">Coders Sheet: </span> Practice Questions Galore
        </h1>
        <p className="mentorpara1">Welcome to the Mentorship Program, an initiative designed to provide one-on-one (1:1) guidance to students, fostering their personal, academic, and professional growth. This program connects students with experienced mentors who offer tailored support, ensuring that every individual achieves their fullest potential.</p>

        {/* Join Us Button */}
        <button className="join-us-button5" onClick={handleJoinUs}>
          Join Us Today!!
        </button>
      </div>

      <div className="mentorship-program">
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
      </div>

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

export default CoderSheet;