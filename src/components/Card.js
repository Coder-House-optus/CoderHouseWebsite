import React from 'react';
import './Card.css'; // Ensure this path matches your CSS file location

const Card = () => {
  return (
    <div >
      <div className="titleContainer">
        <div className="subtitle">What We Offer</div>
        <h1 className="mainTitle">
          Key Features Of <span className="textGreen">CODER HOUSE</span>
        </h1>
      </div>

      <div className="cardsContainer">
      
      {/* Card 1 */}
      <div className="card card1">
        <h3 className="title">EXCELLENT INFRASTRUCTURE</h3>
        <ul className="features">
          <li>Modern, tech-enabled classrooms and labs.</li>
          <li>High-speed internet for uninterrupted learning.</li>
          <li>Collaborative spaces to foster creativity.</li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="card card2">
        <h3 className="title">EXPERT MENTOR TEAM</h3>
        <ul className="features">
          <li>Learn from top industry professionals.</li>
          <li>Personalized mentorship and real-world insights.</li>
          <li>Guidance from IIT, NIT, and MNC experts.</li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="card card3">
        <h3 className="title">GROWTH-CENTERED SPACE</h3>
        <ul className="features">
          <li>Curriculum focused on rapid skill development.</li>
          <li>Regular workshops and hackathons.</li>
          <li>Supportive, collaborative learning atmosphere.</li>
        </ul>
      </div>
    </div>
    </div>
    
  );
};

export default Card;
