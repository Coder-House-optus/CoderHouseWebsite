import React from 'react';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
const Aptitude = () => {
  // Inline styles for the header
  const headerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(0deg, #ABDE75, #2C4756)',
    backgroundSize: '300% 300%',
    animation: 'gradientAnimation 6s ease infinite',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
  };

  const logoStyles = {
    maxWidth: '100px',
    height: 'auto',
    marginBottom: '10px',
  };

  const flowchart = {
    display: 'block',  // Makes the image a block-level element
    margin: '0 auto',  // Centers the image horizontally
    width: '80%',      // Adjust width to make it bigger (you can adjust the percentage as needed)
    maxWidth: '1000px', // Limit the maximum width for responsiveness
    marginBottom:'200px'
  };

  const titleStyles = {
    fontWeight: '900',
    fontSize: '3em',
    color: 'rgb(6, 6, 6)',
    textAlign: 'center',
    margin: '0',
    color:'white',
  };

  const titleStyles1 = {
    fontWeight: '400',
    fontSize: '1em',
    color: 'rgb(6, 6, 6)',
    textAlign: 'center',
    margin: '0',
    color:'black',
  };
  
  // Adding keyframes animation using a style tag
  const animationStyles = `
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;
  const navigate = useNavigate();
  return (
    <div>
      {/* Adding keyframes in a style tag */}
      <style>{animationStyles}</style>
      <button 
      style={{
        position: "absolute",
        left: "1rem",
        top: "1rem",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0.5rem",
        transition: "transform 0.2s ease",
        zIndex:100,
      }}
      onClick={() => navigate(-1)}
      aria-label="Go back"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
    </button>
      {/* Header Section */}
      <header style={headerStyles}>
        <img
          src="/images/logo1.png" // Replace with your logo URL
          alt="Logo"
          style={logoStyles}
        />
        <h1 style={titleStyles}>Aptitude Preparation</h1>
      </header>

      {/* Main Content */}
      <div style={titleStyles1}>
        <h3>Prepare for aptitude tests and improve your problem-solving skills.</h3>
      </div>

      <img
        src="/images/Roadmaps/Aptitude for Interview-roadmap.jpg" // Replace with your roadmap image URL
        alt="Aptitude Roadmap"
        style={flowchart}
      />

      <Footer />
    </div>
  );
};

export default Aptitude;

