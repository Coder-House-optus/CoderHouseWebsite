import React, { useEffect, useState } from 'react';
import "./Contest.css";
import { useNavigate } from 'react-router-dom';

const Contest = () => {
  const navigate = useNavigate();
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch('https://clist.by:443/api/v4/contest/?upcoming=true`&limit=48', {
          headers: {
            'Authorization': 'ApiKey hitesh1376:197e92d674d015dd80fb9520fb9230c1e6596815'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch contests');
        }

        const data = await response.json();
        setContests(data.objects || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  const filteredContests = contests.filter(contest =>
    contest.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contest.host.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contest-container">
      <button className="nav-return-btn" onClick={() => navigate('/Features')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <h1 className="contest-title">Contest Journey</h1>

      <div className="search-container">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search contests by name or host..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      {loading && <div className="loader"></div>}
      {error && <div className="error-message">Error loading contests: {error}</div>}

      <div className="contests-section">
        {!loading && !error && (
          <>
            {filteredContests.length === 0 ? (
              <div className="no-results">No contests found matching your search.</div>
            ) : (
              <div className="contests-grid">
                {filteredContests.map((contest) => (
                  <div key={contest.id} className="contest-card">
                    <div className="contest-card-content">
                      <div className="contest-card-header">
                        <h3 className="contest-name">{contest.event}</h3>
                        <div className="contest-host">Host: {contest.host}</div>
                      </div>
                      <div className="contest-details">
                        <p>
                          <strong>Duration:</strong>{' '}
                          {Math.round(contest.duration / 3600)} hours
                        </p>
                        <p>
                          <strong>Start:</strong>{' '}
                          {new Date(contest.start).toLocaleString()}
                        </p>
                        <p>
                          <strong>End:</strong>{' '}
                          {new Date(contest.end).toLocaleString()}
                        </p>
                      </div>
                      <div className="contest-actions">
                        <button
                          onClick={() => window.open(contest.href, '_blank')}
                          className="view-contest-btn primary"
                        >
                          View Contest
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                        {contest.url && (
                          <button
                            onClick={() => window.open(contest.url, '_blank')}
                            className="view-contest-btn secondary"
                          >
                            View Contest
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
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