import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import './SwayamBatch.css';
import Footer from '../components/Footer';

export default function Features() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  const handleCardClick = (cardName) => {
    // Scroll to the expandable card section
    const expandableCard = document.getElementById(cardName.replace(/\s+/g, '-').toLowerCase());
    if (expandableCard) {
      expandableCard.scrollIntoView({ behavior: "smooth" });
    }
    toggleCard(cardName);
  };

  return (
    <div className="features-page">
      {/* Navigation Bar */}
      <Navigation />
      <hi1> Hello Swamp batch</hi1>
      {/* Background Section */}
      <div className="background-section">
        {/* Header Section */}
        <div className="features-header">
          <h2>On- <span className="highlight">Campus Programs</span></h2>
        </div>

        <div className="middle-section">
          <img
            src="images/Feature.png" // Dummy image for now
            alt="Character"
            className="character-image"
          />

          {/* Cards in a diagonal layout around the character */}
          <div className="cards-container">
            <div className="feature-card card-left" onClick={() => handleCardClick('Swayam Batch')}>
              <h4>Swayam Batch</h4>
            </div>
            <div className="feature-card card-left-overlap" onClick={() => handleCardClick('CRT Offline Batch')}>
              <h4>CRT Offline Batch</h4>
            </div>
            <div className="feature-card card-right" onClick={() => handleCardClick('Coders Sheet')}>
              <h4>Coders Sheet</h4>
            </div>
            <div className="feature-card card-right-overlap" onClick={() => handleCardClick('Mentorship Module | Coding Library')}>
              <h4>Mentorship Module | Coding Library</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
