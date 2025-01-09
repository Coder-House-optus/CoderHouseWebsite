import React from 'react';
import "./Contest.css";
import { useNavigate } from 'react-router-dom';

const Contest = () => {
  const navigate = useNavigate();

  return (
    <div className="contest-container">
      <button className="nav-return-btn" onClick={() => navigate('/Features')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <h1 className="contest-title">Contest Journey</h1>
      <div className='contest-upper'>
      
        <div>
          <h2 className="workflow-list1">Process and Workflow</h2>
          
          <h3>1. Contest <span>Organization</span> </h3>
<ul className="workflow-list">
  <li className="workflow-item"><strong>Frequency:</strong> Every two weeks (alternative weekly basis)</li>
  <li className="workflow-item"><strong>Platform:</strong> Host the contest on a widely used platform (e.g., Codeforces, HackerRank)</li>
  <li className="workflow-item"><strong>Contest Structure:</strong>
    <ul className="workflow-list">
      <li className="workflow-item">4–6 problems ranging from beginner to advanced levels</li>
      <li className="workflow-item">Duration: 2–3 hours</li>
      <li className="workflow-item">Focus: Real-world problem-solving, algorithms, and data structures</li>
    </ul>
  </li>
</ul>

<h3>2. Explanation <span>Videos</span></h3>
<ul className="workflow-list">
  <li className="workflow-item"><strong>Platform:</strong> YouTube channel dedicated to the contest series</li>
  <li className="workflow-item"><strong>Content:</strong>
    <ul className="workflow-list">
      <li className="workflow-item">Step-by-step explanation of each problem</li>
      <li className="workflow-item">Highlight optimal solutions, common mistakes, and alternative approaches</li>
      <li className="workflow-item">Encourage students to learn and improve</li>
    </ul>
  </li>
  <li className="workflow-item"><strong>Release Timing:</strong> Videos are uploaded within 3 days of the contest</li>
</ul>

<h3>3. Prizes and <span>Incentives</span></h3>
<ul className="workflow-list">
  <li className="workflow-item"><strong>Prizes:</strong>
    <ul className="workflow-list">
      <li className="workflow-item">Cash prizes or gift vouchers for the top 3 winners</li>
      <li className="workflow-item">Certificates of achievement for top 10 participants</li>
    </ul>
  </li>
  <li className="workflow-item"><strong>Long-Term Rewards:</strong>
    <ul className="workflow-list">
      <li className="workflow-item">Leaderboard maintained for consistent performers over multiple contests</li>
      <li className="workflow-item">Grand prizes (e.g., gadgets, internships) for the best performers at the end of the semester/year</li>
    </ul>
  </li>
</ul>

<h3>4. Engagement and <span>Outreach</span></h3>
<ul className="workflow-list">
  <li className="workflow-item"><strong>Social Media Promotion:</strong> Promote contests and winners on platforms like Instagram, LinkedIn, and college forums</li>
  <li className="workflow-item"><strong>Community Building:</strong> Create a Discord/Slack group for discussions, queries, and networking</li>
  <li className="workflow-item"><strong>Workshops:</strong> Organize pre-contest workshops for beginners to help them participate confidently</li>
</ul>
</div>
<div>
  <h2 className="workflow-list1">Why Students Should Join the Contest</h2>
  
  <h3>1. Skill <span>Development</span></h3>
  <ul className="workflow-list">
    <li className="workflow-item"><strong>Hands-On Learning:</strong> Solve real-world problems and improve algorithmic thinking</li>
    <li className="workflow-item"><strong>Coding Proficiency:</strong> Enhance coding skills in competitive environments</li>
  </ul>

  <h3>2. Career <span>Opportunities</span></h3>
  <ul className="workflow-list">
    <li className="workflow-item"><strong>Portfolio Building:</strong> Showcase achievements on platforms like LinkedIn or GitHub</li>
    <li className="workflow-item"><strong>Recognition:</strong> Stand out during placements and internships</li>
  </ul>

  <h3>3. Networking</h3>
  <ul className="workflow-list">
    <li className="workflow-item"><strong>Peer Interaction:</strong> Collaborate and compete with like-minded peers</li>
    <li className="workflow-item"><strong>Mentorship:</strong> Learn from experts through explanation videos and workshops</li>
  </ul>

  <h3>4. Exciting <span>Prizes</span></h3>
  <ul className="workflow-list">
    <li className="workflow-item"><strong>Immediate Rewards:</strong> Cash prizes, gift vouchers, and certificates</li>
    <li className="workflow-item"><strong>Long-Term Incentives:</strong> Leaderboard rankings and grand prizes</li>
  </ul>

  <h3>5. Personalized <span>Feedback</span></h3>
  <ul className="workflow-list">Learn from explanation videos to improve weak areas and gain new perspectives on problem-solving</ul>
</div>

        <div>
          <h2 className="workflow-list1" >Why Join Our Organization?</h2>
          
          <div>
  <h3>1. Expertise</h3>
  <ul className="workflow-list">
    <li className="workflow-item">Proven track record of organizing high-quality contests</li>
    <li className="workflow-item">Team of experienced problem setters and mentors</li>
  </ul>

  <h3>2. Learning-Focused <span>Approach</span></h3>
  <ul className="workflow-list">
    <li className="workflow-item">Emphasis on learning through explanation videos and workshops</li>
    <li className="workflow-item">Opportunities to grow from beginner to advanced levels</li>
  </ul>

  <h3>3. Inclusive <span>Community</span></h3>
  <ul className="workflow-list">
    <li className="workflow-item">Build a thriving community (Telegram, Discord, WhatsApp) of coders in the college</li>
    <li className="workflow-item">Opportunities to interact with industry experts through webinars or special events</li>
  </ul>

  <h3>4. Transparent and <span>Fair</span></h3>
  <ul className="workflow-list">
    <li className="workflow-item">Fair evaluation process with transparent ranking and scoring</li>
    <li className="workflow-item">Feedback loops to improve contest quality based on student inputs</li>
  </ul>
</div>
</div>
        <div>
          <h2 className="workflow-list1">Our Features</h2>
        </div>
      </div>
      
      <div className="main-layout">
        <div className="cards-container">
          <div className="info-card">
            <div className="card-contents">
              <h3>In-house Coding Challenges</h3>
              <p>Structured programs for skill enhancement.</p>
            </div>
            <img src="../images/contest1.png" alt="Coding challenge icon" />
          </div>
          <div className="info-card">
            <div className="card-contents">
              <h3>National & International Competitions</h3>
              <p>Visual guides and flowcharts for contest prep.</p>
            </div>
            <img src="../images/contest2.png" alt="Competition icon" />
          </div>
        </div>

        <div className="visual-section">
          <img src="/images/code1.png" alt="Contest Illustration" className="feature-image" />
        </div>
      </div>
      
    </div>
  );
};

export default Contest;
