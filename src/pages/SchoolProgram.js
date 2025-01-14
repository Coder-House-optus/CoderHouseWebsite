import React from 'react';
import './SchoolProgram.css';

const SchoolProgram = () => {
  const projects = [
    {
      title: "Digital Whiteboard",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      title: "Soccer game",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      title: "Visit to a magic land",
      imageUrl: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="page-container">
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