import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Codeforces.css';

const Codeforces = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [ratingRange, setRatingRange] = useState([800, 2000]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const fetchProblems = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://codeforces.com/api/problemset.problems');
        const allProblems = res.data.result.problems;

        const filteredProblems = allProblems.filter(
          (problem) => problem.rating >= ratingRange[0] && problem.rating <= ratingRange[1]
        );

        const taggedProblems = selectedTag
          ? filteredProblems.filter((problem) => problem.tags.includes(selectedTag))
          : filteredProblems;

        const problemsPerPage = 20;
        const totalPages = Math.ceil(taggedProblems.length / problemsPerPage);
        setTotalPages(totalPages);

        const startIndex = (page - 1) * problemsPerPage;
        const endIndex = page * problemsPerPage;
        setProblems(taggedProblems.slice(startIndex, endIndex));
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
      setLoading(false);
    };

    fetchProblems();
  }, [ratingRange, selectedTag, page]);

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
    setPage(1);
  };

  const handleRatingChange = (event) => {
    const [min, max] = event.target.value.split('-');
    setRatingRange([parseInt(min), parseInt(max)]);
    setPage(1);
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="CFpage">
    <div className="cf-page">
      <div className="cf-header">
        <h1>Codeforces Problem Set</h1>
        <p className="cf-description">Explore coding challenges and solve problems with ratings between 800 and 2000!</p>
      </div>

      <div className="cf-filters">
        <div className="cf-filter-group">
          <label>Rating:</label>
          <select onChange={handleRatingChange} value={`${ratingRange[0]}-${ratingRange[1]}`}>
            <option value="800-1000">800 - 1000</option>
            <option value="1000-1500">1000 - 1500</option>
            <option value="1500-2000">1500 - 2000</option>
          </select>
        </div>

        <div className="cf-filter-group">
          <label>Topic:</label>
          <select onChange={handleTagChange} value={selectedTag}>
            <option value="">All Topics</option>
            <option value="dp">Dynamic Programming</option>
            <option value="graph">Graph Theory</option>
            <option value="greedy">Greedy</option>
            <option value="sortings">Sorting</option>
            {/* Add more tags here */}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="cf-loading">Loading problems...</div>
      ) : (
        <div className="cf-problem-list">
          <div className='cff'>
            {problems.map((problem) => (
              <li key={problem.contestId + problem.index} className="cf-problem-item">
                <a href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`} target="_blank" rel="noopener noreferrer" className="cf-problem-link">
                  {problem.name}
                </a>
                <span className="cf-problem-rating">Rating: {problem.rating}</span>
              </li>
            ))}
          </div>

          <div className="cf-pagination">
            <button disabled={page === 1} onClick={() => changePage(page - 1)} className="cf-pagination-btn">
              Previous
            </button>
            <span className="cf-page-info">
              Page {page} of {totalPages}
            </span>
            <button disabled={page === totalPages} onClick={() => changePage(page + 1)} className="cf-pagination-btn">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Codeforces;
