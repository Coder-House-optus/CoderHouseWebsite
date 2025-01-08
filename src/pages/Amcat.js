import React from "react";
import "./Amcat.css";
import { useNavigate } from "react-router-dom"; // React Router for navigation

const Amcat = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="amcat-container">
      {/* Back Button */}
      <button 
        className="back-button1" 
        onClick={() => navigate("/marathon-classes")}
      >
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
      </button>

      <h1 className="amcat-title">Marathon Classes</h1>
      <div className="amcat-tabs">
        <button className="tab active">AMCAT</button>
        <button className="tab">CoCubes</button>
        <button className="tab">eLitmus</button>
      </div>

      <h2 className="amcat-subtitle">AMCAT Model Paper Overview</h2>
      <table className="amcat-table">
        <thead>
          <tr>
            <th>AMCAT Sample Test</th>
            <th>Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Compulsory Rounds</td>
            <td>
              <ul>
                <li>English</li>
                <li>Quantitative Ability (Advanced)</li>
                <li>Logical Ability</li>
                <li>AMPI (Personality)</li>
                <li>Information Gathering and Synthesis (Vary from Candidate to Candidate)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Optional Rounds (For CS/IT trade)</td>
            <td>
              <ul>
                <li>Automata Fix</li>
                <li>Computer Science</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Total Ques</td>
            <td>145 Ques (Compulsory + Optional)</td>
          </tr>
          <tr>
            <td>Total Time</td>
            <td>101 mins (Compulsory + Optional)</td>
          </tr>
          <tr>
            <td>Negative Marking</td>
            <td>NO</td>
          </tr>
        </tbody>
      </table>

      <div className="amcat-important-details1">
      {/* <h3 className="important-details-title">Important Details:</h3> */}
        <ul>
        <li className="important-details">Important Details:</li>
          <li>✔️ There will be no negative marking.</li>
          <li>✔️ AMCAT Exam is Adaptive.</li>
          <li>✔️ A test report will be generated based on your performance in the exam.</li>
        </ul>
      </div>
    </div>
  );
};

export default Amcat;
