import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import "./Home.css";
import Footer from "../components/Footer";
import ReviewSection from "../components/Review";
import Mentor from "../components/Mentor";
import Card from "../components/Card";
import Plan from "../components/Plan";

// Success Popup Component
const SuccessPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="success-popup-overlay">
      <div className="success-popup">
        <div className="success-icon">✓</div>
        <h3>Success!</h3>
        <p>Form submitted successfully!</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

// Sample review data
const reviewsData = [
  { text: "Coder House has helped me develop my skills rapidly. The mentors were fantastic!", author: "- Shailesh Gupta" },
  { text: "The courses are well-structured, and the environment is very supportive!", author: "- Aditi Sharma" },
  { text: "I gained practical experience through projects, which was invaluable!", author: "- Rajesh Kumar" },
  { text: "Excellent infrastructure and resources make learning enjoyable!", author: "- Priya Mehta" },
  { text: "The mentorship I received at Coder House was life-changing!", author: "- Suresh Bansal" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [selectedUserType, setSelectedUserType] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [otherValue, setOtherValue] = useState("");
  const [images, setImages] = useState([]);
  const [developerValue, setDeveloperValue] = useState("");
  const [trainerValue, setTrainerValue] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin_url: "",
  });

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://coderhouse-448820.el.r.appspot.com/HomeBanner/');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();

        if (data && data.HomeBanner && Array.isArray(data.HomeBanner)) {
          const imageUrls = data.HomeBanner.map(item => item.image);
          setImages(imageUrls);
        } else {
          throw new Error('Invalid data structure');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  // Image rotation effect
  useEffect(() => {
    if (images.length > 0) {
      const firstImageTimeout = setTimeout(() => {
        setShowFirstImage(false);
      }, 3000);

      const imageInterval = setInterval(() => {
        if (!showFirstImage) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
      }, 3000);

      return () => {
        clearTimeout(firstImageTimeout);
        clearInterval(imageInterval);
      };
    }
  }, [showFirstImage, images]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return "Please enter a valid 10-digit phone number";
    }
    return "";
  };

  const allowedDomains = [
    "gmail.com", "yahoo.com", "hotmail.com", "aol.com", "hotmail.co.uk", "hotmail.fr", "msn.com", "yahoo.fr", "wanadoo.fr", "orange.fr", "comcast.net", "yahoo.co.uk", "yahoo.com.br", "yahoo.co.in", "live.com", "rediffmail.com", "free.fr", "gmx.de", "web.de", "yandex.ru", "ymail.com", "libero.it", "outlook.com", "uol.com.br", "bol.com.br", "mail.ru", "cox.net", "hotmail.it", "sbcglobal.net", "sfr.fr", "live.fr", "verizon.net", "live.co.uk", "googlemail.com", "yahoo.es", "ig.com.br", "live.nl", "bigpond.com", "terra.com.br", "yahoo.it", "neuf.fr", "yahoo.de", "alice.it", "rocketmail.com", "att.net", "laposte.net", "facebook.com", "bellsouth.net", "yahoo.in", "hotmail.es", "charter.net", "yahoo.ca", "yahoo.com.au", "rambler.ru", "hotmail.de", "tiscali.it", "shaw.ca", "yahoo.co.jp", "sky.com", "earthlink.net", "optonline.net", "freenet.de", "t-online.de", "aliceadsl.fr", "virgilio.it", "home.nl", "qq.com", "telenet.be", "me.com", "yahoo.com.ar", "tiscali.co.uk", "yahoo.com.mx", "voila.fr", "gmx.net", "mail.com", "planet.nl", "tin.it", "live.it", "ntlworld.com", "arcor.de", "yahoo.co.id", "frontiernet.net", "hetnet.nl", "live.com.au", "yahoo.com.sg", "zonnet.nl", "club-internet.fr", "juno.com", "optusnet.com.au", "blueyonder.co.uk", "bluewin.ch", "skynet.be", "sympatico.ca", "windstream.net", "mac.com", "centurytel.net", "chello.nl", "live.ca", "aim.com", "bigpond.net.au"
  ];

  const validateEmailDomain = (email) => {
    const domain = email.split('@')[1];
    if (!allowedDomains.includes(domain)) {
      return "Please enter an email address with an allowed domain";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
      const error = validatePhone(sanitizedValue);
      setPhoneError(error);
      setFormData({ ...formData, [name]: sanitizedValue });
    } else if (name === "name") {
      const sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, [name]: sanitizedValue });
    } else if (name === "email") {
      const error = validateEmailDomain(value);
      setEmailError(error);
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUserTypeChange = (e) => {
    setSelectedUserType(e.target.value);
    setSelectedProgram("");
    setOtherValue("");
    setDeveloperValue("");
    setTrainerValue("");
  };

  const programOptions = {
    Student: ["C Programming", "Java Programming", "Python Programming", "Full Stack Development", "Cybersecurity", "Machine Learning"],
    Developer: [],
    Trainer: [],
    Other: [""],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number before submission
    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      setPhoneError(phoneError);
      return;
    }
    const emailError = validateEmailDomain(formData.email);
    if (emailError) {
      setEmailError(emailError);
      return;
    }

    // Determine the query value based on user type
    let queryValue = "";
    if (selectedUserType === "Student") {
      queryValue = selectedProgram;
    } else if (selectedUserType === "Developer") {
      queryValue = developerValue;
    } else if (selectedUserType === "Trainer") {
      queryValue = trainerValue;
    } else if (selectedUserType === "Other") {
      queryValue = otherValue;
    }

    const payload = {
      ...formData,
      role: selectedUserType === "Other" ? "Others" : selectedUserType,
      query: queryValue,
    };

    try {
      const response = await fetch(
        "https://coderhouse-448820.el.r.appspot.com/Form/create",
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
        setShowSuccessPopup(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedin_url: "",
        });
        setSelectedUserType("");
        setSelectedProgram("");
        setOtherValue("");
        setDeveloperValue("");
        setTrainerValue("");
        setPhoneError("");
        setEmailError("");
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
          {images.length > 0 && (
            <img
              src={images[currentIndex]}
              alt="Student on laptop"
              className={`hero-image ${showFirstImage ? 'first-image' : ''}`}
            />
          )}
        </div>
        <div className="floating-bubble">
          What's New
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
              className={`input-field ${emailError ? 'error' : ''}`}
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            {emailError && <div className="email-error">{emailError}</div>}
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className={`input-field ${phoneError ? 'error' : ''}`}
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
            {phoneError && <div className="phone-error">{phoneError}</div>}

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
              <option value="Trainer">Trainer</option>
              <option value="Other">Other</option>
            </select>

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

            {selectedUserType === "Developer" && (
              <input
                type="text"
                name="DeveloperType"
                placeholder="Please specify your development expertise"
                className="input-field"
                value={developerValue}
                onChange={(e) => setDeveloperValue(e.target.value)}
                required
              />
            )}

            {selectedUserType === "Trainer" && (
              <input
                type="text"
                name="TrainerType"
                placeholder="Please specify your training expertise"
                className="input-field"
                value={trainerValue}
                onChange={(e) => setTrainerValue(e.target.value)}
                required
              />
            )}

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
              placeholder="LinkedIn Profile"
              className="input-field"
              value={formData.linkedin_url}
              onChange={handleInputChange}
            />

            <button type="submit" className="callback-btn cursor-pointer" style={{ cursor: "pointer" }}>
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

      {/* Add the Success Popup */}
      <SuccessPopup
        show={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
      />

      <Card />
      <Plan />
      <ReviewSection />
      <Mentor />
      <Footer />
    </div>
  );
}