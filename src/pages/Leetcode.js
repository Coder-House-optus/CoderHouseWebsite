import React, { useEffect, useState } from "react";
import "./Leetcode.css"; // Import the external CSS file

const Leetcode = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [difficulty, setDifficulty] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(30); // 30 questions per page
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://thingproxy.freeboard.io/fetch/https://leetcode.com/api/problems/all/"
        );
        const data = await response.json();

        if (data && data.stat_status_pairs) {
          const formattedQuestions = data.stat_status_pairs.map((q) => ({
            id: q.stat.question_id,
            title: q.stat.question__title,
            slug: q.stat.question__title_slug,
            difficulty: q.difficulty.level,
          }));

          setQuestions(formattedQuestions);
          setTotalPages(Math.ceil(formattedQuestions.length / questionsPerPage));
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
      setLoading(false);
    };

    fetchQuestions();
  }, []);

  const getDifficultyLabel = (level) => {
    if (level === 1) return "Easy";
    if (level === 2) return "Medium";
    if (level === 3) return "Hard";
    return "Unknown";
  };

  const getDifficultyClass = (level) => {
    if (level === 1) return "easy";
    if (level === 2) return "medium";
    if (level === 3) return "hard";
    return "unknown";
  };

  // Get the questions for the current page
  const filteredQuestions = questions.filter((q) => {
    const matchesDifficulty = difficulty === "all" || getDifficultyLabel(q.difficulty) === difficulty;
    return matchesDifficulty;
  });

  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = filteredQuestions.slice(startIndex, startIndex + questionsPerPage);

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="leetcode-container">
      <div className="leetcode-wrapper">
        <h1 className="leetcode-title">LeetCode Questions</h1>
        <p className="lc-description">Explore coding challenges and solve problems Easy , Medium , Hard Category</p>
        {/* Filters Section */}
        <div className="leetcode-filters">
          {/* Difficulty Filter */}
          <div className="filter-section">
            <label className="filter-label">Difficulty</label>
            <select
              className="filter-select"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Display Questions */}
        {loading ? (
          <p className="loading-text">Loading questions...</p>
        ) : (
          <>
            <div className="questions-list">
              {currentQuestions.map((question) => (
                <div key={question.id} className="question-card">
                  <a
                    href={`https://leetcode.com/problems/${question.slug}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="question-link"
                  >
                    {question.title}
                  </a>
                  <span className={`difficulty-badge ${getDifficultyClass(question.difficulty)}`}>
                    {getDifficultyLabel(question.difficulty)}
                  </span>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination-container">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="pagination-button"
              >
                Previous
              </button>
              <span className="pagination-info">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="pagination-button"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Leetcode;
