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
              name="name"
              placeholder="Full Name"
              className={`mentorship_input ${formState.errors.name ? 'error' : ''}`}
              onChange={handleInputChange}
              value={formState.data.name}
              required
            />
            {formState.errors.name && (
              <div className="error-message-Of-Mentorship">{formState.errors.name}</div>
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
              <div className="error-message-Of-Mentorship">{formState.errors.email}</div>
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
              <div className="error-message-Of-Mentorship">{formState.errors.phone}</div>
            )}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="branch_course"  // changed from course
              placeholder="Course / Branch"
              className={`mentorship_input ${formState.errors.branch_course ? 'error' : ''}`}
              onChange={handleInputChange}
              value={formState.data.branch_course}
              required
            />
            {formState.errors.branch_course && (
              <div className="error-message-Of-Mentorship">{formState.errors.branch_course}</div>
            )}
          </div>

          <div className="input-group">
            <select
              name="study_year"
              className={`mentorship_select ${formState.errors.study_year ? 'error' : ''}`}
              onChange={handleInputChange}
              value={formState.data.study_year}
              required
            >
              <option value="">Select Year of Study</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
            </select>
            {formState.errors.study_year && (
              <div className="error-message-Of-Mentorship">{formState.errors.study_year}</div>
            )}
          </div>

          <div className="input-group">
            <select
              name="mentor_domain"  // changed from domain
              className={`mentorship_select ${formState.errors.mentor_domain ? 'error' : ''}`}
              onChange={handleInputChange}
              value={formState.data.mentor_domain}
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
            {formState.errors.mentor_domain && (
              <div className="error-message-Of-Mentorship">{formState.errors.mentor_domain}</div>
            )}
          </div>

          <div className="input-group">
            <input
              type="date"
              name="appointment_date"
              className={`mentorship_input ${formState.errors.appointment_date ? 'error' : ''}`}
              onChange={handleInputChange}
              value={formState.data.appointment_date}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="time"
              name="appointment_time"
              className={`mentorship_input ${formState.errors.appointment_time ? 'error' : ''}`}
              onChange={handleInputChange}
              value={formState.data.appointment_time}
              required
            />
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
              <div className="error-message-Of-Mentorship">{formState.errors.query}</div>
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
      name: '',
      email: '',
      phone: '',
      branch_course: '',  // changed from course
      study_year: '',     // changed from year
      mentor_domain: '',  // changed from domain
      appointment_date: '',
      appointment_time: '',
      query: ''
    },
    errors: {
      name: '',
      email: '',
      phone: '',
      branch_course: '',  // changed from course
      study_year: '',     // changed from year
      mentor_domain: '',  // changed from domain
      appointment_date: '',
      appointment_time: '',
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
      description: 'Creative Designer'
    },
    {
      image: '../images/Ambassador/image8.jpg',
      title: 'Cyber Expert',
      description: 'Cybersecurity Specialist'
    },
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
      description: 'Creative Designer'
    },
    {
      image: '../images/Ambassador/image8.jpg',
      title: 'Cyber Expert',
      description: 'Cybersecurity Specialist'
    },
  ];
  const responsive = {
    0: { items: 2 },
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
      case 'name':
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

        case 'branch_course':  // changed from course
        if (!value) return "Course is required";
        if (value.trim().length < 2) return "Course must be at least 2 characters long";
        if (value.length > 100) return "Course name is too long";
        return "";
  
      case 'study_year':    // changed from year
        if (!value) return "Year of study is required";
        return "";
  
      case 'mentor_domain': // changed from domain
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
      case 'name':
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
  
    try {
      // Validate that both date and time are present
      if (!formState.data.appointment_date || !formState.data.appointment_time) {
        throw new Error('Both date and time are required');
      }
  
      // Format the date and time to match API expectations
      const appointmentDate = new Date(`${formState.data.appointment_date}T${formState.data.appointment_time}`);
      const formattedDate = appointmentDate.toISOString();
  
      const requestBody = {
        name: formState.data.name,
        email: formState.data.email,
        phone: formState.data.phone,
        branch_course: formState.data.branch_course,
        study_year: formState.data.study_year,
        mentor_domain: formState.data.mentor_domain,
        appointment_date: formattedDate,
        appointment_time: formState.data.appointment_time, // Add this line
        query: formState.data.query
      };
  
      const response = await fetch('https://coderhouse-448820.el.r.appspot.com/Appointment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        console.log(requestBody)
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit appointment');
      }
  
      const data = await response.json();
      
      if (data && data.message === "created succesffuly") {
        setShowSuccessPopup(true);
        setShowForm(false);
        console.log(formState)
        console.log(data)
        // Reset form
        setFormState({
          data: {
            name: '',
            email: '',
            phone: '',
            branch_course: '',
            study_year: '',
            mentor_domain: '',
            appointment_date: '',
            appointment_time: '',
            query: ''
          },
          errors: {}
        });
        
      } else {
        throw new Error('Unexpected response from server');
        
      }
  
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again. ' + error.message);
    }
  }, [formState.data]);

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
          autoPlayInterval={0}
          animationDuration={2000}
          infinite
          disableDotsControls
          disableButtonsControls
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