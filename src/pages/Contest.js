import React from 'react';
import "./Contest.css";
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const Contest = () => {
  const navigate = useNavigate();

  return (
    <div className="container1">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/feature')}>
        &#8592; Back
      </button>

      {/* Heading */}
      <h1 className="heading">Contest</h1>

      {/* Stripes */}
      <div className="box shadow">
        <span className="circle"></span>
        <p className="content1">Hello</p>
      </div>
      <div className="box shadow">
        <span className="circle"></span>
        <p className="content1">Hello</p>
      </div>
      <div className="box shadow">
        <span className="circle"></span>
        <p className="content1">Hello</p>
      </div>
    </div>
  );
};

export default Contest;
