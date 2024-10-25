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

      {/* Expandable Cards Section */}
<div className="expandable-cards">
  <div
    id="swayam-batch"
    className={`expandable-card ${expandedCard === 'Swayam Batch' ? 'expanded' : ''}`}
    onClick={() => handleCardClick('Swayam Batch')}
  >
    <h4>Swayam Batch</h4>
    <div className="card-content">
      <ul>
        <li>Details about the Swayam Batch go here.</li>
        <li>This is the expanded content.</li>
      </ul>
    </div>
  </div>
  
  <div
    id="crt-offline-batch"
    className={`expandable-card ${expandedCard === 'CRT Offline Batch' ? 'expanded' : ''}`}
    onClick={() => handleCardClick('CRT Offline Batch')}
  >
    <h4>CRT Offline Batch</h4>
    <div className="card-content">
      <ul>
        <li>Details about the CRT Offline Batch go here.</li>
        <li>This is the expanded content.</li>
      </ul>
    </div>
  </div>
  
  <div
    id="coders-sheet"
    className={`expandable-card ${expandedCard === 'Coders Sheet' ? 'expanded' : ''}`}
    onClick={() => handleCardClick('Coders Sheet')}
  >
    <h4>Coders Sheet</h4>
    <div className="card-content">
      <ul>
        <li>Practice Questions Galore</li>
        <li>Crafted by IIT’ians and NIT’ians.</li>
        <li>Ideal for self-learning coding enthusiasts.</li>
        <li>Contains 1000+ questions of different levels and variety.</li>
        <li>Unlock exclusive notes for enhanced learning.</li>
        <li>Engage in daily scheduled practice questions.</li>
        <li>Experience a dynamic set of practice questions tailored to your current coding proficiency level.</li>
      </ul>
    </div>
  </div>
  
  <div
    id="mentorship-module"
    className={`expandable-card ${expandedCard === 'Mentorship Module | Coding Library' ? 'expanded' : ''}`}
    onClick={() => handleCardClick('Mentorship Module | Coding Library')}
  >
    <h4>Mentorship Module | Coding Library</h4>
    <div className="card-content">
      <ul>
        <li>2-hour sessions with expert mentors addressing all your 'Career As Coder' queries.</li>
        <li>Coding Library: Your Perfect Coding Heaven.</li>
        <li>Monthly subscription model for a conducive coding environment.</li>
      </ul>
    </div>
  </div>
</div>
<Footer/>

    </div>
  );
}
