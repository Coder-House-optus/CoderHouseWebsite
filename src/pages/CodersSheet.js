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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <div className="header1">
        <h1 className="mainTitle1">
          <span className="textGreen">Coders Sheet: </span> Practice Galore
        </h1>
        <p className="mentorpara1">Welcome to the CoderSheet Library Program...</p>

        {/* Join Us Button */}
        <button className="join-us-button5" onClick={handleJoinUs}>
          Join Us Today!!
        </button>
      </div>

      

      {/* Cards for Atcoder, Codeforces, and Leetcode */}
      <div className="coding-platforms">
  <div className="platform-card" onClick={() => handleImageButtonClick('atcoder')}>
    <img className="platform-logo" src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F566497%2F6c8a7829-0fb6-48c4-45ff-5088cf46e7c4.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=1fe8bf292f0493ad4ddff43972b0d178" alt="Atcoder Logo" />
    <h3>Atcoder</h3>
    <p>Practice coding problems on Atcoder.</p>
  </div>
  <div className="platform-card" onClick={() => handleImageButtonClick('codeforces')}>
    <img className="platform-logo" src="https://camo.githubusercontent.com/b5f0879162f3fb94fa211b30508d39bfcce3a406883e58e77d27e867204bb76c/68747470733a2f2f6173736574732e636f6465666f726365732e636f6d2f75736572732f6b6775736576612f636f6d6d656e74732f63662e706e67" alt="Codeforces Logo" />
    <h3>Codeforces</h3>
    <p>Participate in contests and solve problems on Codeforces.</p>
  </div>
  <div className="platform-card" onClick={() => handleImageButtonClick('leetcode')}>
    <img className="platform-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/916px-LeetCode_Logo_black_with_text.svg.png" alt="Leetcode Logo" />
    <h3>Leetcode</h3>
    <p>Prepare for interviews and competitive programming on Leetcode.</p>
  </div>
</div>

    </div>
  );
};

export default CoderSheet;
