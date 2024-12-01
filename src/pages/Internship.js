import React from "react";
import "./Internship.css";

const Internship = () => {
  return (
    <div className="internship-container">
      {/* Internship Title */}
      <h1 className="internship-title">Internship</h1>

      {/* Who Can Apply Section */}
      <div className="eligibility-section">
        <h2 className="section-title">Who Can Apply</h2>
        <p className="eligibility-item">
          ✔️ Students from{" "}
          <span className="highlight">[Relevant Streams: Engineering and Coding Lovers]</span>
        </p>
        <p className="eligibility-item">✔️ Passionate learners eager to gain real-world experience.</p>
      </div>

      {/* Internship Highlights Section */}
      <div className="highlights-section">
        <h2 className="section-title">Internship Highlights</h2>
        <div className="plus-design">
          {/* Top Row */}
          <div className="circle-box top">
            <div className="circle"></div>
            <h3 className="highlight-title">Practical Learning</h3>
            <p className="highlight-text">Work on live projects and enhance your skills.</p>
          </div>

          {/* Middle Row */}
          <div className="middle-row">
            <div className="circle-box left">
              <div className="circle"></div>
              <h3 className="highlight-title">Networking Opportunities</h3>
              <p className="highlight-text">Connect with Peers and Mentors.</p>
            </div>
            <div className="circle-box right">
              <div className="circle"></div>
              <h3 className="highlight-title">Certificate of Completion</h3>
              <p className="highlight-text">Add a valuable credential to your resume!</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="circle-box bottom">
            <div className="circle"></div>
            <h3 className="highlight-title">Guidance from Experts</h3>
            <p className="highlight-text">Learn from Industry Professionals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
