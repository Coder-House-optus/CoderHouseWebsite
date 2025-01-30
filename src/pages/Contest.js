import React, { useEffect, useState } from 'react';
import "./Contest.css";
import { useNavigate } from 'react-router-dom';

const Contest = () => {
  const navigate = useNavigate();
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch('https://clist.by/api/v4/contest/', {
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

  return (
    <div className="contest-container">
      <button className="nav-return-btn" onClick={() => navigate('/Features')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      
      <h1 className="contest-title">Contest Journey</h1>
      
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ 
            width: '3rem', 
            height: '3rem', 
            border: '2px solid #f3f3f3',
            borderTop: '2px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
      )}

      {error && (
        <div style={{
          backgroundColor: '#fee2e2',
          border: '1px solid #ef4444',
          borderRadius: '0.375rem',
          padding: '1rem',
          margin: '1rem',
          color: '#dc2626'
        }}>
          Error loading contests: {error}
        </div>
      )}

      {!loading && !error && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          padding: '1.5rem'
        }}>
          {contests.map((contest) => (
            <div key={contest.id} style={{
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 20px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              minHeight: '300px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 0px 30px';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 0px 20px';
            }}>
              <div style={{ 
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{ flex: '1' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#2d3748'
                  }}>{contest.event}</h3>
                  <div style={{ 
                    fontSize: '0.875rem',
                    color: '#4a5568',
                    marginBottom: '1rem'
                  }}>
                    Host: {contest.host}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p style={{ fontSize: '0.875rem' }}>
                      <strong>Duration:</strong>{' '}
                      {Math.round(contest.duration / 3600)} hours
                    </p>
                    <p style={{ fontSize: '0.875rem' }}>
                      <strong>Start:</strong>{' '}
                      {new Date(contest.start).toLocaleString()}
                    </p>
                    <p style={{ fontSize: '0.875rem' }}>
                      <strong>End:</strong>{' '}
                      {new Date(contest.end).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div style={{ 
                  marginTop: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <button 
                    onClick={() => window.open(contest.href, '_blank')}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#88C057',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.375rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      alignSelf: 'flex-start',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7ab04c'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#88C057'}
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
                      style={{
                        padding: '0.75rem 1rem',
                        backgroundColor: '#4299e1',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.375rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4299e1'}
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

      <div className='contest-upper'>
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