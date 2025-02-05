import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
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
  


  // State for programs and image index
  const technicalPrograms = [
    { 
      name: "C Programming", 
      // symbol: "💻", 
      description: "Get hands-on with the fundamentals of C programming.", 
      duration: "4 months", 
      cost: "$600", 
      image: "/images/c.png",
      link: "/programs/c-programming" ,
      batches: {
        morning: { date: "2025-03-01", time: "09:00 AM - 11:00 AM" },
        evening: { date: "2025-03-02", time: "06:00 PM - 08:00 PM" }
      }
    },
    // { 
    //   name: "C++ Programming", 
    //   symbol: "💻", 
    //   description: "Master C++ programming with object-oriented design, data structures, and algorithms.", 
    //   duration: "6 months", 
    //   cost: "$700", 
    //   image: "/images/c.png",
    //   link: "/programs/cpp-programming"  // Add unique link for each program
    // },
    { 
      name: "Java Programming", 
      // symbol: "☕", 
      description: "Learn Java for software development, covering OOP concepts and data structures.", 
      duration: "5 months", 
      cost: "$750", 
      image: "/images/Java.png",
      link: "/programs/java-programming"  ,
      batches: {
        morning: { date: "2025-03-05", time: "08:30 AM - 10:30 AM" },
        evening: { date: "2025-03-06", time: "07:00 PM - 09:00 PM" }
      }
    },
    { 
      name: "Python Programming", 
      // symbol: "🐍", 
      description: "Get started with Python for versatile applications in data science and web development.", 
      duration: "3 months", 
      cost: "$600", 
      image: "/images/Pythoncard.png",
      link: "/programs/python-programming" ,
      batches: {
        morning: { date: "2025-03-15", time: "09:00 AM - 10:30 AM" },
        evening: { date: "2025-03-16", time: "06:00 PM - 07:30 PM" }
      }
    },
    { 
      name: "Full Stack Development", 
      // symbol: "🌐", 
      description: "Learn front-end and back-end technologies for building web applications.", 
      duration: "6 months", 
      cost: "$850", 
      image: "/images/Fullstackcard.png",
      link: "/programs/full-stack-development"  ,
      batches: {
        morning: { date: "2025-03-10", time: "10:00 AM - 12:00 PM" },
        evening: { date: "2025-03-11", time: "05:30 PM - 07:30 PM" }
      }
    },
    { 
      name: "Cybersecurity", 
      // symbol: "🔐", 
      description: "Understand the principles of security and protect systems from cyber threats.", 
      duration: "5 months", 
      cost: "$950", 
      image: "/images/Cybersecuritycard.png",
      link: "/programs/cybersecurity" ,
      batches: {
        morning: { date: "2025-03-10", time: "10:00 AM - 12:00 PM" },
        evening: { date: "2025-03-11", time: "05:30 PM - 07:30 PM" }
      }
    },
    { 
      name: "Machine Learning", 
      // symbol: "🤖", 
      description: "Explore machine learning concepts with hands-on projects using Python.", 
      duration: "4 months", 
      cost: "$900", 
      image: "/images/MLCard.png",
      link: "/programs/machine-learning"  ,
      batches: {
        morning: { date: "2025-03-20", time: "08:00 AM - 09:30 AM" },
        evening: { date: "2025-03-21", time: "07:00 PM - 08:30 PM" }
      }
    }
  ];
  
  const cognitivePrograms = [
    { 
      name: "Aptitude", 
      // symbol: "📊", 
      description: "Enhance your logical reasoning and mathematical skills.", 
      duration: "2 months", 
      cost: "$300", 
      image: "/images/Aptitude card.png",
      link: "/programs/aptitude"  ,
      batches: {
        morning: { date: "2025-03-15", time: "09:00 AM - 10:30 AM" },
        evening: { date: "2025-03-16", time: "06:00 PM - 07:30 PM" }
      }
    },
    { 
      name: "Reasoning", 
      // symbol: "🧠", 
      description: "Build strong reasoning skills for analytical and critical thinking.", 
      duration: "2 months", 
      cost: "$300", 
      image: "/images/Reasoning card.png",
      link: "/programs/reasoning" ,
      batches: {
        morning: { date: "2025-03-15", time: "09:00 AM - 10:30 AM" },
        evening: { date: "2025-03-16", time: "06:00 PM - 07:30 PM" }
      }
    },
    { 
      name: "English", 
      // symbol: "📐", 
      description: "Get a solid foundation in English and problem-solving.", 
      duration: "3 months", 
      cost: "$500", 
      image: "/images/english card.png",
      link: "/programs/english"  ,
      batches: {
        morning: { date: "2025-03-20", time: "08:00 AM - 09:30 AM" },
        evening: { date: "2025-03-21", time: "07:00 PM - 08:30 PM" }
      }
    },
    { 
      name: "CT & Decison Making ", 
      // symbol: "💼", 
      description: "Improve your communication, leadership, and soft skills.", 
      duration: "2 months", 
      cost: "$400", 
      image: "/images/CT AND DM.png",
      link: "/programs/CriticalThinking"  ,
      batches: {
        morning: { date: "2025-03-05", time: "08:30 AM - 10:30 AM" },
        evening: { date: "2025-03-06", time: "07:00 PM - 09:00 PM" }
      }
    },
    { 
      
      name: "GD & Personal Interview", 
      // symbol: "🗣️", 
      description: "Develop essential skills for group discussions and interviews.", 
      duration: "1 month", 
      cost: "$250", 
      image: "/images/GDPI Card.png",
      link: "/programs/GDPersonalInterview"  ,
      batches: {
        morning: { date: "2025-03-10", time: "10:00 AM - 12:00 PM" },
        evening: { date: "2025-03-11", time: "05:30 PM - 07:30 PM" }
      }
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
      {currentProgramIndex < technicalPrograms.length && (
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
      <div className="batch-time">
        <strong></strong> {isMorningBatch ? "Morning" : "Evening"} : {" "}
        {isMorningBatch
          ? technicalPrograms[currentProgramIndex].batches.morning.time
          : technicalPrograms[currentProgramIndex].batches.evening.time}
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
      {currentProgramIndex >= technicalPrograms.length && currentProgramIndex < technicalPrograms.length + cognitivePrograms.length && (
  <div className="program-details-container">
    <div className="program-image1">
      <img
        src={cognitivePrograms[currentProgramIndex - technicalPrograms.length].image}
        alt={cognitivePrograms[currentProgramIndex - technicalPrograms.length].name}
        className="program-image-left"
      />
    </div>
    <div className="program-details">
      <h3 className="program-name-details">
        {cognitivePrograms[currentProgramIndex - technicalPrograms.length].name}
      </h3>
      <p>
        <strong>Duration:</strong> {cognitivePrograms[currentProgramIndex - technicalPrograms.length].duration}
      </p>
      <p>
        <strong>Cost:</strong> {cognitivePrograms[currentProgramIndex - technicalPrograms.length].cost}
      </p>
      <div className="batch-time">
        <strong></strong> {isMorningBatch ? "Morning" : "Evening"} :{" "}
        {isMorningBatch
          ? cognitivePrograms[currentProgramIndex - technicalPrograms.length].batches.morning.time
          : cognitivePrograms[currentProgramIndex - technicalPrograms.length].batches.evening.time}
      </div>

      <div className="action-container">
        <button
          onClick={() =>
            handleViewMore(
              cognitivePrograms[currentProgramIndex - technicalPrograms.length]
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