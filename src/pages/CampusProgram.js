import React, { useState, useEffect } from 'react';
import './CampusProgram.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CampusProgram = () => {
  // State for programs and image index
  const technicalPrograms = [
    { 
      name: "C Programming", 
      symbol: "💻", 
      description: "Get hands-on with the fundamentals of C programming.", 
      duration: "4 months", 
      cost: "$600", 
      image: "/images/c.png"  // Local image path
    },
    { 
      name: "C++ Programming", 
      symbol: "💻", 
      description: "Master C++ programming with object-oriented design, data structures, and algorithms.", 
      duration: "6 months", 
      cost: "$700", 
      image: "/images/c.png"  // Local image path
    },
    { 
      name: "Java Programming", 
      symbol: "☕", 
      description: "Learn Java for software development, covering OOP concepts and data structures.", 
      duration: "5 months", 
      cost: "$750", 
      image: "/images/java.png"  // External image URL
    },
    { 
      name: "Python Programming", 
      symbol: "🐍", 
      description: "Get started with Python for versatile applications in data science and web development.", 
      duration: "3 months", 
      cost: "$600", 
      image: "/images/Pythoncard.png"  // Local image path
    },
    { 
      name: "Full Stack Development", 
      symbol: "🌐", 
      description: "Learn front-end and back-end technologies for building web applications.", 
      duration: "6 months", 
      cost: "$850", 
      image: "/images/Fullstackcard.png"  // Local image path
    },
    { 
      name: "Cybersecurity", 
      symbol: "🔐", 
      description: "Understand the principles of security and protect systems from cyber threats.", 
      duration: "5 months", 
      cost: "$950", 
      image: "/images/Cybersecuritycard.png"  // External image URL
    },
    { 
      name: "Machine Learning", 
      symbol: "🤖", 
      description: "Explore machine learning concepts with hands-on projects using Python.", 
      duration: "4 months", 
      cost: "$900", 
      image: "/images/MLcard.png"  // Local image path
    }
  ];
  
  const cognitivePrograms = [
    { 
      name: "Aptitude", 
      symbol: "📊", 
      description: "Enhance your logical reasoning and mathematical skills.", 
      duration: "2 months", 
      cost: "$300", 
      image: "/images/Aptitude card.png"  // Local image path
    },
    { 
      name: "Reasoning", 
      symbol: "🧠", 
      description: "Build strong reasoning skills for analytical and critical thinking.", 
      duration: "2 months", 
      cost: "$300", 
      image: "/images/Reasoning card.png"  // External image URL
    },
    { 
      name: "English", 
      symbol: "📐", 
      description: "Get a solid foundation in English and problem-solving.", 
      duration: "3 months", 
      cost: "$500", 
      image: "/images/english card.png"  // Local image path
    },
    { 
      name: "Personality Development", 
      symbol: "💼", 
      description: "Improve your communication, leadership, and soft skills.", 
      duration: "2 months", 
      cost: "$400", 
      image: "/images/PD Card.png"  // External image URL
    },
    { 
      name: "GDPI (Group Discussion & Personal Interview)", 
      symbol: "🗣️", 
      description: "Develop essential skills for group discussions and interviews.", 
      duration: "1 month", 
      cost: "$250", 
      image: "/images/GDPI Card.png"  // Local image path
    }
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

  const selectedProgram = currentProgramIndex < technicalPrograms.length
    ? technicalPrograms[currentProgramIndex]
    : cognitivePrograms[currentProgramIndex - technicalPrograms.length];

  // Define handleViewMore here
  const handleViewMore = () => {
    // Logic for handling view more action (e.g., display more details or open a modal)
    console.log("View More clicked for program:", selectedProgram.name);
  };

  return (
    <section className="programs">
      <Navigation />
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
          <div className="program-image">
            <img
              src={selectedProgram.image}
              alt={selectedProgram.name}
              className="program-image-left"
            />
          </div>
          <div className="program-details">
            <h3 className="program-name-details">{selectedProgram.name}</h3>
            <p className="program-description">{selectedProgram.description}</p>
            <p><strong>Duration:</strong> {selectedProgram.duration}</p>
            {/* View More Button */}
            <button onClick={handleViewMore} className="view-more-button">View More</button>
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
      <h2 className="programs-title">
        <span className="text-black">Enquiry</span>
        <span className="text-green"> Form</span>
      </h2>
      <div className="enquiry-form-container">
      
        <form onSubmit={handleFormSubmit} className="enquiry-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            required
          />
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            <option value="Technical">Technical</option>
            <option value="Cognitive">Cognitive</option>
          </select>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            required
          >
            <option value="">Select Mode</option>
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
          </select>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Your Query"
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default CampusProgram;
