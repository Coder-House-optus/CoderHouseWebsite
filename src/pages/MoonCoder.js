// MoonCoder.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoonCoder.css';

const MoonCoder = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [images, setImages] = useState([]);

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://coderhouse-448820.el.r.appspot.com/HomeBanner/');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();

        if (data && data.HomeBanner && Array.isArray(data.HomeBanner)) {
          const imageUrls = data.HomeBanner.map(item => item.image);
          setImages(imageUrls);
        } else {
          throw new Error('Invalid data structure');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Image rotation effect
  useEffect(() => {
    if (images.length > 0) {
      const firstImageTimeout = setTimeout(() => {
        setShowFirstImage(false);
      }, 3000);

      const imageInterval = setInterval(() => {
        if (!showFirstImage) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
      }, 3000);

      return () => {
        clearTimeout(firstImageTimeout);
        clearInterval(imageInterval);
      };
    }
  }, [showFirstImage, images]);

  const handleImageButtonClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="moon-coderofmoon-coder">
      {/* Back Button */}
      <button className="back-button1" onClick={() => navigate('/Features')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      {/* Header */}
      <div className="header1ofmoon-coder">
        <h1 className="mainTitle1ofmoon-coder">Moon Coder</h1>
        <p className="mentorpara3ofmoon-coder">
          Dive into a world of innovation, challenges, and growth with Moon Coder: The Contest Journey. A platform designed to inspire and empower students through coding contests and hackathons.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="content-containerofmoon-coder">
        {/* Left Column - Rotating Images */}
        <div className="image-columnofmoon-coder">
          {images.length > 0 && (
            <img
              src={images[currentIndex]}
              alt="Featured content"
              className={`rotating-imageofmoon-coder ${showFirstImage ? 'first-image' : ''}`}
            />
          )}
        </div>

        {/* Right Column - Feature Points */}
        <div className="features-columnofmoon-coder">
          <div className="box2ofmoon-coder shadow2ofmoon-coder">
            <span className="circleofmoon-coder"></span>
            <p className="content2ofmoon-coder">Real-Time Doubt Resolution</p>
          </div>
          <div className="box2ofmoon-coder shadow2ofmoon-coder">
            <span className="circleofmoon-coder"></span>
            <p className="content2ofmoon-coder">Holistic Learning</p>
          </div>
          <div className="box2ofmoon-coder shadow2ofmoon-coder">
            <span className="circleofmoon-coder"></span>
            <p className="content2ofmoon-coder">Flexible Learning Modes</p>
          </div>
          <div className="box2ofmoon-coder shadow2ofmoon-coder">
            <span className="circleofmoon-coder"></span>
            <p className="content2ofmoon-coder">Curated Content</p>
          </div>
          <div className="box2ofmoon-coder shadow2ofmoon-coder">
            <span className="circleofmoon-coder"></span>
            <p className="content2ofmoon-coder">Personalized Attention</p>
          </div>
          <div className="box2ofmoon-coder shadow2ofmoon-coder">
            <span className="circleofmoon-coder"></span>
            <p className="content2ofmoon-coder">Experience</p>
          </div>
        </div>
      </div>

      {/* Program Description */}
      <div className="moon-coder-programofmoon-coder">
        <p className="moon-coder-descriptionofmoon-coder">
          <strong>1. Exclusive Coding Contests and Hackathons</strong>
          Participate in online coding contests and hackathons hosted exclusively for Coder House students. Showcase your skills in a competitive yet collaborative environment.
        </p>
        <p className="moon-coder-descriptionofmoon-coder">
          <strong>2. Global Event Updates</strong>
          Stay updated on worldwide coding contests and hackathons with event details, registration info, and tips.
        </p>
        <p className="moon-coder-descriptionofmoon-coder">
          <strong>3. Exciting Rewards and Recognition</strong>
          Compete for cash rewards, certificates, internship opportunities, and industry recognition.
        </p>
        <p className="moon-coder-descriptionofmoon-coder">
          <strong>4. Real-World Experience</strong>
          Develop critical skills like time management, teamwork, and innovative thinking through real-world challenges.
        </p>
        <p className="moon-coder-descriptionofmoon-coder">
          <strong>5. Community Engagement and Networking</strong>
          Collaborate with peers and industry professionals to build lasting connections in the tech community.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="image-galleryofmoon-coder">
        <div className="image-itemofmoon-coder">
          <img
            className="image-thumbnailofmoon-coder"
            src="/images/Arrays.jpeg"
            alt="Arrays"
          />
          <div className="image-actionofmoon-coder">
            <button className="action-button" onClick={() => handleImageButtonClick('Documents/ArrayQuestion.docx')}>
              Go to Arrays
            </button>
          </div>
        </div>
        <div className="image-itemofmoon-coder">
          <img
            className="image-thumbnailofmoon-coder"
            src="/images/Trees.jpeg"
            alt="Trees"
          />
          <div className="image-actionofmoon-coder">
            <button className="action-button" onClick={() => handleImageButtonClick('Documents/TreeQuestion.docx')}>
              Go to Trees
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoonCoder;