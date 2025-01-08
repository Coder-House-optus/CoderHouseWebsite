import React from 'react';
import './SwayamBatch.css';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const SwayamBatch = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="swayam-batch">
      
      {/* Back Button */}
      <button
        className="back-button1"
        onClick={() => navigate('/features')} // Replace '/features' with the actual route of the Features page
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
      </button>
      
      <div className="header1">
      <h1 className="swayam1">Swayam Batch Details</h1>
        <p className="description">
          Swayam is a comprehensive self-paced learning program designed to empower students with access to recorded lectures and study materials for a variety of in-demand courses. 
          This program is exclusively available to members of Coder House or those who are part of the Coder House community.
        </p>
        <p className="description">
          With over 1250+ hours of content spanning 15+ courses, Swayam is designed to provide flexibility and convenience, allowing students to learn at their own pace while acquiring valuable skills in technology and development.
        </p>
        <ul className="features5">
          <li>
            <strong>Self-Paced Learning </strong>: Access pre-recorded lectures anytime, anywhere, enabling a personalized learning experience.
          </li>
          <li>
            <strong>Expert-Led Content</strong>: Courses taught by industry experts to ensure high-quality education.
          </li>
          <li>
            <strong>Wide Course Selection</strong>: Covers diverse domains, including cloud computing, software development, data analysis, and more.
          </li>
        </ul>
      </div>

      {/* What We Offer Section */}
<div className="what-we-offer">
  <h3>What We Offer:</h3>
  <div className="offer-section">
    <h4>1. Extensive Learning Resources</h4>
    <p className="offer-text">Over 1250+ hours of content across various courses.</p>
    <p className="offer-text">Access to high-quality recorded lectures and downloadable study materials.</p>
  </div>
  <div className="offer-section">
    <h4>2. Expert-Led Content</h4>
    <p className="offer-text">Courses designed and delivered by industry leaders and experts.</p>
    <p className="offer-text">Practical insights and strategies to help you excel in the real world.</p>
  </div>
  <div className="offer-section">
    <h4>3. Diverse Course Selection</h4>
    <p className="offer-text">Explore courses across multiple domains, including:</p>
    <ul>
      <li>Cloud Computing</li>
      <li>Software Development</li>
      <li>Data Analysis</li>
      <li>Artificial Intelligence</li>
      <li>Web Development</li>
    </ul>
  </div>
  <div className="offer-section">
    <h4>4. Exclusive Access</h4>
    <p className="offer-text">Available only to Coder House members, ensuring a focused and committed learning environment.</p>
    <p className="offer-text">Regular updates with new courses and materials to stay relevant in the ever-evolving tech landscape.</p>
  </div>
</div>


      {/* Technologies Section */}
      <div className="technologies1">
        <h3>Learn Wide Range of Technologies like</h3>
        <div className="tech-grid">
          <div className="tech-item">
            <img src="/images/Courses/corejava.png" alt="Core Java" />
            <p>Core Java, Advanced Java</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/springboot.png" alt="Spring Boot" />
            <p>Spring Boot</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/aws.png" alt="AWS" />
            <p>AWS Admin, AWS DevOps</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/dot-net-original.png" alt="Dot Net" />
            <p>Dot Net</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/azure.png" alt="Azure" />
            <p>Azure Admin | DevOps | Azure Data Engineer</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/Python-logo-notext.png" alt="Python" />
            <p>Python, Django, Python Full Stack</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/ki.png" alt="SQL" />
            <p>SQL</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/New_Power_BI_Logo.png" alt="Power BI" />
            <p>Power BI</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/rest-api.png" alt="REST API" />
            <p>REST API</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/React_Logo.png" alt="React JS" />
            <p>React JS</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/nodejs.png" alt="Node JS" />
            <p>Node JS</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/mangodb.png" alt="MongoDB" />
            <p>Mongo DB</p>
          </div>
          <div className="tech-item">
            <img src="/images/Courses/oracle.png" alt="Oracle" />
            <p>Oracle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwayamBatch;
