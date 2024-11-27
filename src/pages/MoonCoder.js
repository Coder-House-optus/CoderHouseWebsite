import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./MoonCoder.css";

export default function MoonCoder() {
  const [currentCard, setCurrentCard] = useState(null);

  // Initialize useNavigate hook for routing
  const navigate = useNavigate();

  const handleCardClick = (e, card) => {
    setCurrentCard(card);
    card.classList.add("clicked");
    document.getElementById("moon-cover").classList.add("open");
  };

  const handleCloseClick = () => {
    document.getElementById("moon-content").classList.remove("open");
    setCurrentCard(null);
    document.getElementById("moon-cover").classList.remove("open");
  };

  const handleBackClick = () => {
    navigate("/features"); // Redirects to the Home page
  };

  return (
    <div className="moon-coder-container">
        <h1 className="head">Moon Coder Feature</h1>

      <div className="moon-coder-header">
      <div className="moon-coder-content">
      </div>
      {/* Back Button */}
        <button className="back-button1" onClick={handleBackClick}>
          Back to Home
        </button>
        
        <div className="moon-coder-card-column column-0">
          {/* <div
            className="moon-card moon-card-color-0"
            onClick={(e) => handleCardClick(e, e.currentTarget)}
          >
            <div className="moon-border"></div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg"
              alt="Card 1"
            />
            <h1>Nightly Key Question Solutions</h1>
          </div> */}
          <div
            className="moon-card moon-card-color-2"
            onClick={(e) => handleCardClick(e, e.currentTarget)}>
            <div className="moon-border"></div>
            <img
              src="/images/contest1.png"
              alt="Card 2"
            />
            <h1>Nightly Key Question Solutions</h1>
          </div>
        </div>
        <div className="moon-coder-card-column column-1">
          {/* <div
            className="moon-card moon-card-color-1"
            onClick={(e) => handleCardClick(e, e.currentTarget)}>
            <div className="moon-border"></div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg"
              alt="Card 3"
            />
            <h1>Nightly Key Question Solutions</h1>
          </div> */}
          <div
            className="moon-card moon-card-color-3"
            onClick={(e) => handleCardClick(e, e.currentTarget)}
          >
            <div className="moon-border"></div>
            <img
              src="/images/contest2.png"
              alt="Card 4"
            />
            <h1>Saturday Analytical Discussions* with real-time feedback</h1>
          </div>
        </div>
      </div>

      <div id="moon-cover" className="moon-cover"></div>

      <div id="moon-content" className="moon-content">
        <button
          id="close-content"
          className="close-content"
          onClick={handleCloseClick}
        >
          <span className="moon-x-1"></span>
          <span className="moon-x-2"></span>
        </button>
        <img id="moon-content-image" src="" alt="Moon Content" />
        <div className="moon-content-text" id="moon-content-text"></div>
      </div>
    </div>
  );
}
