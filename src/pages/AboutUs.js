import React from "react";
import "./AboutUs.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const AboutUs = () => {
  const features = [
    "Hands-on Learning",
    "Expert Mentorship",
    "Flexible Learning",
    "Comprehensive Curriculum",
    "Vibrant Community",
    "Job-Ready Skills",
  ];

  const mentors = [
    { name: "Prabhakar Jain", role: "Founder" },
    { name: "Prateek Badkul", role: "Co Founder" },
    { name: "Sarah Chen", role: "Senior Mentor" },
    { name: "James Wilson", role: "Lead Instructor" },
    { name: "Maria Garcia", role: "Technical Advisor" },
  ];

  const techTeam = [
    { name: "Alex Kumar", role: "Tech Lead" },
    { name: "Lisa Park", role: "Senior Developer" },
    { name: "David Smith", role: "Backend Expert" },
    { name: "Emma Brown", role: "Frontend Lead" },
    { name: "Michael Wong", role: "DevOps Engineer" },
  ];

  const nonTechTeam = [
    { name: "Rachel Green", role: "Operations Head" },
    { name: "Tom Martinez", role: "Marketing Lead" },
    { name: "Sophie Taylor", role: "Student Success" },
    { name: "John Davies", role: "Content Manager" },
    { name: "Anna Kim", role: "Community Lead" },
  ];

  const TeamSection = ({ title, members }) => (
    <section className="team-section" >
      <h2>{title}</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="team-card">
            <div className="card-header">
              <div className="profile-image" />
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
    <div className="about-us-container">
      {/* Navigation */}
      <Navigation />

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h1>About Us</h1>
            <p>
              Coder House is a dynamic learning platform that empowers
              individuals to master coding through hands-on courses, expert
              guidance, and a vibrant community.
            </p>
          </div>

          <div className="about-content">
            <div className="about-image">
              <div className="image-containerss">
                <img
                  src="/api/placeholder/400/400"
                  alt="Coder illustration"
                />
              </div>
            </div>

            <div className="about-features">
              <h2>Unlock Your Potential, Code Your Future</h2>
              <p>Here's why Coder House is the best:</p>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    {feature}
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
          <div className="content-wrapper">
            <div className="text-content">
              <h2>Why Choose CODER HOUSE</h2>
              <ul className="benefits-list">
                <li>
                  <span className="check-mark">✓</span>
                  <span>147% Average Hike in career growth</span>
                </li>
                <li>
                  <span className="check-mark">✓</span>
                  <span>1000+ Careers Transformed with real-world skills</span>
                </li>
                <li>
                  <span className="check-mark">✓</span>
                  <span>50+ Experienced Mentors guiding you to success</span>
                </li>
              </ul>
            </div>
            <div className="image-content">
              <div className="placeholder-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <TeamSection title="Mentors" members={mentors} />
      <TeamSection title="Tech Team" members={techTeam} />
      <TeamSection title="Non-Tech Team" members={nonTechTeam} />

      {/* CTA Section */}
      <div className="about-us-section cta-section" style={{ paddingTop: "100px", paddingBottom: "280px" }}>
        <div className="cta-content">
          <p>
            Unlock your potential and shape your future with Coder House. Join us today to start your learning journey!
          </p>
          <button className="cta-button">Join Us Today!</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
