import React from 'react';
import './SchoolProgram.css';
import { useNavigate } from 'react-router-dom';

const SchoolProgram = () => {
    const navigate = useNavigate();
  // Function to handle navigation for buttons below images
  const handleImageButtonClick = (page) => {
    navigate(`/${page}`);
  };
  const projects = [
    {
      title: "Web Development",
      imageUrl: "/images/Schoolweb.jpg"
    },
    {
      title: "Programing",
      imageUrl: "/images/Schoolprograming.jpg"
    },
    {
      title: "Game Development",
      imageUrl: "/images/Schoolgame.jpg"
    }
  ];

  return (
  <div className="page-container">
  {/* Back Button */}
  <button className="back-button1" onClick={() => navigate('/Home')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
    <div className="background-section">
      <div className="content-wrapper">
        <h1 className="main-title">We Are Coming Very Soon!</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-image-container">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default SchoolProgram;