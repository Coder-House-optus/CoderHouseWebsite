import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import './Home.css';
import Footer from '../components/Footer';
import ReviewSection from '../components/Review'; 
import Mentor from '../components/Mentor';


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
      <span className="text-green">CODER HOUSE</span><br />
      <span className="text-white">FAMILY!</span>
    </h2>
    <form className="form">
      <input type="text" placeholder="Name" className="input-field" />
      <input type="email" placeholder="Email" className="input-field" />
      <input type="tel" placeholder="Phone" className="input-field" />
      <select className="input-field">
        <option>Select A Program</option>
        <option value="web-dev">Web Development</option>
        <option value="ml">Machine Learning</option>
        <option value="ai">Artificial Intelligence</option>
      </select>
      <input type="url" placeholder="LinkedIn Profile URL" className="input-field" />
      <button type="submit" className="callback-btn">Request Callback</button>
    </form>
  </div>
</section>

{/* Features Section */}
<section className="features">
  <h4 className="features-subtitle">What We Offer</h4>
  <h2 className="features-title">
    <span className="text-black">Key Features of</span>
    <span className="text-green"> CODER HOUSE</span>
  </h2>
  <div className="features-grid">
    <div className="feature-card card1">
      <h4>Excellent Infrastructure</h4>
      <ul>
        <li>✔ Modern, tech-enabled classrooms and labs.</li>
        <li>✔ High-speed internet for uninterrupted learning.</li>
        <li>✔ Collaborative spaces to foster creativity.</li>
      </ul>
    </div>
    <div className="feature-card card2">
      <h4>Growth-Centered Space</h4>
      <ul>
        <li>✔ Curriculum focused on rapid skill development.</li>
        <li>✔ Regular workshops and hackathons.</li>
        <li>✔ Supportive, collaborative learning atmosphere.</li>
      </ul>
    </div>
    <div className="feature-card card3">
      <h4>EXPERT MENTOR TEAM</h4>
      <ul>
        <li>✔ Learn from top industry professionals.</li>
        <li>✔ Personalized mentorship and real-world insights.</li>
        <li>✔ Guidance from IIT, NIT, and MNS Experts.</li>
      </ul>
    </div>
  </div>
</section>



      <section className="pricingTable">
      <div className="pricingTable-title">
  Our <span className="programs">PROGRAMS</span>
</div>

        
        <ul className="pricingTable-firstTable">
          <li className="pricingTable-firstTable_table">
            <div className="pricingTable-firstTable_table__header">Basic</div>
            <div className="pricingTable-firstTable_table__pricing">
              <span>$</span>9<span>/mo</span>
            </div>
            <ul className="pricingTable-firstTable_table__options">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <div className="pricingTable-firstTable_table__buttons">
              <button className="pricingTable-firstTable_table__button pricingTable-firstTable_table__viewProgram">
                <i className="fa fa-eye"></i> View Program
              </button>
              <button className="pricingTable-firstTable_table__button">
                <i className="fa fa-download"></i> Brochure
              </button>
            </div>
          </li>
          
          <li className="pricingTable-firstTable_table">
            <div className="pricingTable-firstTable_table__header">Premium</div>
            <div className="pricingTable-firstTable_table__pricing">
              <span>$</span>29<span>/mo</span>
            </div>
            <ul className="pricingTable-firstTable_table__options">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <div className="pricingTable-firstTable_table__buttons">
              <button className="pricingTable-firstTable_table__button pricingTable-firstTable_table__viewProgram">
                <i className="fa fa-eye"></i> View Program
              </button>
              <button className="pricingTable-firstTable_table__button">
                <i className="fa fa-download"></i> Brochure
              </button>
            </div>
          </li>
          
          <li className="pricingTable-firstTable_table">
            <div className="pricingTable-firstTable_table__header">Pro</div>
            <div className="pricingTable-firstTable_table__pricing">
              <span>$</span>49<span>/mo</span>
            </div>
            <ul className="pricingTable-firstTable_table__options">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <div className="pricingTable-firstTable_table__buttons">
              <button className="pricingTable-firstTable_table__button pricingTable-firstTable_table__viewProgram">
                <i className="fa fa-eye"></i> View Program
              </button>
              <button className="pricingTable-firstTable_table__button">
                <i className="fa fa-download"></i> Brochure
              </button>
            </div>
          </li>
        </ul>
      </section>



      <ReviewSection />

      {/* Mentors Section */}
      {/* <section className="mentors">
        <h2>Our Mentors</h2>
        <div className="mentor-grid">
          <div className="mentor-card">
            <img src="/public/images/mentor1.png" alt="Mentor 1" />
            <h4>Mentor Name 1</h4>
            <p>Specialization 1</p>
          </div>
          <div className="mentor-card">
            <img src="/public/images/mentor2.png" alt="Mentor 2" />
            <h4>Mentor Name 2</h4>
            <p>Specialization 2</p>
          </div>

        </div>
      </section> */}
      <Mentor/>

      <Footer/>

    </div>
  );
}
