import React from 'react';
import './HODreview.css';

const HODreview = () => {
  // Array of review images for easy mapping
  const reviewImages = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `../images/HOD/review${i + 1}.jpg`,
    alt: `Review ${i + 1}`
  }));

  return (
    <div className="reviews-container">
      <div className="reviews-grid">
        {reviewImages.map((review) => (
          <div key={review.id} className="review-item">
            <img 
              src={review.src} 
              alt={review.alt} 
              className="review-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HODreview;