import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import './Home.css';
import Footer from '../components/Footer';
import ReviewSection from '../components/Review';
import Mentor from '../components/Mentor';
import Card from '../components/Card';
import Plan from '../components/Plan';

const reviewsData = [
  { text: "Coder House has helped me develop my skills rapidly. The mentors were fantastic!", author: "- Shailesh Gupta" },
  { text: "The courses are well-structured, and the environment is very supportive!", author: "- Aditi Sharma" },
  { text: "I gained practical experience through projects, which was invaluable!", author: "- Rajesh Kumar" },
  { text: "Excellent infrastructure and resources make learning enjoyable!", author: "- Priya Mehta" },
  { text: "The mentorship I received at Coder House was life-changing!", author: "- Suresh Bansal" },
];

const programOptions = {
  Student: ["Web Development", "Artificial Intelligence"],
  Developer: [],
  Trainee: [],
  Other: [""]
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedUserType, setSelectedUserType] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [otherValue, setOtherValue] = useState("");
  ////////////////
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: ""
  });
  const [errors, setErrors] = useState({});
  const [fileHandle, setFileHandle] = useState(null);

  
  const validateForm = () => {
    const newErrors = {};

   
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

 
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    
    if (formData.linkedin) {
      const linkedinRegex = /^https:\/\/[a-zA-Z]+\.linkedin\.com\//;
      if (!linkedinRegex.test(formData.linkedin)) {
        newErrors.linkedin = "Invalid LinkedIn URL";
      }
    }

 
    if (!selectedUserType) {
      newErrors.userType = "Please select a user type";
    }

    
    if (selectedUserType === "Student" && !selectedProgram) {
      newErrors.program = "Please select a program";
    }

    
    if (selectedUserType === "Other" && !otherValue.trim()) {
      newErrors.otherValue = "Please specify your type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleFileSelect = async () => {
    try {
     
      const handle = await window.showSaveFilePicker({
        suggestedName: 'form-submissions.json',
        types: [{
          description: 'JSON File',
          accept: {
            'application/json': ['.json'],
          },
        }],
      });
      setFileHandle(handle);
      return handle;
    } catch (err) {
      console.error('Error selecting file:', err);
      alert('Error selecting file location. Please try again.');
      return null;
    }
  };

  
  const readExistingSubmissions = async (handle) => {
    try {
      const file = await handle.getFile();
      const contents = await file.text();
      return contents ? JSON.parse(contents) : [];
    } catch (err) {
      console.error('Error reading file:', err);
      return [];
    }
  };


  const writeSubmissionsToFile = async (handle, submissions) => {
    try {
      const writable = await handle.createWritable();
      await writable.write(JSON.stringify(submissions, null, 2));
      await writable.close();
      return true;
    } catch (err) {
      console.error('Error writing to file:', err);
      alert('Error saving submission. Please try again.');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const submissionData = {
        ...formData,
        userType: selectedUserType,
        program: selectedProgram,
        otherType: otherValue,
        submissionDate: new Date().toISOString()
      };

      try {
      
        const handle = fileHandle || await handleFileSelect();
        if (!handle) return;

        
        const existingSubmissions = await readExistingSubmissions(handle);
        
        
        const newSubmissions = [...existingSubmissions, submissionData];
        
       
        const success = await writeSubmissionsToFile(handle, newSubmissions);
        
        if (success) {
         
          setFormData({
            name: "",
            email: "",
            phone: "",
            linkedin: ""
          });
          setSelectedUserType("");
          setSelectedProgram("");
          setOtherValue("");
          setErrors({});
          
          alert("Form submitted successfully! Data has been saved to file.");
        }
      } catch (err) {
        console.error('Error handling submission:', err);
        alert('Error saving submission. Please try again.');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name.toLowerCase()]: value
    }));
  };
//////////////
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  };

  const handleUserTypeChange = (e) => {
    setSelectedUserType(e.target.value);
    setSelectedProgram("");
    setOtherValue("");
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
            <span className="text-green">CODER HOUSE </span>
            <span className="text-white2">FAMILY!</span><br />
          </h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className={`input-field ${errors.name ? 'error' : ''}`}
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="input-group">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className={`input-field ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="Phone"
                placeholder="Phone"
                className={`input-field ${errors.phone ? 'error' : ''}`}
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="input-group">
              <select
                name="UserType"
                className={`input-field program-selection ${errors.userType ? 'error' : ''}`}
                value={selectedUserType}
                onChange={handleUserTypeChange}
              >
                <option value="">Select For</option>
                <option value="Student">Student</option>
                <option value="Developer">Developer</option>
                <option value="Trainee">Trainee</option>
                <option value="Other">Other</option>
              </select>
              {errors.userType && <span className="error-message">{errors.userType}</span>}
            </div>

            {selectedUserType === "Student" && (
              <div className="input-group">
                <select
                  name="Program"
                  className={`input-field program-selection ${errors.program ? 'error' : ''}`}
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                >
                  <option value="">Select Program</option>
                  {programOptions[selectedUserType].map((program, index) => (
                    <option key={index} value={program.toLowerCase().replace(" ", "-")}>
                      {program}
                    </option>
                  ))}
                </select>
                {errors.program && <span className="error-message">{errors.program}</span>}
              </div>
            )}

            {selectedUserType === "Other" && (
              <div className="input-group">
                <input
                  type="text"
                  name="OtherType"
                  placeholder="Please specify"
                  className={`input-field ${errors.otherValue ? 'error' : ''}`}
                  value={otherValue}
                  onChange={(e) => setOtherValue(e.target.value)}
                />
                {errors.otherValue && <span className="error-message">{errors.otherValue}</span>}
              </div>
            )}

            <div className="input-group">
              <input
                type="url"
                name="LinkedIn"
                placeholder="LinkedIn Profile URL"
                className={`input-field ${errors.linkedin ? 'error' : ''}`}
                value={formData.linkedin}
                onChange={handleInputChange}
              />
              {errors.linkedin && <span className="error-message">{errors.linkedin}</span>}
            </div>

            <button type="submit" className="callback-btn">Get in Touch</button>
          </form>
        </div>
      </section>

      {/* Rest of your components */}
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