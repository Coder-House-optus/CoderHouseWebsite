// src/pages/CppPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './category-page.css';


const CppPage = () => {
  const location = useLocation();
  const { image } = location.state || {}; // Access the image passed through React Router

  return (
    <div className="category-page">
      <h1>Learn C++</h1>
      {image && <img src={image} alt="C++" className="category-image" />}
      <p>Here is a detailed C++ course content.</p>
      {/* You can add more details or images specific to C++ */}
    </div>
  );
};

export default CppPage;
