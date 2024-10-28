import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './Features.css';

export default function Features() {
  const [expandedCard, setExpandedCard] = useState(null);
  const navigate = useNavigate();

  const toggleCard = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  const handleCardClick = (cardName) => {
    const paths = {
      'Swayam Batch': '/swayam-batch',
      'CRT Offline Batch': '/crt-offline-batch',
      'Coders Sheet': '/coders-sheet',
      'Mentorship Module | Coding Library': '/mentorship-module',
      'Coding Library': '/coding-library',
      'Marathon Classes': '/marathon-classes',
      'Internship': '/internship',
      'Contest': '/contest',
      'Moon Coder': '/moon-coder'
    };
    
    if (paths[cardName]) {
      navigate(paths[cardName]);
    } else {
      const expandableCard = document.getElementById(cardName.replace(/\s+/g, '-').toLowerCase());
      if (expandableCard) {
        expandableCard.scrollIntoView({ behavior: 'smooth' });
      }
      toggleCard(cardName);
    }
  };

  const leftCards = ['Swayam Batch', 'CRT Offline Batch', 'Marathon Classes', 'Internship'];
  const rightCards = ['Coders Sheet','Mentorship Module | Coding Library', 'Moon Coder',  'Contest'];

  return (
    <div className="features-page">
      <Navigation />

      <div className="background-section">
        <div className="features-header">
          <h2>On- <span className="highlight">Campus Programs</span></h2>
        </div>

        <div className="middle-section">
          <img
            src="images/Feature.png"
            alt="Character"
            className="character-image"
          />

          <div className="cards-container">
            <div className="left-cards">
              {leftCards.map((cardName) => (
                <div
                  key={cardName}
                  className="feature-card card-left"
                  onClick={() => handleCardClick(cardName)}
                >
                  <h4>{cardName}</h4>
                </div>
              ))}
            </div>

            <div className="right-cards">
              {rightCards.map((cardName) => (
                <div
                  key={cardName}
                  className="feature-card card-right"
                  onClick={() => handleCardClick(cardName)}
                >
                  <h4>{cardName}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="expandable-cards">
        {[...leftCards, ...rightCards].map((cardName) => (
          <div
            key={cardName}
            id={cardName.replace(/\s+/g, '-').toLowerCase()}
            className={`expandable-card ${expandedCard === cardName ? 'expanded' : ''}`}
            onClick={() => handleCardClick(cardName)}
          >
            <h4>{cardName}</h4>
            <div className="card-content">
              <ul>
                <li>Details about {cardName} go here.</li>
                <li>This is the expanded content.</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
