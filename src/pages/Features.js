// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navigation from '../components/Navigation';
// import Footer from '../components/Footer';
// import './Features.css';

// export default function Features() {
//   const [expandedCard, setExpandedCard] = useState(null);
//   const navigate = useNavigate();

//   const toggleCard = (cardName) => {
//     setExpandedCard(expandedCard === cardName ? null : cardName);
//   };

//   const handleCardClick = (cardName) => {
//     const paths = {
//       'Swayam Batch': '/coders-sheet',
//       'CRT Offline Batch': '/crt-offline-batch',
//       'Coders Sheet': '/coders-sheet',
//       'Mentorship Module | Coding Library': '/mentorship-module',
//       'Coding Library': '/coding-library',
//       'Marathon Classes': '/marathon-classes',
//       'Internship': '/internship',
//       'Contest': '/contest',
//       'Moon Coder': '/MoonCoder'
//     };
    
//     if (paths[cardName]) {
//       navigate(paths[cardName]);
//     } else {
//       const expandableCard = document.getElementById(cardName.replace(/\s+/g, '-').toLowerCase());
//       if (expandableCard) {
//         expandableCard.scrollIntoView({ behavior: 'smooth' });
//       }
//       toggleCard(cardName);
//     }
//   };

//   const leftCards = ['Swayam Batch', 'CRT Offline Batch', 'Marathon Classes', 'Internship'];
//   const rightCards = ['Coders Sheet', 'Mentorship Module | Coding Library', 'Moon Coder', 'Contest'];

//   return (
//     <div className="features-page">
//       <Navigation />

//       <div className="background-section">
//         <div className="features-header">
//           <h2>On- <span className="highlight">Campus Programs</span></h2>
//         </div>

//         <div className="middle-section">
//           <img
//             src="images/Feature.png"
//             alt="Character"
//             className="character-image"
//           />

//           <div className="cards-container">
//             <div className="left-cards">
//               {leftCards.map((cardName) => (
//                 <div
//                   key={cardName}
//                   className="feature-card"
//                   onClick={() => handleCardClick(cardName)}
//                 >
//                   <h4>{cardName}</h4>
//                 </div>
//               ))}
//             </div>

//             <div className="right-cards">
//               {rightCards.map((cardName) => (
//                 <div
//                   key={cardName}
//                   className="feature-card"
//                   onClick={() => handleCardClick(cardName)}
//                 >
//                   <h4>{cardName}</h4>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./Features.css";

export default function ExtraFeatures() {
  const navigate = useNavigate();

  const handleCardClick = (cardName) => {
    const paths = {
      Swayam: "/swayam-batch",
      "Marathon Classes (Company-Specific)": "/marathon-classes",
      "Coder Sheet & Library": "/coders-sheet",
      Mentorship: "/mentorship-module",
      "Moon Coder": "/moon-coder",
      Contest: "/contest",
      "Technical Mock Interview & Resume Building": "/technical-mock-interview",
      Internship: "/internship",
    };

    if (paths[cardName]) {
      navigate(paths[cardName]);
    }
  };

  const leftCards = [
    "Swayam",
    "Marathon Classes (Company-Specific)",
    "Technical Mock Interview & Resume Building",
    "Internship",
  ];

  const rightCards = [
    "Coder Sheet & Library",
    "Mentorship",
    "Moon Coder",
    "Contest",
  ];

  return (
    <div className="extraFeatures-page-container">
      <Navigation />

      <div className="extraFeatures-content">
        <h1 className="extraFeatures-title">Explore Extra Features</h1>

        <div className="extraFeatures-cards">
          <div className="extraFeatures-column">
            {leftCards.map((card) => (
              <div
                key={card}
                className="extraFeatures-card"
                onClick={() => handleCardClick(card)}
              >
                <h2>{card}</h2>
              </div>
            ))}
          </div>
          <div className="extraFeatures-column">
            {rightCards.map((card) => (
              <div
                key={card}
                className="extraFeatures-card"
                onClick={() => handleCardClick(card)}
              >
                <h2>{card}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
