import React, { useState } from "react";
import Navigation from "../components/Navigation";
import "./Home.css";
import Footer from "../components/Footer";
import ReviewSection from "../components/Review";
import Mentor from "../components/Mentor";
import Card from "../components/Card";
import Plan from "../components/Plan";

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
  Other: [""],
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedUserType, setSelectedUserType] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [otherValue, setOtherValue] = useState(""); // New state for custom input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin_url: "",
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserTypeChange = (e) => {
    setSelectedUserType(e.target.value);
    setSelectedProgram("");
    setOtherValue(""); // Reset other value when user type changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for submission
    const payload = {
      ...formData,
      role: selectedUserType === "Other" ? otherValue : selectedUserType,
      program: selectedUserType === "Student" ? selectedProgram : "",
    };

    try {
      const response = await fetch(
        "https://coderhouse-448820.el.r.appspot.com/Form/create", // Backend endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedin_url: "",
        });
        setSelectedUserType("");
        setSelectedProgram("");
        setOtherValue("");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="home">
      <Navigation />
      <section className="hero" id="form-section">
        <div className="hero-left">
          <img
            src="/images/Coder.png"
            alt="Student on laptop"
            className="hero-image"
          />
        </div>
        <div className="hero-right">
          <h2 className="hero-heading">
            <span className="text-white">BE A PART OF THE</span>
            <br />
            <span className="text-green">CODER HOUSE </span>
            <span className="text-white2">FAMILY!</span>
            <br />
          </h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input-field"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-field"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input-field"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />

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
                  <option key={index} value={program}>
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

            <input
              type="url"
              name="linkedin_url"
              placeholder="LinkedIn Profile URL (optional)"
              className="input-field"
              value={formData.linkedin_url}
              onChange={handleInputChange}
            />

            <button type="submit" className="callback-btn">
              Get in Touch
            </button>
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
          <div className="text">1000+ Career Transformed</div>
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
