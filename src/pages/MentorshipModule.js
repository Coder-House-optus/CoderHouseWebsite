import React from 'react';
import "./MentorshipModule.css";
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const  MentorshipModule = () => {
  const navigate = useNavigate();

  return (
    <div className="container1">
      {/* Back Button */}
      <button className="back-button1" onClick={() => navigate('/Features')}>
        &#8592; Back to home
      </button>

      {/* Heading */}
      <h1 className="heading1">Mentorship Module: Guiding Your Journey</h1>
      
      {/* Stripes */}
      <div className="box shadow">
        {/* <span className="circle"></span> */}
        <p className="content1">2-hour sessions with expert mentors addressing all your 'Career As Coder' queries.</p>
      </div>

      <h1 className="heading2">Coding Library: Your Perfect Coding Heaven</h1>
      
      <div className="box shadow">
        {/* <span className="circle"></span> */}
        <p className="content1">Monthly subscription model for a conducive coding environment At - </p>
      </div>
      
      <h2>
        <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: 'black' }}></i>
        Coder House, Vijay Nagar, Jabalpur
      </h2>

      <div className="image-section2">
        <img
          className="rectangle-image2"
          src="/images/code3.png"
          alt="Rectangle 1"
        />
        <img
          className="rectangle-image2"
          src="/images/code5.png"
          alt="Rectangle 2"
        />
      </div>


    </div>
  );
};

export default MentorshipModule;
