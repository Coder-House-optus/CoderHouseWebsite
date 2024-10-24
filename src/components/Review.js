import React, { useState, useEffect } from 'react';
import './Review.css';  // Assuming you're putting CSS in this file for the review section

const reviews = [
    {
        name: "Shailesh Gupta",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard ever since the 1500s.",
        rating: 5
    },
    {
        name: "Anjali Sharma",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
        rating: 4
    },
    {
        name: "Ravi Kumar",
        text: "This is a great service. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        rating: 5
    },
    {
        name: "Priya Singh",
        text: "Lorem Ipsum is simply dummy text of the printing industry. It is a long-established fact that a reader will be distracted by the readable content.",
        rating: 4
    },
    {
        name: "Amit Verma",
        text: "Wonderful experience. Lorem Ipsum has been the industry's standard dummy text for years.",
        rating: 5
    }
];

const ReviewSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000); // Auto slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const stars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? 'filled-star' : 'empty-star'}>★</span>
        ));
    };

    return (
        <section className="review-section">
            <div className="review-title">
                <span>Our </span><span className="highlight">Reviews</span>
            </div>

            <div className="review-card">
                <div className="quote-icon">
                    <span className="double-quote">&ldquo;</span>
                </div>
                
                <div className="stars">
                    {stars(reviews[currentIndex].rating)}
                </div>

                <h3 className="review-author">{reviews[currentIndex].name}</h3>
                <p className="review-text">{reviews[currentIndex].text}</p>
            </div>

            <div className="review-dots">
                {reviews.map((_, index) => (
                    <span key={index} className={index === currentIndex ? 'active-dot' : 'dot'}></span>
                ))}
            </div>
        </section>
    );
};

export default ReviewSection;
