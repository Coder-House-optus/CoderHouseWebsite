import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const formattedCategory = category.replace(/_/g, ' ');
  const imagePath = `/images/LearningOfferings/${category}.jpg`;

  return (
    <div className="category-page">
      <Navigation />
      <header className="header">
        <img 
          src="/images/logo.png" 
          alt="Coder House Logo" 
          className="header-logo"
        />
        <h1 className="header-title">{formattedCategory}</h1>
      </header>
      <div className="category-content">
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          ← Back
        </button>
        <div className="image-container">
          <img 
            src={imagePath} 
            alt={formattedCategory}
            className="category-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;