import React, { useState, useEffect } from 'react';
import './Resumebuilding.css';
import { useNavigate } from 'react-router-dom';

const ResumeBuilding = () => {
  const navigate = useNavigate();

  // Images array for the slideshow
  const images = [
    // '../images/Association/resume1.jpg',
    '../images/Association/resume2.jpg',
    '../images/Association/resume3.jpg',
    '../images/Association/resume6.jpeg',
    '../images/Association/resume5.jpeg',
    '../images/Association/resume7.jpeg',
    '../images/Association/resume8.jpeg',
    '../images/Association/resume9.jpeg',
    '../images/Association/resume10.jpeg',
    '../images/Association/resume11.jpeg',
    '../images/Association/resume12.jpeg',
    '../images/Association/resume14.jpeg',
    '../images/Association/resume15.jpeg',
    '../images/Association/resume16.jpeg',
    '../images/Association/resume17.jpeg',
    '../images/Association/resume18.jpeg',
    '../images/Association/resume19.jpeg',
    '../images/Association/resume20.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer); // Clean up the interval when the component unmounts
  }, [images.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handleBackClick = () => {
    navigate('/Features');
  };

  return (
    <div className="resume-container">
      <button className="back-button" onClick={handleBackClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      
      <div className="main-heading1">
        <h1 className='main-heading'>Resume Building | Technical Interview Modules</h1>
      </div>

      {/* Infinite Slideshow */}
      <div className="slideshow-container">
        {/* <button className="arrow-button left" onClick={handlePrevImage}>
          &#10094;
        </button> */}
        <div className="slideshow-images">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slideshow-item`}
            >
              <img
                src={image}
                alt={`Slideshow ${index + 1}`}
                className="slideshow-image"
              />
            </div>
          ))}
        </div>
        {/* <button className="arrow-button right" onClick={handleNextImage}>
          &#10095;
        </button> */}
      </div>

      {/* Cards */}
      <div className="resume-grid">
        <div className="resume-card">
          <h2>📄 Professional Resume Workshops</h2>
          <p>Craft standout resumes with personalized guidance.</p>
          <p>Industry-standard templates and best practices.</p>
        </div>

        <div className="resume-card">
          <h2>📝 Technical & HR Mock Interviews</h2>
          <p>Simulated real-world interviews with expert evaluators.</p>
          <p>Feedback to refine communication and technical skills.</p>
        </div>

        <div className="resume-card">
          <h2>💡 Soft Skill Enhancement</h2>
          <p>Build confidence and ace behavioral questions.</p>
        </div>

        <div className="resume-card">
          <h2>🚀 Job-Ready Prep</h2>
          <p>Comprehensive training to tackle recruitment challenges.</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilding;
