import React from 'react';
import './Mentor.css';

const mentorImages = [
  "/images/Our Mentors/Aditya raj.png",
  "/images/Our Mentors/Divyanshu singhal.png",
  "/images/Our Mentors/Hiya jain.png",
  "/images/Our Mentors/Sunny Kumar.png",
  "/images/Our Mentors/Abhay singh.png",
  "/images/Our Mentors/Akash tiwari.png",
  "/images/Our Mentors/Avinash JHA.png",
  "/images/Our Mentors/Divyanshi singh.png",
  "/images/Our Mentors/Enoch S SAM.png",
  "/images/Our Mentors/Piyush.png",
  "/images/Our Mentors/Prateek.png",
  "/images/Our Mentors/Prince yadav.png",
  "/images/Our Mentors/Sai Bargav N.png",
  "/images/Our Mentors/Samarth yadav.png",
  "/images/Our Mentors/Vishal choubey.png"
];

const Mentor = () => {
  return (
    <section className="mentor-section">
      <div className="mentor-title">
        <h2 className="mentors-heading fancy-title">
          Our <span className="highlight-title">Mentors</span>
        </h2>
      </div>


      <div className="scroll-wrapper">
        <div className="scrolling-track">
          {mentorImages.concat(mentorImages).map((image, idx) => (
            <div className="mentor-scroll-card" key={idx}>
              <img src={image} alt={`mentor${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
