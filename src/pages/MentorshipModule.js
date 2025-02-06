import React, { useState, useEffect, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import './MentorshipModule.css';

// Memoized Carousel Stack Component
const CarouselStack = memo(({ images, titles, isSecond = false, currentIndex }) => (
  <div className={`carousel-container ${isSecond ? 'second-carousel' : ''}`}>
    {images.map((image, index) => {
      const offset = index - currentIndex;
      const isActive = offset === 0;
      const isNext = offset === 1 || (currentIndex === images.length - 1 && index === 0);
      const isPrev = offset === -1 || (currentIndex === 0 && index === images.length - 1);

      return (
        <div
          key={index}
          className={`carousel-card 
            ${isActive ? 'active' : ''}
            ${isNext ? 'next' : ''}
            ${isPrev ? 'prev' : ''}
            ${!isActive && !isNext && !isPrev ? 'hidden' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          {isActive && (
            <div className="title-overlay">
              <h3 className="title-text">{titles[index]}</h3>
            </div>
          )}
        </div>
      );
    })}
  </div>
));

// Memoized Features Component
const Features = memo(({ features }) => (
  <div className="mentorship_features_grid">
    {features.map((feature, index) => (
      <div key={index} className="mentorshipfeature">
        <strong>{feature.heading}</strong>
        <p>{feature.description}</p>
      </div>
    ))}
  </div>
));

// Memoized Success Popup Component
const SuccessPopup = memo(({ onClose }) => (
  <div className="success-popup-overlay" onClick={onClose}>
    <div className="success-popup" onClick={e => e.stopPropagation()}>
      <div className="success-icon">✓</div>
      <h3>Success!</h3>
      <p>Your mentorship session has been booked successfully!</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
));

const MentorshipModule = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Consolidated form state
  const [formState, setFormState] = useState({
    data: {
      fullName: '',
      email: '',
      phone: '',
      course: '',
      year: '',
      domain: '',
      dateTime: '',
      query: ''
    },
    errors: {
      fullName: '',
      email: '',
      phone: '',
      course: '',
      year: '',
      domain: '',
      dateTime: '',
      query: ''
    }
  });

  // Memoized data
  const carouselData = React.useMemo(() => ({
    images1: ['../images/Ambassador/AasthaPurey.jpg', '../images/Ambassador/image10.jpg', '../images/Ambassador/ishika.jpg'],
    images2: ['../images/Ambassador/image2.png', '../images/Ambassador/image14.jpg', '../images/Ambassador/image8.jpg'],
    titles1: ['Frontend Expert', 'DSA Expert', 'Backend Expert'],
    titles2: ['Full stack Expert', 'UI & UX Expert', 'Cyber Expert']
  }), []);

  const featuresData = React.useMemo(() => [
    { heading: "★ In-Depth Learning Sessions", description: "Engage in 2-hour sessions led by experienced mentors, providing valuable insights and hands-on guidance." },
    { heading: "★ Personalized 1:1 Mentorship", description: "Get tailored guidance designed to address your specific goals, challenges, and career aspirations." },
    { heading: "★ Goal-Oriented Roadmap", description: "Receive structured mentorship focused on achieving milestones, skill-building, and career success." },
    { heading: "★ Expert Knowledge Sharing", description: "Learn from industry professionals with real-world experience, gaining insights that go beyond textbooks." },
    { heading: "★ Flexible and Convenient Scheduling", description: "Book sessions at your convenience, ensuring mentorship fits seamlessly into your routine." },
    { heading: "★ Comprehensive Growth Approach", description: "Develop both technical expertise and soft skills, fostering a well-rounded professional journey." }
  ], []);

  const allowedDomains = React.useMemo(() => [
    "gmail.com", "yahoo.com", "hotmail.com", "aol.com", "hotmail.co.uk", "hotmail.fr", "msn.com", "yahoo.fr", "wanadoo.fr", "orange.fr", "comcast.net", "yahoo.co.uk", "yahoo.com.br", "yahoo.co.in", "live.com", "rediffmail.com", "free.fr", "gmx.de", "web.de", "yandex.ru", "ymail.com", "libero.it", "outlook.com", "uol.com.br", "bol.com.br", "mail.ru", "cox.net", "hotmail.it", "sbcglobal.net", "sfr.fr", "live.fr", "verizon.net", "live.co.uk", "googlemail.com", "yahoo.es", "ig.com.br", "live.nl", "bigpond.com", "terra.com.br", "yahoo.it", "neuf.fr", "yahoo.de", "alice.it", "rocketmail.com", "att.net", "laposte.net", "facebook.com", "bellsouth.net", "yahoo.in", "hotmail.es", "charter.net", "yahoo.ca", "yahoo.com.au", "rambler.ru", "hotmail.de", "tiscali.it", "shaw.ca", "yahoo.co.jp", "sky.com", "earthlink.net", "optonline.net", "freenet.de", "t-online.de", "aliceadsl.fr", "virgilio.it", "home.nl", "qq.com", "telenet.be", "me.com", "yahoo.com.ar", "tiscali.co.uk", "yahoo.com.mx", "voila.fr", "gmx.net", "mail.com", "planet.nl", "tin.it", "live.it", "ntlworld.com", "arcor.de", "yahoo.co.id", "frontiernet.net", "hetnet.nl", "live.com.au", "yahoo.com.sg", "zonnet.nl", "club-internet.fr", "juno.com", "optusnet.com.au", "blueyonder.co.uk", "bluewin.ch", "skynet.be", "sympatico.ca", "windstream.net", "mac.com", "centurytel.net", "chello.nl", "live.ca", "aim.com", "bigpond.net.au"
  ], []);

  // Validation functions
  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'fullName':
        if (!value) return "Name is required";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Name can only contain letters and spaces";
        if (value.trim().length < 2) return "Name must be at least 2 characters long";
        if (value.length > 50) return "Name cannot exceed 50 characters";
        return "";

      case 'email':
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
        const domain = value.split('@')[1]?.toLowerCase();
        if (!allowedDomains.includes(domain)) return "Please enter an email with a valid domain";
        return "";

      case 'phone':
        if (!value) return "Phone number is required";
        if (!/^\d{10}$/.test(value)) return "Please enter a valid 10-digit phone number";
        return "";

      case 'course':
        if (!value) return "Course is required";
        if (value.trim().length < 2) return "Course must be at least 2 characters long";
        if (value.length > 100) return "Course name is too long";
        return "";

      case 'year':
        if (!value) return "Year of study is required";
        return "";

      case 'domain':
        if (!value) return "Mentor domain is required";
        return "";

      case 'dateTime':
        if (!value) return "Date and time is required";
        const selectedDate = new Date(value);
        const now = new Date();
        if (selectedDate < now) return "Please select a future date and time";
        return "";

      case 'query':
        if (!value) return "Query is required";
        if (value.trim().length < 10) return "Query must be at least 10 characters long";
        if (value.length > 500) return "Query cannot exceed 500 characters";
        return "";

      default:
        return "";
    }
  }, [allowedDomains]);

  // Handle input changes
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    // Sanitize input based on field type
    switch (name) {
      case 'fullName':
        sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '').slice(0, 50);
        break;
      case 'phone':
        sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
        break;
      case 'email':
        sanitizedValue = value.toLowerCase();
        break;
      case 'query':
        sanitizedValue = value.slice(0, 500);
        break;
      default:
        break;
    }

    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [name]: sanitizedValue },
      errors: {
        ...prev.errors,
        [name]: validateField(name, sanitizedValue)
      }
    }));
  }, [validateField]);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.entries(formState.data).forEach(([name, value]) => {
      newErrors[name] = validateField(name, value);
    });

    setFormState(prev => ({
      ...prev,
      errors: newErrors
    }));

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== "")) {
      return;
    }

    try {
      console.log('Form submitted:', formState.data);
      setShowSuccessPopup(true);

      // Reset form
      setFormState(prev => ({
        data: {
          fullName: '',
          email: '',
          phone: '',
          course: '',
          year: '',
          domain: '',
          dateTime: '',
          query: ''
        },
        errors: {
          fullName: '',
          email: '',
          phone: '',
          course: '',
          year: '',
          domain: '',
          dateTime: '',
          query: ''
        }
      }));
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  }, [formState.data, validateField]);

  // Carousel animation
  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % carouselData.images1.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, carouselData.images1.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="mentorship_main_container">
      <button className="back-button1" onClick={() => navigate('/Features')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <h1 className="mentorship_heading">Mentorship Program</h1>

      <div className="mentorship_content_wrapper">
        <div className="carousels-wrapper">
          <CarouselStack 
            images={carouselData.images1} 
            titles={carouselData.titles1} 
            currentIndex={currentIndex}
          />
          <CarouselStack 
            images={carouselData.images2} 
            titles={carouselData.titles2} 
            isSecond={true}
            currentIndex={currentIndex}
          />
        </div>

        <div className="mentorship_form_container">
          <form onSubmit={handleSubmit} className="mentorship_form">
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className={`mentorship_input ${formState.errors.fullName ? 'error' : ''}`}
                onChange={handleInputChange}
                value={formState.data.fullName}
                required
              />
              {formState.errors.fullName && (
                <div className="error-message">{formState.errors.fullName}</div>
              )}
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={`mentorship_input ${formState.errors.email ? 'error' : ''}`}
                onChange={handleInputChange}
                value={formState.data.email}
                required
              />
              {formState.errors.email && (
                <div className="error-message">{formState.errors.email}</div>
              )}
            </div>

            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className={`mentorship_input ${formState.errors.phone ? 'error' : ''}`}
                onChange={handleInputChange}
                value={formState.data.phone}
                required
              />
              {formState.errors.phone && (
                <div className="error-message">{formState.errors.phone}</div>
              )}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="course"
                placeholder="Course / Branch"
                className={`mentorship_input ${formState.errors.course ? 'error' : ''}`}
                onChange={handleInputChange}
                value={formState.data.course}
                required
              />
              {formState.errors.course && (
                <div className="error-message">{formState.errors.course}</div>
              )}
            </div>

            <div className="input-group">
              <select
                name="year"
                className={`mentorship_select ${formState.errors.year ? 'error' : ''}`}
                onChange={handleInputChange}
                value={formState.data.year}
                required
              >
                <option value="">Select Year of Study</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Fourth Year</option>
              </select>
              {formState.errors.year && (
                <div className="error-message">{formState.errors.year}</div>
              )}
            </div>

            <div className="input-group">
              <select
                name="domain"
                className={`mentorship_select ${formState.errors.domain ? 'error' : ''}`}
                onChange={handleInputChange}
                value={formState.data.domain}
                required
              >
                <option value="">Select Mentor Domain</option>
                <option value="frontend">Frontend Expert</option>
                <option value="dsa">DSA Expert</option>
                <option value="backend">Backend Expert</option>
                <option value="uiux">UI/UX Designer</option>
                <option value="aiml">AI/ML Expert</option>
                <option value="cyber">Cybersecurity</option>
              </select>
              {formState.errors.domain && (
                <div className="error-message">{formState.errors.domain}</div>
              )}
            </div>

            <div className="input-group">
              <input
                type="datetime-local"
                name="dateTime"
                className={`mentorship_input ${formState.errors.dateTime ? 'error' : ''}`}
                onChange={handleInputChange}
                value={formState.data.dateTime}
                required
              />
              {formState.errors.dateTime && (
                <div className="error-message">{formState.errors.dateTime}</div>
              )}
            </div>

            <div className="input-group">
              <textarea
                name="query"
                placeholder="Brief Query / What do you need help with?"
                className={`mentorship_textarea ${formState.errors.query ? 'error' : ''}`}
                onChange={handleInputChange}
                value={formState.data.query}
                required
              />
              {formState.errors.query && (
                <div className="error-message">{formState.errors.query}</div>
              )}
            </div>

            <button type="submit" className="mentorship_submit_btn">
              Book Mentorship Session
            </button>
          </form>
        </div>
      </div>

      <div className="mentorship_features_container">
        <div className="mentorship_images_container">
          <img
            src="../images/Mentorship/mentorshipImage1.png"
            alt="Mentorship Session"
            className="mentorship_feature_image"
          />
          <img
            src="../images/Mentorship/mentorshipImage2.jpeg"
            alt="Learning Process"
            className="mentorship_feature_image"
          />
        </div>
        <Features features={featuresData} />
      </div>

      {showSuccessPopup && (
        <SuccessPopup onClose={() => setShowSuccessPopup(false)} />
      )}
    </div>
  );
};

export default MentorshipModule;