import React, { useEffect } from 'react';

const Gform = () => {
  useEffect(() => {
    // Redirect to the Google Form using the provided link
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd12VNW9dqxsHnH13R7JFrug_guszXURRbW4dMc3HmdGHlG5w/viewform?usp=sharing";
  }, []);

  return null; // Optionally, you can return a loading message or spinner
};

export default Gform;
