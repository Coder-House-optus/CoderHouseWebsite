import React from 'react';

import Footer from '../components/Footer';
const CProgramming = () => {
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

  return (
    <div>
      {/* Adding keyframes in a style tag */}
      <style>{animationStyles}</style>

      {/* Header Section */}
      <header style={headerStyles}>
        <img
          src="/images/logo1.png" // Replace with your logo URL
          alt="Logo"
          style={logoStyles}
        />
        <h1 style={titleStyles}>C Programming Course</h1>
      </header>

      {/* Main Content */}
      <div style={titleStyles1}>
        <h3>This is the C Programming course Roadmap details</h3>
      </div>

        <img
          src="/images/Roadmaps/C Programming_ From Beginner to Expert-roadmap.jpg" // Replace with your logo URL
          alt="Logo"
          style={flowchart}
        />
        <h1 style={titleStyles}>C Programming Course</h1>

      <Footer />
    </div>
    
  );
};

export default CProgramming;
