import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import './CollegeProgram.css';
import Footer from '../components/Footer';
import HODReview from '../components/HODreview';

const CollegeProgram = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const programData = {
    300: "https://docs.google.com/document/d/1o7M2U6wZ9JBL1Yybz5MG-YZVlkmM_XbCkjuXT0tsXbc/edit?usp=sharing",
    120: "https://docs.google.com/document/d/10FDsMB2qj-jODl5WNiByZyQfFqYgOSCwX8bx541BPl0/edit?usp=sharing",
    90: "https://docs.google.com/document/d/15n4uZAIgtHKp4byeqXR4wNRCyWdeRtrcCxbLw42NZZE/edit?usp=sharing",
    75: "https://docs.google.com/document/d/10yD5s_UdITyy-f7QBn4sYkqsajci3jXz/edit?usp=sharing&ouid=107632382243829537151&rtpof=true&sd=true",
    60: "https://docs.google.com/document/d/1e3L6-xJ334erc4mLGU4QltI1ukbz5QqG/edit?usp=sharing&ouid=107632382243829537151&rtpof=true&sd=true"
  };
  // Moments Data
  const moments = [
    {
      description: 'Through our hackathons, students have transformed ideas into impactful solutions, gaining hands-on experience, collaboration skills, and recognition, paving the way to achieve their career aspirations.',
      img1: '../images/moments/moment1.jpg',
      img2: '../images/moments/moment2.jpg',
      title:'Hackathons',
    },
    {
      description: 'Our comprehensive interview sessions have empowered students to secure positions in their dream companies by enhancing their technical skills, boosting confidence, and providing real-world problem-solving experience.',
      img1: '../images/moments/moment5.jpg',
      img2: '../images/moments/moment4.jpg',
      title:'Interview Session',
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Shailesh Gupta",
      message: "Lorem ibero.",
      image: "/path/to/image1.jpg",
    },
    {
      name: "Shailesa",
      message: "Lorem ipsuiscing elit. Sed vel efficitur libero.",
      image: "/path/to/image2.jpg",
    },
    {
      name: "Sha",
      message: "Lorem ificitur libero.",
      image: "/path/to/image3.jpg",
    },
  ];

  // Auto-timer for moments carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === moments.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // 10 seconds

    return () => clearInterval(timer);
  }, [moments.length]);

  // Auto-timer for testimonials carousel
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setActiveTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // 10 seconds

    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  // Handlers for moments navigation
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? moments.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === moments.length - 1 ? 0 : prevIndex + 1));
  };

  // Handlers for testimonial navigation
  const handleTestimonialPrev = () => {
    setActiveTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleTestimonialNext = () => {
    setActiveTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  const handleViewProgram = (docLink) => {
    window.open(docLink, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="college-program-page">
      <Navigation />

      {/* Program Cards Section */}
      <section className="cards-section">
      <div className="greeting-container">
        {Object.entries(programData).map(([hours, docLink]) => (
          <div key={hours} className="greeting-card">
            <div className="hours-line">
              <span className="hours-text">{hours} HOURS</span>
              <span role="img" aria-label="clock" className="clock-emoji">🕒</span>
            </div>
            <span className="program-text">PROGRAM</span>
            <div className="card-footer">
              <div className="button-container">
                <button 
                  className="view-btn"
                  onClick={() => handleViewProgram(docLink)}
                  aria-label={`View ${hours} hours program details`}
                >
                  View Program
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Our Moments Section */}
      <section className="moments-section">
        <h2 className="sections-title">
          Our <span className="highlight">Moments</span>
        </h2>
        <div className="moments-content">
          <div className="descriptionss">
            <h3>{moments[activeIndex].title}</h3>
            <p>{moments[activeIndex].description}</p>
          </div>
          <div className="images">
            <img src={moments[activeIndex].img1} alt={`Moment ${activeIndex + 1} part 1`} className="moment-image" />
            <img src={moments[activeIndex].img2} alt={`Moment ${activeIndex + 1} part 2`} className="moment-image" />
          </div>
        </div>
        <div className="navigation-arrows">
          <button onClick={handlePrev} className="nav-button" aria-label="Previous Moment">❮</button>
          <button onClick={handleNext} className="nav-button" aria-label="Next Moment">❯</button>
        </div>
      </section>

      {/* Associations Section */}
      <section className="associations-section">
        <h2 className="highlight11">Our <span className="highlight10">Associations</span></h2>
        <div className="logos-grid">
          {['partner1.webp', 'partner2.png', 'partner3.png', 'partner4.jpg'].map((logo, index) => (
            <img key={index} src={`../images/Association/${logo}`} alt={`Partner ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="headname">Words of <span className="highlight">HOD</span></div>
        
        {/* Inserted HODReview Component */}
        <HODReview />
      </section>

      <Footer />
    </div>
  );
};

export default CollegeProgram;