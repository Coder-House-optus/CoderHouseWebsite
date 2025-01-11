import React, { useState, useEffect } from 'react';
import './HODreview.css';

const HODreview = () => {
  const [reviewSlide, setReviewSlide] = useState(0);
  const [memSlide, setMemSlide] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(4);
  
  const reviewImages = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `../images/HOD/review${i + 1}.jpg`,
    alt: `Review ${i + 1}`
  }));

  const memImages = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    src: `../images/HOD/mem${i + 1}.jpg`,
    alt: `Memory ${i + 1}`
  }));

  useEffect(() => {
    const updateImagesPerSlide = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setImagesPerSlide(1);
      } else if (width <= 768) {
        setImagesPerSlide(2);
      } else if (width <= 1024) {
        setImagesPerSlide(3);
      } else {
        setImagesPerSlide(4);
      }
    };

    updateImagesPerSlide();
    window.addEventListener('resize', updateImagesPerSlide);
    return () => window.removeEventListener('resize', updateImagesPerSlide);
  }, []);

  const Carousel = ({ images, currentSlide, setCurrentSlide }) => {
    const totalSlides = Math.ceil(images.length / imagesPerSlide);
    
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    // Add auto-advance timer
    useEffect(() => {
      const timer = setInterval(() => {
        nextSlide();
      }, 3000); // 3 seconds

      return () => clearInterval(timer); // Cleanup on unmount
    }, [currentSlide, totalSlides]); // Dependencies to ensure timer updates properly

    const startIdx = currentSlide * imagesPerSlide;
    const visibleImages = images.slice(startIdx, startIdx + imagesPerSlide);

    return (
      <div className="carousel-wrapper">
        <div className="carousel-container">
          {visibleImages.map((image) => (
            <div key={image.id} className="review-item">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="review-image"
              />
            </div>
          ))}
        </div>

        <div className="navigation-buttons">
          <button 
            onClick={prevSlide}
            className="carousel-button"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button 
            onClick={nextSlide}
            className="carousel-button"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="carouselss-container">
      <h2>Moments of <span>Encouragement</span></h2>
      <Carousel 
        images={memImages}
        currentSlide={memSlide}
        setCurrentSlide={setMemSlide}
      />
      <h2>Words of <span>Encouragement</span></h2>
      <Carousel 
        images={reviewImages}
        currentSlide={reviewSlide}
        setCurrentSlide={setReviewSlide}
      />
    </div>
  );
};

export default HODreview;