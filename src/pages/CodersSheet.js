import React from 'react';
import './CoderSheet.css';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const CoderSheet = () => {
  const navigate = useNavigate();

  // Function to handle Join Us button click
  const handleJoinUs = () => {
    navigate('/join-us'); // Assuming you have a route for the Join Us page
  };

  // Function to handle navigation for buttons below images
  const handleImageButtonClick = (page) => {
    navigate(`/${page}`); // Navigating to the respective page
  };

  return (
    <div className="coder-sheet">
      {/* Back Button */}
      <button className="back-button1" onClick={() => navigate('/Features')}>
        Back to Features
      </button>

      <div className="header1">
        <h1 className="mainTitle1">
          <span className="textGreen">Coders Sheet: </span> Practice Questions Galore
        </h1>
        <p1 class="mentorpara1">Welcome to the Mentorship Program, an initiative designed to provide one-on-one (1:1) guidance to students, fostering their personal, academic, and professional growth. This program connects students with experienced mentors who offer tailored support, ensuring that every individual achieves their fullest potential.</p1>
      {/* Stripes */}
        
        {/* Join Us Button */}
        <button className="join-us-button5" onClick={handleJoinUs}>
          Join Us Today!!
        </button>
      </div>

      <div class="mentorship-program">
  <p><strong>1. Topic-Wise Daily Coding Practice</strong>  
    Our structured practice sheets cover topics ranging from data structures (Arrays, Linked Lists, Trees, Graphs) to algorithms (Sorting, Searching, Dynamic Programming) and programming languages (C++, Python, Java).  
    The practice problems are curated to:
    <ul>
      <li>Strengthen fundamental concepts.</li>
      <li>Enhance problem-solving skills.</li>
      <li>Prepare students for coding rounds in job placements.</li>
    </ul>
  </p>
  <p><strong>2. Hybrid Mode Analysis Sessions</strong>  
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
        <p className="content2">Real-Time Doubt Resolutio</p>
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
        <p className="content2">Experien</p>
      </div>

      {/* Image Section */}
      <div className="image-section5">
        <div className="image-container">
          <img
            className="rectangle-image"
            src="/images/arrays.jpeg"
            alt="Arrays"
          />
          <div className="image-buttons">
          <button 
            className="join-us-button5" 
            onClick={() => window.location.href = '/Documents/ArrayQuestion.docx'}>
            Go to Arrays
          </button>

          </div>
        </div>

        <div className="image-container">
          <img
            className="rectangle-image"
            src="/images/trees.jpeg"
            alt="Trees"
          />
          <div className="image-buttons">
          <button 
            className="join-us-button5" 
            onClick={() => window.location.href = '/Documents/TreeQuestion.docx'}>
            Go to Arrays
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoderSheet;
