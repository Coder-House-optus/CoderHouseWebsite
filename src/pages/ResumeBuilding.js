import React, { useState, useEffect } from 'react';
import './Resumebuilding.css';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ResumeBuilding = () => {
  const navigate = useNavigate();

  // Images array for the slideshow
  const images = [
    '../images/Association/resume1.jpg',
    '../images/Association/resume2.jpg',
    '../images/Association/resume3.jpg',
    '../images/Association/resume4.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-timer for image slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        // For desktop/tablet, move two images at a time
        if (window.innerWidth > 480) {
          return prevIndex >= images.length - 2 ? 0 : prevIndex + 2;
        }
        // For mobile, move one image at a time
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      });
    }, 5000); // 10 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      // For desktop/tablet, move two images at a time
      if (window.innerWidth > 480) {
        return prevIndex === 0 ? images.length - 2 : prevIndex - 2;
      }
      // For mobile, move one image at a time
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      // For desktop/tablet, move two images at a time
      if (window.innerWidth > 480) {
        return prevIndex >= images.length - 2 ? 0 : prevIndex + 2;
      }
      // For mobile, move one image at a time
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handleBackClick = () => {
    navigate('/Features');
  };

  return (
    <div className="resume-container">
      <button className="back-button1" onClick={handleBackClick}>
        Back to Feature
      </button>
      <div className="main-heading">
        <h1>Resume Building | Technical Interview Modules</h1>
      </div>
      <div className="resume-item">
        <FaCheckCircle className="icon" />
        <div>
          <h3 className="resume-heading">Professional Resume Workshops</h3>
          <p className="resume-description">
            Craft standout resumes with personalized guidance.
          </p>
          <p className="resume-description">
            Industry-standard templates and best practices.
          </p>
        </div>
      </div>
      <div className="resume-item">
        <FaCheckCircle className="icon" />
        <div>
          <h3 className="resume-heading">Technical & HR Mock Interviews</h3>
          <p className="resume-description">
            Simulated real-world interviews with expert evaluators.
          </p>
          <p className="resume-description">
            Feedback to refine communication and technical skills.
          </p>
        </div>
      </div>
      <div className="resume-item">
        <FaCheckCircle className="icon" />
        <div>
          <h3 className="resume-heading">Soft Skill Enhancement</h3>
          <p className="resume-description">
            Build confidence and ace behavioral questions.
          </p>
        </div>
      </div>
      <div className="resume-item">
        <FaCheckCircle className="icon" />
        <div>
          <h3 className="resume-heading">Job-Ready Prep</h3>
          <p className="resume-description">
            Comprehensive training to tackle recruitment challenges.
          </p>
        </div>
      </div>

      {/* Sliding Image Section */}
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
          {/* Second image only shows on desktop/tablet */}
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
    </div>
  );
};

export default ResumeBuilding;