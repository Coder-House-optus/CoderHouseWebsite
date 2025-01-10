import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import './Home.css';
import Footer from '../components/Footer';
import ReviewSection from '../components/Review';
import Mentor from '../components/Mentor';
import Card from '../components/Card';
import Plan from '../components/Plan';

// Sample review data
const reviewsData = [
  { text: "Coder House has helped me develop my skills rapidly. The mentors were fantastic!", author: "- Shailesh Gupta" },
  { text: "The courses are well-structured, and the environment is very supportive!", author: "- Aditi Sharma" },
  { text: "I gained practical experience through projects, which was invaluable!", author: "- Rajesh Kumar" },
  { text: "Excellent infrastructure and resources make learning enjoyable!", author: "- Priya Mehta" },
  { text: "The mentorship I received at Coder House was life-changing!", author: "- Suresh Bansal" },
];

// Define the options for different user types
const programOptions = {
  Student: ["Web Development", "Artificial Intelligence"],
  Developer: [],
  Trainee: [],
  Other: [""]
};

// Home component
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedUserType, setSelectedUserType] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [otherValue, setOtherValue] = useState(""); // New state for custom input

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  };

  const handleUserTypeChange = (e) => {
    setSelectedUserType(e.target.value);
    setSelectedProgram(""); 
    setOtherValue(""); // Reset other value when user type changes
  };

  return (
    <div className="home">
      <Navigation />
      <section className="hero">
        <div className="hero-left">
          <img
            src="/images/Coder.png"
            alt="Student on laptop"
            className="hero-image"
          />
        </div>
        <div className="hero-right">
          <h2 className="hero-heading">
            <span className="text-white">BE A PART OF THE</span><br />
            <span className="text-green">CODER HOUSE </span><span className="text-white2">FAMILY!</span><br />
          </h2>
          <form className="form" action="YOUR_DEPLOYED_WEB_APP_URL" method="post">
            <input type="text" name="Name" placeholder="Name" className="input-field" required />
            <input type="email" name="Email" placeholder="Email" className="input-field" required />
            <input type="text" name="Phone" placeholder="Phone" className="input-field" required />
            
            {/* First dropdown for user type */}
            <select
              name="UserType" 
              className="input-field program-selection"
              value={selectedUserType}
              onChange={handleUserTypeChange}
              required
            >
              <option value="">Select For</option>
              <option value="Student">Student</option>
              <option value="Developer">Developer</option>
              <option value="Trainee">Trainee</option>
              <option value="Other">Other</option>
            </select>

            {/* Show program dropdown for Students */}
            {selectedUserType === "Student" && (
              <select
                name="Program" 
                className="input-field program-selection"
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                required
              >
                <option value="">Select Program</option>
                {programOptions[selectedUserType].map((program, index) => (
                  <option key={index} value={program.toLowerCase().replace(" ", "-")}>
                    {program}
                  </option>
                ))}
              </select>
            )}

            {/* Show custom input field for Other */}
            {selectedUserType === "Other" && (
              <input
                type="text"
                name="OtherType"
                placeholder="Please specify"
                className="input-field"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                required
              />
            )}

            <input type="url" name="LinkedIn" placeholder="LinkedIn Profile URL" className="input-field" />

            <button type="submit" className="callback-btn">Get in Touch</button>

          </form>
        </div>
      </section>

      <div className="stats-section">
        <div className="item">
          <img src="/images/arrow.png" alt="Arrow Image" />
          <div className="text">147% Average Hike</div>
        </div>
        <div className="item">
          <img src="/images/Career.png" alt="Career Image" />
          <div className="text">1000+ Career Transformed </div>
        </div>
        <div className="item">
          <img src="/images/teacher.png" alt="Teacher Image" />
          <div className="text">50+ Experienced Mentor</div>
        </div>
      </div>

      <Card />
      <Plan />
      <ReviewSection />
      <Mentor />
      <Footer />
    </div>
  );
}