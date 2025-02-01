import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './CategoryPage.css';
import Footer from '../components/Footer';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const formattedCategory = category.replace(/_/g, ' ');
  const imagePath = `/images/LearningOfferings/${category}.jpg`;

  return (
    <div className="category-page">
      <Navigation />
      <header className="header">
        <div className="header-content">
          <button 
            className="back-button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <img 
            src="/images/logo.png" 
            alt="Coder House Logo" 
            className="header-logo"
          />
          <h1 className="header-subject-title">{formattedCategory}</h1>
        </div>
      </header>
      <div className="category-content">
        <div className="image-container">
          <img 
            src={imagePath} 
            alt={formattedCategory}
            className="category-image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;