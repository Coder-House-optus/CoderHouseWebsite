import React, { useEffect, useState } from 'react';
import './Mentor.css';

const mentorImages = [
  "/images/Our Mentors/Abhay singh.png",
  "/images/Our Mentors/Akash tiwari.png",
  "/images/Our Mentors/Avinash JHA.png",
  //"/images/Our Mentors/Hiya.png",
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
  const [visibleMentors, setVisibleMentors] = useState([0, 1, 2]);
  const totalMentors = mentorImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMentors((prev) => {
        const next = [
          (prev[0] + 1) % totalMentors,
          (prev[1] + 1) % totalMentors,
          (prev[2] + 1) % totalMentors
        ];
        return next;
      });
    }, 3000); // Change mentors every 3 seconds

    return () => clearInterval(interval);
  }, [totalMentors]);

  return (
    <section className="mentor-section">
      <div className="mentor-title">
      <h2 className="mentors-heading" >
          Our <span className="highlight">Mentors</span>
      </h2>
      </div>


      {/* Container for Image and Animated Cards */}
      <div className="mentor-container">
        {/* Static Left-Side Mentor Image */}
        <div className="mentor-image">
          <img 
            src="/images/Mentor.png" // Replace with the correct path to your image
            alt="Student on laptop"
            className="hero-image"
          />
        </div>

        {/* Right Side - Rotating Mentor Images */}
        <div className="right-mentor">
          {visibleMentors.map((index, position) => (
            <div 
              key={index} 
              className={`mentor-card ${position === 1 ? 'middle' : ''} ${position === 0 ? 'exit' : 'enter'}`}
            >
              <img
                src={mentorImages[index]}
                alt={`Mentor ${index + 1}`}
                className="mentor-image-animated"
              />
            </div>
          ))}
        </div>
      </div>

     
 
    </section>
  );
};

export default Mentor;
