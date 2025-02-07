import React, { useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './MentorshipModule.css';

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

// Form Modal Component
const FormModal = memo(({ isOpen, onClose, handleSubmit, formState, handleInputChange }) => {
  if (!isOpen) return null;

  return (
    <div className="form-modal-overlay" onClick={onClose}>
      <div className="form-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <h2 className='Booking'>Book Your Mentorship Session</h2>
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
  );
});

const MentorshipModule = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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

  const carouselItems = [
    {
      image: '../images/Ambassador/AasthaPurey.jpg',
      title: 'Frontend Expert',
      description: 'Expert in React Js'
    },
    {
      image: '../images/Ambassador/image10.jpg',
      title: 'DSA Expert',
      description: 'Master in Data Structures'
    },
    {
      image: '../images/Ambassador/ishika.jpg',
      title: 'Backend Expert',
      description: 'Specialist in Node.js'
    },
    {
      image: '../images/Ambassador/image2.png',
      title: 'Full Stack Expert',
      description: 'Full Stack Development'
    },
    {
      image: '../images/Ambassador/image14.jpg',
      title: 'UI & UX Expert',
      description: 'Creative UI/UX Designer'
    },
    {
      image: '../images/Ambassador/image8.jpg',
      title: 'Cyber Expert',
      description: 'Cybersecurity Specialist'
    }
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4, itemsFit: "contain" },
  };

  const items = carouselItems.map((item, index) => (
    <div key={index} className="carousel-item">
      <img src={item.image} alt={item.title} className="carousel-image" />
      <div className="carousel-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  ));

  const featuresData = [
    { heading: "★ In-Depth Learning Sessions", description: "Engage in 2-hour sessions led by experienced mentors, providing valuable insights and hands-on guidance." },
    { heading: "★ Personalized 1:1 Mentorship", description: "Get tailored guidance designed to address your specific goals, challenges, and career aspirations." },
    { heading: "★ Goal-Oriented Roadmap", description: "Receive structured mentorship focused on achieving milestones, skill-building, and career success." },
    { heading: "★ Expert Knowledge Sharing", description: "Learn from industry professionals with real-world experience, gaining insights that go beyond textbooks." },
    { heading: "★ Flexible and Convenient Scheduling", description: "Book sessions at your convenience, ensuring mentorship fits seamlessly into your routine." },
    { heading: "★ Comprehensive Growth Approach", description: "Develop both technical expertise and soft skills, fostering a well-rounded professional journey." }
  ];

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
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

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

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(formState.data).forEach(([name, value]) => {
      newErrors[name] = validateField(name, value);
    });

    setFormState(prev => ({
      ...prev,
      errors: newErrors
    }));

    if (Object.values(newErrors).some(error => error !== "")) {
      return;
    }

    try {
      console.log('Form submitted:', formState.data);
      setShowSuccessPopup(true);
      setShowForm(false);

      setFormState({
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
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  }, [formState.data, validateField]);

  return (
    <div className="mentorship_main_container">
      <button className="back-button1" onClick={() => navigate('/Features')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <h1 className="mentorship_heading">Mentorship Program</h1>

      <div className="carousel-wrapper">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlay
          autoPlayInterval={200}
          animationDuration={900} // Smooth transition
          infinite
          disableDotsControls
        />
      </div>

      <button 
        className="book-session-btn"
        onClick={() => setShowForm(true)}
      >
        Book Mentorship Session
      </button>

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

      <FormModal 
            isOpen={showForm}
            onClose={() => setShowForm(false)}
            handleSubmit={handleSubmit}
            formState={formState}
            handleInputChange={handleInputChange}
        />

        {showSuccessPopup && (
            <SuccessPopup onClose={() => setShowSuccessPopup(false)} />
        )}
    </div>
  );
};

export default MentorshipModule;