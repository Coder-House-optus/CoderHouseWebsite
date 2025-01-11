import React, { useState, useEffect } from 'react';
import './HODreview.css';

const HODreview = () => {
  const [reviewSlide, setReviewSlide] = useState(0);
  const [memSlide, setMemSlide] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(4);
  
  // Review images array (9 images)
  const reviewImages = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    src: `../images/HOD/review${i + 1}.jpg`,
    alt: `Review ${i + 1}`
  }));

  // Memory images array (15 images)
  const memImages = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: `../images/HOD/mem${i + 1}.jpg`,
    alt: `Memory ${i + 1}`
  }));

  // Update images per slide based on window size
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

  // Auto-slide functionality
  useEffect(() => {
    const reviewTimer = setInterval(() => {
      setReviewSlide(prev => 
        (prev + 1) % Math.ceil(reviewImages.length / imagesPerSlide)
      );
    }, 3000);

    const memTimer = setInterval(() => {
      setMemSlide(prev => 
        (prev + 1) % Math.ceil(memImages.length / imagesPerSlide)
      );
    }, 3000);

    return () => {
      clearInterval(reviewTimer);
      clearInterval(memTimer);
    };
  }, [imagesPerSlide]);

  const Carousel = ({ images, currentSlide, setCurrentSlide }) => {
    const totalSlides = Math.ceil(images.length / imagesPerSlide);
    
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const startIdx = currentSlide * imagesPerSlide;
    const visibleImages = images.slice(startIdx, startIdx + imagesPerSlide);

    return (
      <div className="reviews-container">
        <button 
          onClick={prevSlide}
          className="carousel-button prev"
          aria-label="Previous slide"
        >
          ←
        </button>
        
        <div className="reviews-grid">
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

        <button 
          onClick={nextSlide}
          className="carousel-button next"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    );
  };

  return (
    <div className='carouselss-container'>
      <h2> Moments of <span>Encouragement</span> </h2>
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