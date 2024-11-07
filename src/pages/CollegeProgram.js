import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import './CollegeProgram.css';
import Footer from '../components/Footer';

const CollegeProgram = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Moments Data
  const moments = [
    {
      description: 'Our first batch of graduates in 2020 marked a milestone for Coder House, showcasing immense talent and dedication.',
      img1: '/images/moments/moment1.jpg',
      img2: '/images/moments/moment2.jpg',
    },
    {
      description: 'The 2022 hackathon saw incredible teamwork and creativity as students tackled real-world challenges with innovative solutions.',
      img1: '/images/moments/moment3.jpg',
      img2: '/images/moments/moment4.jpg',
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Shailesh Gupta",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel efficitur libero.",
      image: "/path/to/image1.jpg",
    },
    {
      name: "Shailesa",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel efficitur libero.",
      image: "/path/to/image2.jpg",
    },
    {
      name: "Sha",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel efficitur libero.",
      image: "/path/to/image3.jpg",
    },
  ];

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

  return (
    <div className="college-program-page">
      <Navigation />

      {/* Program Cards Section */}
      <section className="cards-section">
        <div className="greeting-container">
          {[120, 90, 60].map((hours) => (
            <div key={hours} className="greeting-card">
              <div className="hours-line">
                <span className="hours-text">{hours} HOURS</span>
                <span role="img" aria-label="clock" className="clock-emoji">🕒</span>
              </div>
              <span className="program-text">PROGRAM</span>
              <div className="card-footer">
                <button className="view-btn">View Program</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Moments Section */}
      <section className="moments-section">
        <h2 className="section-title">
          Our <span className="highlight">Moments</span>
        </h2>
        <div className="moments-content">
          <div className="description">
            <h3>Interview Session</h3>
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
        <h2>Our <span className="highlight">Associations</span></h2>
        <div className="logos-grid">
          {['partner1.png', 'partner2.png', 'partner3.png', 'partner4.png'].map((logo, index) => (
            <img key={index} src={`/images/logos/${logo}`} alt={`Partner ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="headname">Words of <span className="highlight">HOD</span></div>
        <div className="testimonial-card">
          <div className="vertical-line"></div>
          <div className="testimonial-content">
            <div className="circle-image">
              <img
                src={testimonials[activeTestimonialIndex].image}
                alt={testimonials[activeTestimonialIndex].name}
              />
            </div>
            <div className="testimonial">
              <p>
                <strong>{testimonials[activeTestimonialIndex].name}</strong> <br />
                "{testimonials[activeTestimonialIndex].message}"
              </p>
            </div>
          </div>
          <div className="quote-sign">“</div>
        </div>
        <div className="testimonial-navigation">
          <button onClick={handleTestimonialPrev} aria-label="Previous Testimonial">❮</button>
          <button onClick={handleTestimonialNext} aria-label="Next Testimonial">❯</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollegeProgram;
