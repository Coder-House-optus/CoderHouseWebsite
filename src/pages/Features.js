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

  const cards = [
    {
      title: "Swayam",
    },
    {
      title: "Marathon Classes (Company-Specific)",
    },
    {
      title: "Coder Sheet & Library",
    },
    {
      title: "Mentorship",
    },
    {
      title: "Moon Coder",
    },
    {
      title: "Contest",
    },
    {
      title: "Technical Mock Interview & Resume Building",
    },
    {
      title: "Internship",
    },
  ];

  return (
    <div className="area">
      <ul className="circles">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i}></li>
        ))}
      </ul>
      <div className="extraFeatures-page-container">
        <Navigation />
        <div className="extraFeatures-content">
        <span className="text-greenf">Explour Our </span><span className="text-white2f">FEATURES!</span><br />
          <div className="extraFeatures-cards">
            <div className="extraFeatures-column">
              {cards.slice(0, 4).map((card) => (
                <div
                  key={card.title}
                  className="extraFeatures-card"
                  onClick={() => handleCardClick(card.title)}
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className="extraFeatures-card-content">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="extraFeatures-center-image">
              <img
                src="images/Feature.png"
                alt="Center img"
              />
            </div>

            <div className="extraFeatures-column">
              {cards.slice(4).map((card) => (
                <div
                  key={card.title}
                  className="extraFeatures-card"
                  onClick={() => handleCardClick(card.title)}
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className="extraFeatures-card-content">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
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
