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
      "Technical Mock Interview & Resume Building": "/ResumeBuilding",
      Internship: "/internship",
    };

    if (paths[cardName]) {
      navigate(paths[cardName]);
    }
  };
  const cards = [
    { title: "Swayam", rotation: 15, translateX: 50, translateY: -20, color: "#E1FFB4" },
    { title: "Marathon Classes (Company-Specific)", rotation: 5, translateX: 40, translateY: -20, color: "#6b5b95" },
    { title: "Coder Sheet & Library", rotation: -10, translateX: 50, translateY: -10, color: "#88b04b" },
    { title: "Mentorship", rotation: -25, translateX: 80, translateY: 20, color: "#C7E97E" },
  
    { title: "Moon Coder", rotation: -19, translateX: -60, translateY: 30, color: "#ffcc5c" },
    { title: "Contest", rotation: -5, translateX: -40, translateY: 30, color: "#92a8d1" },
    { title: "Technical Mock Interview & Resume Building", rotation: 10, translateX: -30, translateY: 40, color: "#955251" },
    { title: "Internship", rotation: 22, translateX: -40, translateY: 40, color: "#b565a7" },
  ];
  

  return (
    <div className="area">
      <div className="extraFeatures-page-container">
        <Navigation />
        <div className="extraFeatures-content">
        <h1 class="extraFeatures-title">
          Explore our <span class="highlight-feature">Features</span>
        </h1>
          
          <div className="extraFeatures-cards">
            {/* Left Column */}
            <div className="extraFeatures-column left">
              {cards.slice(0, 4).map((card) => (
                <div
                  key={card.title}
                  className="extraFeatures-card"
                  onClick={() => handleCardClick(card.title)}
                  style={{
                    transform: `rotate(${card.rotation}deg) translate(${card.translateX}px, ${card.translateY}px)`,
                  }}
                >
                  <div className="extraFeatures-card-content">
                  <h2 class="card-title1">{card.title}</h2>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="extraFeatures-center-image">
              <img src="images/Feature.png" alt="Center img" />
            </div>

            {/* Right Column */}
            <div className="extraFeatures-column right">
              {cards.slice(4).map((card) => (
                <div
                  key={card.title}
                  className="extraFeatures-card"
                  onClick={() => handleCardClick(card.title)}
                  style={{
                    transform: `rotate(${card.rotation}deg) translate(${card.translateX}px, ${card.translateY}px)`,
                  }}
                >
                  <div className="extraFeatures-card-content">
                  <h2 class="card-title1">{card.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
