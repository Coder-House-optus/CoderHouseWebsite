import React from 'react';
import "./MentorshipModule.css";
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const  MentorshipModule = () => {
  const navigate = useNavigate();

  return (
    <div className="container2">
      {/* Back Button */}
      <button className="back-button1" onClick={() => navigate('/Features')}>
      Back to home
      </button>

      {/* Heading */}
      <h1 class="heading10">
        <span class="green-text">Mentorship Module:</span>
        <span class="black-text">Personalized Guidance for Student Growth</span>
      </h1>

      <p1 class="mentorpara">Welcome to the Mentorship Program, an initiative designed to provide one-on-one (1:1) guidance to students, fostering their personal, academic, and professional growth. This program connects students with experienced mentors who offer tailored support, ensuring that every individual achieves their fullest potential.</p1>
      {/* Stripes */}

      <h1 className="heading-mentor">Why Choose the Mentorship Program?</h1>

      <div class="mentorship-program">
        <p><strong>Gain direct access to industry professionals and domain experts.</strong>  
          By joining the mentorship program, you will have the opportunity to connect with experienced professionals who can provide valuable insights, guidance, and practical advice.
        </p>
        <p><strong>Receive personalized advice and feedback to address specific challenges.</strong>  
          Mentorship provides tailored support, ensuring that your individual career needs are addressed. You will receive feedback that helps you overcome obstacles and take the next step in your career.
        </p>
        <p><strong>Enhance your skills, confidence, and career prospects through guided learning.</strong>  
          With the help of your mentor, you will refine your skills, build your confidence, and improve your professional profile, increasing your chances of career growth and success.
        </p>
      </div>

      <h1 className="key-mentor">Key Features</h1>
            <div className="container10">
        <div className="box10 shadow">
          <p className="content1">2-hour sessions with expert mentors addressing all your 'Career As Coder' queries.</p>
        </div>
        <div className="box10 shadow">
          <p className="content1">Personalized 1:1 Sessions</p>
        </div>
        <div className="box10 shadow">
          <p className="content1">Goal-Oriented Guidance</p>
        </div>
        <div className="box10 shadow">
          <p className="content1">Expert Insights</p>
        </div>
        <div className="box10 shadow">
          <p className="content1">Flexible Scheduling</p>
        </div>
        <div className="box10 shadow">
          <p className="content1">Holistic Development</p>
        </div>
      </div>

      
      <h2>
        <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: 'black' }}></i>
        Coder House, Vijay Nagar, Jabalpur
      </h2>

      <div className="image-section2">
        <img
          className="rectangle-image2"
          src="/images/code3.png"
          alt="Rectangle 1"
        />
        <img
          className="rectangle-image2"
          src="/images/code5.png"
          alt="Rectangle 2"
        />
      </div>


    </div>
  );
};

export default MentorshipModule;
