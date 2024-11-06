import React, { useEffect, useState } from 'react';
import './Mentor.css';

const mentors = [
  "Mentor Name 1",
  "Mentor Name 2",
  "Mentor Name 3",
  "Mentor Name 4",
  "Mentor Name 5",
  "Mentor Name 6",
  "Mentor Name 7",
  "Mentor Name 8",
  "Mentor Name 9",
  "Mentor Name 10",
];

const Mentor = () => {
  const [visibleMentors, setVisibleMentors] = useState([0, 1, 2]);
  const totalMentors = mentors.length;

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
    <section>
      <div className="our-mentors">
        <span>Our </span><span className="highlight">Mentors</span>
      </div>

      <section className="mentors">
        <div className="mentor-image">
          <img 
            src="/images/Mentor.png" // Replace with the correct path to your image
            alt="Student on laptop"
            className="hero-image"
          />
        </div>
        
        <div className="mentor-display">
  {visibleMentors.map((index, position) => (
    <div key={index} className={`mentor-card ${position === 0 ? 'exit' : ''}`}>
      <div className="mentor-details">
        <div className="mentor-name-box">{mentors[index]}</div> {/* Name box */}
        <div className="mentor-hello-box">Hello</div> {/* Hello box directly below the name */}
      </div>
      <div className="mentor-circle">M</div> {/* Circular element */}
    </div>
  ))}
</div>

      </section>
    </section>
  );
};

export default Mentor;
