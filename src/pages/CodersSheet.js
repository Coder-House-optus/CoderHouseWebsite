import React from 'react';
import './CoderSheet.css';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const CoderSheet = () => {
  const navigate = useNavigate();

  return (
    <div className="coder-sheet">
      {/* Back Button */}
      <button className="back-button1" onClick={() => navigate('/Features')}>
        &#8592; Back to Features
      </button>

      <div className="header">
      <h1 className="mainTitle">
      <span className="textGreen">Coders Sheet: </span> Practice Questions Galore
        </h1>
      </div>

      <div className="box2 shadow2">
  <span className="circle"></span>
  <p className="content1">Crafted by IIT’ians and NIT’ians.</p>
</div>
<div className="box2 shadow2">
  <span className="circle"></span>
  <p className="content1">Ideal for Self-learning coding enthusiasts.</p>
</div>
<div className="box2 shadow2">
  <span className="circle"></span>
  <p className="content1">Contains 1000+ questions of different levels and variety.</p>
</div>
<div className="box2 shadow2">
  <span className="circle"></span>
  <p className="content1">Unlock exclusive notes for enhanced learning.</p>
</div>
<div className="box2 shadow2">
  <span className="circle"></span>
  <p className="content1">Engage in daily scheduled practice questions.</p>
</div>
<div className="box2 shadow2">
  <span className="circle"></span>
  <p className="content1">Experience a dynamic set of practice questions tailored to your current coding proficiency level.</p>
</div>



<div className="image-section">
        <img
          className="rectangle-image"
          src="/images/code2.png"
          alt="Rectangle 1"
        />
        <img
          className="rectangle-image"
          src="/images/code4.png"
          alt="Rectangle 2"
        />
      </div>

    </div>
  );
};

export default CoderSheet;
