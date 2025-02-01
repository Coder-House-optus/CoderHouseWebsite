import React, { useEffect, useState } from "react";
import "./Leetcode.css";
import { useNavigate } from "react-router-dom";

const Leetcode = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ratingRange, setRatingRange] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(30);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://clist.by:443/api/v4/problem/?limit=500&resource=leetcode.com', {
          headers: {
            'Authorization': 'ApiKey hitesh1376:197e92d674d015dd80fb9520fb9230c1e6596815'
          }
        });
        const data = await response.json();
        if (data) {
          const formattedQuestions = data.objects.map((q) => ({
            id: q.id,
            title: q.name,
            slug: q.slug,
            rating: q.rating || 0,
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

  const getRatingClass = (rating) => {
    if (rating < 1000) return "easy";
    if (rating < 2000) return "medium";
    return "hard";
  };

  // Sort and filter questions
  const processQuestions = () => {
    let processed = [...questions];

    // Apply rating range filter
    if (ratingRange !== "all") {
      const [minRating, maxRating] = ratingRange.split("-").map(Number);
      processed = processed.filter(q => 
        q.rating >= minRating && q.rating <= maxRating
      );
    }

    // Apply sorting
    processed.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });

    return processed;
  };

  const filteredAndSortedQuestions = processQuestions();
  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = filteredAndSortedQuestions.slice(startIndex, startIndex + questionsPerPage);

  // Update total pages when filters/sort change
  useEffect(() => {
    setTotalPages(Math.ceil(filteredAndSortedQuestions.length / questionsPerPage));
    setCurrentPage(1); // Reset to first page when filters change
  }, [ratingRange, sortOrder, filteredAndSortedQuestions.length, questionsPerPage]);

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="leetcode-container">
      <button className="back-button1" onClick={() => navigate('/coders-sheet')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <div className="leetcode-wrapper">
        <h1 className="leetcode-title">LeetCode Questions</h1>
        <p className="lc-description">Explore coding challenges sorted by rating ranges</p>
        
        {/* Filters and Sort Section */}
        <div className="leetcode-filters">
          <div className="filter-section">
            <label className="filter-label">Rating Range</label>
            <select
              className="filter-select"
              value={ratingRange}
              onChange={(e) => setRatingRange(e.target.value)}
            >
              <option value="all">All Ratings</option>
              <option value="0-1000">0 - 1000</option>
              <option value="1000-2000">1000 - 2000</option>
              <option value="2000-3000">2000 - 3000</option>
              <option value="3000-4000">3000 - 4000</option>
            </select>
          </div>

          <div className="filter-section">
            <label className="filter-label">Sort Order</label>
            <select
              className="filter-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Rating: Low to High</option>
              <option value="desc">Rating: High to Low</option>
            </select>
          </div>
        </div>

        {/* Questions Count */}
        <div className="questions-count">
          Showing {filteredAndSortedQuestions.length} questions
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
                  <span className={`difficulty-badge ${getRatingClass(question.rating)}`}>
                    Rating: {question.rating}
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