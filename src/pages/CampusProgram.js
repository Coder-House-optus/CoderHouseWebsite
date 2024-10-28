import React, { useState, useEffect } from 'react';
import './CampusProgram.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CampusProgram = () => {
  // State for programs and image index
  const technicalPrograms = [
    { name: "C Programming", symbol: "💻", description: "Get hands-on with the fundamentals of C programming.", duration: "4 months", cost: "$600" },
    { name: "C++ Programming", symbol: "💻", description: "Master C++ programming with object-oriented design, data structures, and algorithms.", duration: "6 months", cost: "$700" },
    { name: "Java Programming", symbol: "☕", description: "Learn Java for software development, covering OOP concepts and data structures.", duration: "5 months", cost: "$750" },
    { name: "Python Programming", symbol: "🐍", description: "Get started with Python for versatile applications in data science and web development.", duration: "3 months", cost: "$600" },
    { name: "Full Stack Development", symbol: "🌐", description: "Learn front-end and back-end technologies for building web applications.", duration: "6 months", cost: "$850" },
    { name: "Cybersecurity", symbol: "🔐", description: "Understand the principles of security and protect systems from cyber threats.", duration: "5 months", cost: "$950" },
    { name: "Machine Learning", symbol: "🤖", description: "Explore machine learning concepts with hands-on projects using Python.", duration: "4 months", cost: "$900" }
  ];

  const cognitivePrograms = [
    { name: "Aptitude", symbol: "📊", description: "Enhance your logical reasoning and mathematical skills.", duration: "2 months", cost: "$300" },
    { name: "Reasoning", symbol: "🧠", description: "Build strong reasoning skills for analytical and critical thinking.", duration: "2 months", cost: "$300" },
    { name: "Engineering Basics", symbol: "📐", description: "Get a solid foundation in engineering principles and problem-solving.", duration: "3 months", cost: "$500" },
    { name: "Personality Development", symbol: "💼", description: "Improve your communication, leadership, and soft skills.", duration: "2 months", cost: "$400" },
    { name: "GDPI (Group Discussion & Personal Interview)", symbol: "🗣️", description: "Develop essential skills for group discussions and interviews.", duration: "1 month", cost: "$250" }
  ];

  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Enquiry form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [mode, setMode] = useState('');
  const [query, setQuery] = useState('');

  const images = [
    "/images/moments/b.jpeg",
    "/images/moments/c.jpeg",
    "/images/moments/d.jpeg",
    "/images/moments/e.jpeg",
    "/images/moments/f.jpeg",
    "/images/moments/g.jpeg",
    "/images/moments/h.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can implement sending data logic here
    console.log({ name, phone, course, mode, query });
    // Reset form fields after submission
    setName('');
    setPhone('');
    setCourse('');
    setMode('');
    setQuery('');
  };

  return (
    <section className="programs">
      <Navigation />
      <h4 className="programs-subtitle">Available Programs</h4>
      <h2 className="programs-title">
        <span className="text-black">Our</span>
        <span className="text-green"> Campus Programs</span>
      </h2>

      {/* Technical Programs Section */}
      <div className="program-section">
        <h3 className="section-title">Technical Programs</h3>
        <div className="program-cards">
          {technicalPrograms.map((program, index) => (
            <div
              key={index}
              className="program-card"
              onClick={() => setCurrentProgramIndex(index)}
            >
              <h4>{program.name}</h4>
              <p>{program.symbol}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cognitive Programs Section */}
      <div className="program-section">
        <h3 className="section-title">Cognitive Programs</h3>
        <div className="program-cards">
          {cognitivePrograms.map((program, index) => (
            <div
              key={index}
              className="program-card"
              onClick={() => setCurrentProgramIndex(index + technicalPrograms.length)}
            >
              <h4>{program.name}</h4>
              <p>{program.symbol}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Section */}
      {currentProgramIndex < technicalPrograms.length + cognitivePrograms.length && (
        <div className="program-details-container">
          <div className="program-details">
            <h3 className="program-name-details">
              {currentProgramIndex < technicalPrograms.length
                ? technicalPrograms[currentProgramIndex].name
                : cognitivePrograms[currentProgramIndex - technicalPrograms.length].name}
            </h3>
            <p className="program-description">
              {currentProgramIndex < technicalPrograms.length
                ? technicalPrograms[currentProgramIndex].description
                : cognitivePrograms[currentProgramIndex - technicalPrograms.length].description}
            </p>
            <p>
              <strong>Duration:</strong>{" "}
              {currentProgramIndex < technicalPrograms.length
                ? technicalPrograms[currentProgramIndex].duration
                : cognitivePrograms[currentProgramIndex - technicalPrograms.length].duration}
            </p>
            <p>
              <strong>Cost:</strong>{" "}
              {currentProgramIndex < technicalPrograms.length
                ? technicalPrograms[currentProgramIndex].cost
                : cognitivePrograms[currentProgramIndex - technicalPrograms.length].cost}
            </p>
          </div>
        </div>
      )}

      {/* Image Slideshow Section */}
      <div className="slideshow-container">
        <button className="arrow-button" onClick={handlePrevImage}>&#10094;</button>
        <img src={images[currentImageIndex]} alt="Campus Program" className="slideshow-image" />
        <button className="arrow-button" onClick={handleNextImage}>&#10095;</button>
      </div>

      {/* Enquiry Form Section */}
                {/* Enquiry Form Section */}
<div className="enquiry-container">
  <h3 className="enquiry-heading">Get in Touch</h3>
  <div className="enquiry-form-container glass-morph">
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Course:</label>
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Mode:</label>
        <select value={mode} onChange={(e) => setMode(e.target.value)} required>
          <option value="">Select Mode</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <div className="form-group">
        <label>Query:</label>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  </div>
</div>


      <Footer />
    </section>
  );
};

export default CampusProgram;
