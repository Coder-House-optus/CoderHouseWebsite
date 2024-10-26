import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './SwayamBatch.css'; // Assuming this file contains your custom styles

export default function SwayamBatch() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  const handleCardClick = (cardName) => {
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

      {/* Background Section */}
      <div className="background-section">
        <div className="features-header">
          <h2>On- <span className="highlight">Campus Programs</span></h2>
        </div>

        <div className="middle-section">
          <img
            src="images/Feature.png" // Placeholder for your feature image
            alt="Character"
            className="character-image"
          />

          {/* Feature Cards around Character */}
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

      {/* Additional Section: Swayam Batch Self-Paced Mastery Batch */}
      <div className="swayam-batch-section">
        <h2 className="swayam-heading">Swayam Batch: Self-Paced Mastery Batch</h2>

        {/* Content with bullet points */}
        <ul className="swayam-details">
          <li>Curated Content Available in the form of recorded videos.</li>
          <li>Subscription to Coding Library.</li>
          <li>2000+ Practice Questions.</li>
          <li>Learn a wide range of technologies like -</li>
        </ul>

        {/* Logos Section */}
        <div className="logos-section">
          <div className="logos-section">
            <div className="logos-row">
              <div className="logo-item">
                <img src="/images/Courses/aws.png" alt="AWS Logo" />
                <span>AWS</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/azure.png" alt="Azure Logo" />
                <span>Azure</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/corejava.png" alt="Core Java Logo" />
                <span>Core Java</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/dot-net-original.png" alt=".NET Logo" />
                <span>.NET</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/ki.png" alt="KI Logo" />
                <span>KI</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/mangodb.png" alt="MongoDB Logo" />
                <span>MongoDB</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/New_Power_BI_Logo.png" alt="Power BI Logo" />
                <span>Power BI</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/nodejs.png" alt="Node.js Logo" />
                <span>Node.js</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/oracle.png" alt="Oracle Logo" />
                <span>Oracle</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/Python-logo-notext.png" alt="Python Logo" />
                <span>Python</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/React_Logo.png" alt="React Logo" />
                <span>React</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/rest-api.png" alt="REST API Logo" />
                <span>REST API</span>
              </div>
              <div className="logo-item">
                <img src="/images/Courses/springboot.png" alt="Spring Boot Logo" />
                <span>Spring Boot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
