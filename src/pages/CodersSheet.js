import React, { useState, useEffect } from 'react';
import './CoderSheet.css';
import { useNavigate } from 'react-router-dom';
import { div } from 'framer-motion/client';

const CustomAlert = ({ message, onClose }) => (
  <div className="custom-alert">
    <div className="alert-content">
      <p>{message}</p>
    </div>
  </div>
);

const CoderSheet = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  
  const [showForm, setShowForm] = useState(() => {
    return sessionStorage.getItem('hasFilledCoderSheetForm') !== 'true';
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: 'student',
    query: ''
  });
  
  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!validateName(formData.name)) {
      newErrors.name = 'Name can only contain alphabets and spaces';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.query.trim()) {
      newErrors.query = 'Query is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageButtonClick = (page) => {
    navigate(`/${page}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for name field to prevent input of numbers and special characters
    if (name === 'name') {
      // Only update if the new value contains only letters and spaces
      if (value === '' || validateName(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('https://coderhouse-x1yv.onrender.com/Form/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        sessionStorage.setItem('hasFilledCoderSheetForm', 'true');
        setShowForm(false);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  if (showForm) {
    return (
      <div>
        <button className="back-button1" onClick={() => navigate('/Features')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        
        <div className="popup-form-overlay">
          <div className="popup-form">
            <h2>Fill the Form for Coding Resources</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'form-input error' : 'form-input'}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'form-input error' : 'form-input'}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'form-input error' : 'form-input'}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <select 
                name="role" 
                value={formData.role} 
                onChange={handleChange}
                className="form-input"
              >
                <option value="student">Student</option>
                <option value="developer">Developer</option>
                <option value="other">Other</option>
              </select>

              <div className="form-group">
                <textarea
                  name="query"
                  placeholder="Your Query"
                  value={formData.query}
                  onChange={handleChange}
                  className={errors.query ? 'form-input error' : 'form-input'}
                />
                {errors.query && <span className="error-message">{errors.query}</span>}
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="coder-sheet">
      <button className="back-button1" onClick={() => navigate('/Features')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      {showAlert && (
        <CustomAlert
          message="Form submitted successfully! Thank you for your submission."
        />
      )}
      
      <div className="header1">
        <h1 className="mainTitle1">
          <span className="textGreen">Coders Sheet: </span> 
        </h1>
        <p className="mentorpara1">Unleash the power of structured coding practice! Whether you're preparing for FAANG interviews, mastering competitive programming, or refining data structures & algorithms, CoderSheet is your ultimate guide.</p>
      </div>
      <div className="coding-platforms">
        <div className="platform-card" onClick={() => handleImageButtonClick('atcoder')}>
          <img className="platform-logo" src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F566497%2F6c8a7829-0fb6-48c4-45ff-5088cf46e7c4.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=1fe8bf292f0493ad4ddff43972b0d178" alt="Atcoder Logo" />
          <h3>Atcoder</h3>
          <p>Practice coding problems on Atcoder.</p>
        </div>
        <div className="platform-card" onClick={() => handleImageButtonClick('codeforces')}>
          <img className="platform-logo" src="https://camo.githubusercontent.com/b5f0879162f3fb94fa211b30508d39bfcce3a406883e58e77d27e867204bb76c/68747470733a2f2f6173736574732e636f6465666f726365732e636f6d2f75736572732f6b6775736576612f636f6d6d656e74732f63662e706e67" alt="Codeforces Logo" />
          <h3>Codeforces</h3>
          <p>Participate in contests and solve problems on Codeforces.</p>
        </div>
        <div className="platform-card" onClick={() => handleImageButtonClick('leetcode')}>
          <img className="platform-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/916px-LeetCode_Logo_black_with_text.svg.png" alt="Leetcode Logo" />
          <h3>Leetcode</h3>
          <p>Prepare for interviews and competitive programming on Leetcode.</p>
        </div>
      </div>
    </div>
  );
};

export default CoderSheet; 