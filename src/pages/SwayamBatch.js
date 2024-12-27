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
        Back to features
      </button>
      
      <div className="header">
        <h2>Swayam Batch</h2>
        <ul className="features5">
          <li>Curated Content Available in the form of Recorded Videos.</li>
          <li>Subscription to Coding Library.</li>
          <li>2000+ Practice Questions.</li>
        </ul>
      </div>
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
