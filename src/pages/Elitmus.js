import React from "react";
import "./Elitmus.css";
import { useNavigate } from "react-router-dom"; // React Router for navigation

const Elitmus = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="amcat-container1">
      {/* Back Button */}
      <button 
        className="back-button1" 
        onClick={() => navigate("/marathon-classes")}
      >
         Back to Marathon
      </button>

      <h1 className="amcat-title">Marathon Classes</h1>
      <div className="amcat-tabs">
        <button className="tab">AMCAT</button>
        <button className="tab ">CoCubes</button>
        <button className="tab active">eLitmus</button>
      </div>

      <h2 className="amcat-subtitle">eLitmus Previous Papers with Solutions: Syllabus</h2>
      <table className="amcat-table">
        <thead>
          <tr>
            <th>Sections</th>
            <th>NO. Of Questions</th>
            <th>Marks</th>
            <th>Percentile</th>
            <th>Negative Marking</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Problem Solving and Reasoning</td>
            <td>
            20 Questions
            </td>
            <td> 200 Marks</td>
            <td>35 – 90 marks = 75 – 95 percentile</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Quantitative Aptitude</td>
            <td>
            20 Questions
            </td>
            <td>
            200 Marks
            </td>
            <td>
            50 – 80 marks =75 – 95 percentile
            </td>
            <td>
                yes
            </td>
          </tr>
          <tr>
            <td>Verbal</td>
            <td>
            20 Questions
            </td>
            <td>200 Marks</td>
            <td>95 – 160 marks = 65 – 90 percentile</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>
            60 Questions
            </td>
            <td>600 Marks</td>
            <td>

            </td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>

      {/* <div className="amcat-important-details">
        <h3>Important Details:</h3>
        <ul>
          <li>✔️ There will be no negative marking.</li>
          <li>✔️ AMCAT Exam is Adaptive.</li>
          <li>✔️ A test report will be generated based on your performance in the exam.</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Elitmus;
