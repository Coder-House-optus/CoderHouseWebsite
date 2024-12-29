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
        
        {/* Join Us Button */}
        <button className="join-us-button5" onClick={handleJoinUs}>
          Join Us Today!!
        </button>
      </div>

      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Crafted by IIT’ians and NIT’ians.</p>
      </div>
      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Ideal for Self-learning coding enthusiasts.</p>
      </div>
      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Contains 1000+ questions of different levels and variety.</p>
      </div>
      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Unlock exclusive notes for enhanced learning.</p>
      </div>
      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Engage in daily scheduled practice questions.</p>
      </div>
      <div className="box2 shadow2">
        <span className="circle"></span>
        <p className="content2">Experience a dynamic set of practice questions tailored to your current coding proficiency level.</p>
      </div>

      {/* Image Section */}
      <div className="image-section">
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
