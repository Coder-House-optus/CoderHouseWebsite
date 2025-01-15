import React from 'react';
import './SchoolProgram.css';

const SchoolProgram = () => {
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