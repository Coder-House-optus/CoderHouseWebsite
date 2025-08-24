import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import axios from 'axios';
import './CampusProgram.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CampusProgram = () => {
  const navigate = useNavigate();  // Use navigate hook
  const [isMorningBatch, setIsMorningBatch] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMorningBatch((prev) => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Fetch programs from API instead of using hardcoded data
  const [technicalPrograms, setTechnicalPrograms] = useState([]);
  const [cognitivePrograms, setCognitivePrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("https://coderhouse-x1yv.onrender.com/CampusProgramDescription/");
        console.log("fetched")
        const programs = response.data;
        // Filter based on the type field
        setTechnicalPrograms(programs.filter(p => p.type === "technical"));
        setCognitivePrograms(programs.filter(p => p.type === "non-technical"));
      } catch (error) {
        console.error("Error fetching program data:", error);
      }
    };

    fetchPrograms();
  }, []);

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
    // Use navigate to go to the corresponding program page
    navigate(selectedProgram.link);
  };

  const handleJoinNow = () => {
    navigate('./Home'); // Navigates to the Home page (root route)
  };

  return (
    <section className="programs">
      <Navigation />
      <h2 className="programs-title2">
        <span className="text-black1">Our</span>
        <span className="text-green1"> Campus Programs</span>
      </h2>
  
      {/* Technical Programs Section */}
      <div className="program-section">
        <h3 className="section-title5">Technical Programs</h3>
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
  
      {/* Technical Program Details Section */}
      {currentProgramIndex < technicalPrograms.length && technicalPrograms.length > 0 && (
        <div className="program-details-container">
          <div className="program-image">
            <img
              src={technicalPrograms[currentProgramIndex].image}
              alt={technicalPrograms[currentProgramIndex].name}
              className="program-image-left"
            />
          </div>
          <div className="program-details">
            <h3 className="program-name-details">
              {technicalPrograms[currentProgramIndex].name}
            </h3>
            <p>
              <strong>Duration:</strong> {technicalPrograms[currentProgramIndex].duration}
            </p>
            <p>
              <strong>Cost:</strong> {technicalPrograms[currentProgramIndex].cost}
            </p>
            <p>
              <strong>Start Date:</strong>{" "}
              {new Date(technicalPrograms[currentProgramIndex].startDate).toLocaleDateString()}
            </p>
            <p>
              <strong>End Date:</strong>{" "}
              {new Date(technicalPrograms[currentProgramIndex].endDate).toLocaleDateString()}
            </p>
            <div className="batch-time">
              {isMorningBatch ? (
                <>
                  <strong>Morning : </strong>{" "}
                  {new Date(
                    technicalPrograms[currentProgramIndex].batches.morning.date
                  ).toLocaleDateString()}{" "}
                  — {technicalPrograms[currentProgramIndex].batches.morning.time}
                </>
              ) : (
                <>
                  <strong>Evening :  </strong>{" "}
                  {new Date(
                    technicalPrograms[currentProgramIndex].batches.evening.date
                  ).toLocaleDateString()}{" "}
                  — {technicalPrograms[currentProgramIndex].batches.evening.time}
                </>
              )}
            </div>


            <div className="action-container">
              <button
                onClick={() => handleViewMore(technicalPrograms[currentProgramIndex])}
                className="details-btn"
              >
                View More
              </button>
              <button
                onClick={() => {
                  navigate("../home");
                }}
                className="cenroll-btn"
              >
                Join Now!
              </button>
            </div>
          </div>
        </div>
      )}

  
      {/* Cognitive Programs Section */}
      <div className="program-section">
        <h3 className="section-title5">Cognitive Programs</h3>
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
  
      {/* Cognitive Program Details Section */}
        {currentProgramIndex >= technicalPrograms.length && cognitivePrograms.length > 0 && (
          <div className="program-details-container">
            <div className="program-image1">
              <img
                src={
                  cognitivePrograms[currentProgramIndex - technicalPrograms.length].image
                }
                alt={
                  cognitivePrograms[currentProgramIndex - technicalPrograms.length].name
                }
                className="program-image-left"
              />
            </div>
            <div className="program-details">
              <h3 className="program-name-details">
                {cognitivePrograms[currentProgramIndex - technicalPrograms.length].name}
              </h3>
              <p>
                <strong>Duration:</strong>{" "}
                {cognitivePrograms[currentProgramIndex - technicalPrograms.length]
                  .duration}
              </p>
              <p>
                <strong>Cost:</strong>{" "}
                {cognitivePrograms[currentProgramIndex - technicalPrograms.length].cost}
              </p>
              <p>
                <strong>Start Date:</strong>{" "}
                {new Date(
                  cognitivePrograms[currentProgramIndex - technicalPrograms.length]
                    .startDate
                ).toLocaleDateString()}
              </p>
              <p>
                <strong>End Date:</strong>{" "}
                {new Date(
                  cognitivePrograms[currentProgramIndex - technicalPrograms.length]
                    .endDate
                ).toLocaleDateString()}
              </p>
              <div className="batch-time">
                {isMorningBatch ? (
                  <>
                    <strong>Morning  :  </strong>{" "}
                    {new Date(
                      cognitivePrograms[currentProgramIndex - technicalPrograms.length].batches.morning.date
                    ).toLocaleDateString()}{" "}
                    — {cognitivePrograms[currentProgramIndex - technicalPrograms.length].batches.morning.time}
                  </>
                ) : (
                  <>
                    <strong>Evening  :  </strong>{" "}
                    {new Date(
                      cognitivePrograms[currentProgramIndex - technicalPrograms.length].batches.evening.date
                    ).toLocaleDateString()}{" "}
                    — {cognitivePrograms[currentProgramIndex - technicalPrograms.length].batches.evening.time}
                  </>
                )}
              </div>

              <div className="action-container">
                <button
                  onClick={() =>
                    handleViewMore(
                      cognitivePrograms[
                        currentProgramIndex - technicalPrograms.length
                      ]
                    )
                  }
                  className="details-btn"
                >
                  View More
                </button>
                <button
                  onClick={() => {
                    navigate("../home");
                  }}
                  className="cenroll-btn"
                >
                  Join Now!
                </button>
              </div>
            </div>
          </div>
        )}

  
      {/* Image Slideshow Section */}
      <div className="slideshow-container5">
        <div className="image-overlay">
          {/* Green Squares */}
          <div className="green-square square-1"></div>
          <div className="green-square square-2"></div>
          <div className="green-square square-3"></div>
          <div className="green-square square-4"></div>
          <div className="green-square square-5"></div>
          <div className="green-square square-6"></div>
          <div className="green-square square-7"></div>
  
          {/* Center Image */}
          <div className="image-box large center">
            <img src={images[0]} alt="Image 1" />
          </div>
  
          {/* Surrounding Images */}
          <div className="image-box medium top-left">
            <img src={images[1]} alt="Image 2" />
          </div>
          <div className="image-box small top-right">
            <img src={images[2]} alt="Image 3" />
          </div>
          <div className="image-box medium bottom-left">
            <img src={images[3]} alt="Image 4" />
          </div>
          <div className="image-box small bottom-right">
            <img src={images[4]} alt="Image 5" />
          </div>
          <div className="image-box small far-left">
            <img src={images[5]} alt="Image 6" />
          </div>
          <div className="image-box small far-right">
            <img src={images[6]} alt="Image 7" />
          </div>
        </div>
      </div>
  
      <Footer />
    </section>
  );
};  
export default CampusProgram;
