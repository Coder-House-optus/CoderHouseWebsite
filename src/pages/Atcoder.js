import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Atcoder.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const AtCoderProblems = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [level, setLevel] = useState("");
  const [contestType, setContestType] = useState("");
  const problemsPerPage = 30;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get(
          "https://kenkoooo.com/atcoder/resources/merged-problems.json"
        );
        setProblems(response.data);
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
      setLoading(false);
    };

    fetchProblems();
  }, []);

  // Regular expression to check if the title contains only English characters and common symbols
  const isEnglishTitle = (title) => /^[A-Za-z0-9\s.,!?'"()_-]*$/.test(title);

  // Filtering logic
  const filteredProblems = problems.filter((problem) => {
    return (
      isEnglishTitle(problem.title) && // Exclude problems with non-English titles
      (level === "" || problem.id.match(new RegExp(`${contestType}${level}$`, "i"))) &&
      (contestType === "" || problem.contest_id.includes(contestType))
    );
  });

  // Pagination logic
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem);
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);

  if (loading) return <div className="atcoder-loading">Loading problems...</div>;

  return (
    <div className="Atcodercover">
      <button className="back-button1" onClick={() => navigate('/coders-sheet')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <div className="atcoder-page-container"> {/* New wrapper div */}
        {/* Header */}
        <header className="atcoder-header">
          <h1>AtCoder Problems</h1>
          <p className="atcoder-description">
            Browse through AtCoder problems and practice coding with filters.
          </p>
        </header>

        {/* Filters */}
        <div className="atcoder-filters">
          <div className="atcoder-filter-group">
            <label>Problem Level:</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="">All</option>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
              <option value="e">E</option>
              <option value="f">F</option>
            </select>
          </div>

          <div className="atcoder-filter-group">
            <label>Contest Type:</label>
            <select value={contestType} onChange={(e) => setContestType(e.target.value)}>
              <option value="">All</option>
              <option value="abc">ABC</option>
              <option value="arc">ARC</option>
              <option value="agc">AGC</option>
            </select>
          </div>
        </div>

        {/* Problem List */}
        <div className="atcoder-problem-list">
          {currentProblems.length === 0 ? (
            <p className="atcoder-loading">No problems found for selected filters.</p>
          ) : (
            currentProblems.map((problem) => (
              <div key={problem.id} className="atcoder-problem-item">
                <a
                  href={`https://atcoder.jp/contests/${problem.contest_id}/tasks/${problem.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="atcoder-problem-link"
                >
                  {problem.title || "Untitled Problem"}
                </a>
                <span className="atcoder-problem-rating">
                  {problem.id.toUpperCase()}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="atcoder-pagination">
          <button
            className="atcoder-pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="atcoder-page-info">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            className="atcoder-pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AtCoderProblems;
