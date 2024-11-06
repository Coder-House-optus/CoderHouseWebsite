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
  // Add more reviews if needed
];

// Home component
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <div className="home">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <img
            src="/images/Coder.png" // Replace with the correct path to your image
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
            <select name="Program" className="input-field" required>
              <option value="">Select A Program</option>
              <option value="web-dev">Web Development</option>
              <option value="ml">Machine Learning</option>
              <option value="ai">Artificial Intelligence</option>
            </select>
            <input type="url" name="LinkedIn" placeholder="LinkedIn Profile URL" className="input-field" />
            <button type="submit" className="callback-btn">Request Callback</button>
          </form>
        </div>
      </section>
      
      <div className="White">
  <div className="item">
    <img src="/images/arrow.png" alt="Arrow Image" />
    <div className="text">147% Avgerage Hike</div>
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


      {/* Features Section */}
      <Card />

      {/* Plan Section - Positioned Above Review Section */}
      <Plan />

      {/* Review Section */}
      <ReviewSection />

      {/* Mentors Section */}
      <Mentor />

      {/* Footer */}
      <Footer />
    </div>
  );
}
