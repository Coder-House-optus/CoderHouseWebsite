import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './SchoolProgram.css';
import { useNavigate } from 'react-router-dom';

const SchoolProgram = () => {
  const navigate = useNavigate();

  // Scroll smoothly to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
    <>
      <Navigation />
      <div className="page-containerforschool">
        <div className="background-sectionforschool">
          <div className="content-wrapperforschool">
            <h1 className="main-titleforschool">We Are Coming Very Soon!</h1>
            <div className="projects-gridforschool">
              {projects.map((project, index) => (
                <div key={index} className="project-cardforschool">
                  <div className="card-image-containerforschool">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="card-imageforschool"
                    />
                  </div>
                  <div className="card-contentforschool">
                    <h3 className="card-titleforschool">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchoolProgram;
