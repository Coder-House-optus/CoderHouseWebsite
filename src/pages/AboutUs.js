import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleJoinUsClick = () => {
    navigate("/"); // Navigate to the Home page
    setTimeout(() => {
      const formSection = document.getElementById("form-section");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure the page is loaded
  };


  
  
  const features = [
    "Hands-on Learning",
    "Expert Mentorship",
    "Flexible Learning",
    "Broad Curriculum",
    "Vibrant Community",
    "JobReady Skills",
  ];

  const mentors = [
    { name: "Yashpal Puri", role: "Corporate Trainer ", image: '../images/Ambassador/image12.jpg' },
    { name: "Aditya Raj", role: "ICPC Amritapuri Regionalist Rank 82", image: '../images/Ambassador/image1.jpg' },
    { name: "Hiya Jain", role: "Competitive Programmer", image: '../images/Ambassador/image5.png' },
    { name: "Sunny Kumar", role: "Specialist at Codeforces Knight", image: '../images/Ambassador/image9.jpg' },
    { name: "Divyanshu Kumar Singhal", role: "Infosys SP Programmer", image: '../images/Ambassador/image7.jpg' },
  ];

  const techTeam = [
    { name: "Aastha Purey", role: "Full Stack Developer", image: '../images/Ambassador/AasthaPurey.jpg' },
    { name: "Hitesh Sharma", role: "Full Stack Developer", image: '../images/Ambassador/image10.jpg' },
    { name: "Ishika Raj", role: "Frontend / Backend", image: '../images/Ambassador/ishika.jpg' },
    { name: "Prakhar Pandey", role: "Android Developer", image: '../images/Ambassador/image2.png' },
    { name: "Aanchal Agarwal", role: "Graphic Designer", image: '../images/Ambassador/image14.jpg' },
  ];

  

  const SupportingTeam = [
    { name: "Khushi Shrivastava", role: "Centre Growth Associate", image: '../images/Ambassador/image8.jpg' },
    { name: "Shruti Singour", role: "Academic Associate", image: '../images/Ambassador/image6.jpg' },
    { name: "Nandini Patel", role: "Academic and Career Counsellor", image: '../images/Ambassador/image11.jpg' },
    { name: "Ansh Kashyup", role: "Career Development Specialist", image: '../images/Ambassador/dummy1.jpg' },
    { name: "Harshita Thakkar", role: "Learning and Development Specialist", image: '../images/Ambassador/dummy2.jpg' },
  ];
  const TeamSection = ({ title, members, isSupporting = false }) => (
    <section className={`team-section ${isSupporting ? 'supporting-team-section' : ''}`}>
      <h2>{title}</h2>
      <div className={`team-grid ${isSupporting ? 'supporting-team-grid' : ''}`}>
        {members.map((member, index) => (
          <div key={index} className="team-card">
            <div className="card-header">
              <div className="profile-image" />
              <img alt="" src={member.image} className="profile-image"></img>
            </div>
            <div className="card-content">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <Navigation />
      <div className="main-container">
        {/* About Section */}
        <section className="about-section">
  <div className="about-container">
    <div className="about-header">
      <h1>Our Story</h1>
      <p className="about-header-text">
        At Coder House, we believe in empowering young women to break boundaries in tech, one code at a time. Join a community of passionate learners and experts, and shape your future with the power of coding.
      </p>
    </div>

    <div className="about-content">
      <div className="about-image">
        <img src="../images/aboutuslaptopgirl1.jpg" alt="Girl coding on laptop" />
      </div>

      <div className="about-features">
        <h2>Unlock Your Potential, Code Your Future</h2>
        <p className="features-intro">Here’s why Coder House is the best choice for you:</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span className="feature-text">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Why Choose Section */}
        <section className="why-choose-section">
  <div className="section-container">
    <div className="why-choose-header">
      <h2>Why Choose <span className="highlight">CODER HOUSE</span></h2>
      <p className="subheader-text">
        Empowering you to build a successful career with real-world skills and mentorship.
      </p>
    </div>

    <div className="content-wrapper">
      <div className="text-content">
        <p className="intro-text">
          Join a community of passionate learners, guided by experts, and unlock your true potential:
        </p>
        <ul className="benefits-list">
          <li>
            <span className="check-mark">✓</span>
            <span className="feature-text"><strong>147% Average Career Growth</strong> in just months!</span>
          </li>
          <li>
            <span className="check-mark">✓</span>
            <span className="feature-text"><strong>1000+ Careers Transformed</strong> with industry-focused skills</span>
          </li>
          <li>
            <span className="check-mark">✓</span>
            <span className="feature-text"><strong>50+ Experienced Mentors</strong> to guide you every step of the way</span>
          </li>
          <li>
            <span className="check-mark">✓</span>
            <span className="feature-text"><strong>Comprehensive Courses</strong> covering essential tech skills</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


        {/* We Give Back Section */}
        <section className="give-back-section">
          <div className="section-content">
            <h2>We Give Back</h2>
            <p>
              At Coder House, We believe in making education accessible to all.
              Our mission is to uplift students in Tier 2 and Tier 3 cities by providing them
              with high-quality coding education, empowering them to unlock new career
              opportunities and build a better future. For students in Tier 1 cities, we offer
              additional support to help them refine their skills, advance their careeers and stay
              ahead in the ever-evolving tech landscape. We're dedicated to creating a level playing
              field ensuring every student has the chance to suceed, no matter where they're from.
            </p>
          </div>
        </section>

        {/* Team Sections */}
        <TeamSection title="Mentors" members={mentors} />
        <TeamSection title="Tech Team" members={techTeam} />
        <TeamSection title="Supporting Team" members={SupportingTeam} isSupporting={true} />
      </div>

      <section className="cta-section">
        <div className="cta-content">
          <p className="cta-heading">
            Unlock your potential and shape your future with Coder House. <br />
            Join us today to start your learning today!
          </p>
          <button className="cta-button" onClick={handleJoinUsClick}>Join Us Today!</button>
        </div>
      </section>
      
      <div class="contact-container" id="contact-section">
  <h2 class="contact-heading-main"><span class="contact-heading-highlight">Contact</span> & Join Together</h2>
  <p class="contact-subtext-info">Have questions? Get in touch with us for any inquiries or support.</p>
  <div class="contact-cards-wrapper" >
    <div class="contact-card-box">
      <span class="contact-icon-style phone-icon">📞</span>
      <div class="contact-text-block">
        <h3 class="contact-title">Call Us</h3>
        <p class="contact-detail"> +91 9926865740</p>
      </div>
    </div>

    <div class="contact-card-box" >
      <span class="contact-icon-style email-icon">✉️</span>
      <div class="contact-text-block">
        <h3 class="contact-title">Mail Address</h3>
        <p class="contact-detail">coderhouseoptus@gmail.com</p>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </>
  );
};

export default AboutUs;