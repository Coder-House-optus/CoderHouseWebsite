import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./Features.css";

export default function Features1() {
  const navigate = useNavigate();

  const leftCards = ["Swayam Batch", "CRT Offline Batch", "Marathon Classes", "Internship"];
  const rightCards = ["Coders Sheet", "Mentorship Module | Coding Library", "Moon Coder", "Contest"];

  const handleCardClick = (cardName) => {
    const paths = {
      "Swayam Batch": "/swayam-batch",
      "CRT Offline Batch": "/crt-offline-batch",
      "Coders Sheet": "/coders-sheet",
      "Mentorship Module | Coding Library": "/mentorship-module",
      "Moon Coder": "/moon-coder",
      "Marathon Classes": "/marathon-classes",
      "Internship": "/internship",
      "Contest": "/contest",
    };
    if (paths[cardName]) navigate(paths[cardName]);
  };

  return (
    <div className="features-page">
      <Navigation />
      <div className="background-section">
        <div className="features-header">
          <h2>
            On- <span className="highlight">Campus Programs</span>
          </h2>
        </div>
        <div className="middle-section">
          <div className="cards-container">
            <div className="left-cards">
              {leftCards.map((cardName) => (
                <div
                  key={cardName}
                  className="feature-card"
                  onClick={() => handleCardClick(cardName)}
                >
                  <h4>{cardName}</h4>
                </div>
              ))}
            </div>
            <img
              src="images/Feature.png" // Update with your image path
              alt="Character"
              className="character-image"
            />
            <div className="right-cards">
              {rightCards.map((cardName) => (
                <div
                  key={cardName}
                  className="feature-card"
                  onClick={() => handleCardClick(cardName)}
                >
                  <h4>{cardName}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
