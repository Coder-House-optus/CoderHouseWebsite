import React, { useState, useEffect } from 'react';
import './Resumebuilding.css';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResumeBuilding = () => {
  const navigate = useNavigate();

  // Images array for the slideshow
  const images = [
    '../images/Association/resume1.jpg',
    '../images/Association/resume2.jpg',
    '../images/Association/resume2.jpg',
    '../images/Association/resume1.jpg',
    '../images/Association/resume1.jpg',
    '../images/Association/resume2.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        if (window.innerWidth > 480) {
          return prevIndex >= images.length - 2 ? 0 : prevIndex + 2;
        }
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (window.innerWidth > 480) {
        return prevIndex === 0 ? images.length - 2 : prevIndex - 2;
      }
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (window.innerWidth > 480) {
        return prevIndex >= images.length - 2 ? 0 : prevIndex + 2;
      }
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handleBackClick = () => {
    navigate('/Features');
  };

  return (
    <div className="resume-container">
      <button className="back-button1" onClick={handleBackClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      
      <div className="main-heading">
        <h1>Resume Building | Technical Interview Modules</h1>
      </div>

      <div className="slideshow-container">
        <button className="arrow-button" onClick={handlePrevImage}>
          &#10094;
        </button>
        <div className="slideshow-images">
          <img
            src={images[currentImageIndex]}
            alt={`Slideshow ${currentImageIndex + 1}`}
            className="slideshow-image"
          />
          {window.innerWidth > 480 && currentImageIndex + 1 < images.length && (
            <img
              src={images[currentImageIndex + 1]}
              alt={`Slideshow ${currentImageIndex + 2}`}
              className="slideshow-image"
            />
          )}
        </div>
        <button className="arrow-button" onClick={handleNextImage}>
          &#10095;
        </button>
      </div>

      <div className="resume-grid-container">
        <div className="resume-grid">
          <div className="resume-card">
            <div className="label">Professional Resume Workshops</div>
            <div className="content">
              <p>Craft standout resumes with personalized guidance.</p>
              <p>Industry-standard templates and best practices.</p>
            </div>
          </div>

          <div className="resume-card">
            <div className="label">Technical & HR Mock Interviews</div>
            <div className="content">
              <p>Simulated real-world interviews with expert evaluators.</p>
              <p>Feedback to refine communication and technical skills.</p>
            </div>
          </div>

          <div className="resume-card">
            <div className="label">Soft Skill Enhancement</div>
            <div className="content">
              <p>Build confidence and ace behavioral questions.</p>
            </div>
          </div>

          <div className="resume-card">
            <div className="label">Job-Ready Prep</div>
            <div className="content">
              <p>Comprehensive training to tackle recruitment challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilding;