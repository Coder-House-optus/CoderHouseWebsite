import React from 'react';
import './MarathonClasses.css';

const MarathonClasses = () => {
  const navigateTo = (url) => {
    window.location.href = url; // Navigate to the given URL
  };

  const openDoc = (url) => {
    window.open(url, '_blank'); // Open document in a new tab
  };

  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSd12VNW9dqxsHnH13R7JFrug_guszXURRbW4dMc3HmdGHlG5w/viewform?usp=sharing";

  const companyDocs = [
    { name: "TCS", link: "https://docs.google.com/document/d/14wk4V0X0CbYZjSiEks2hrkmcIBRUBdwSDOQTSxfyEZI/edit?tab=t.0" },
    { name: "TCS NQT", link: "https://docs.google.com/document/d/187up3ub6fP9ePT973N8pnFpGfY0aoxuKEQk7Rwptnjw/edit?tab=t.0" },
    { name: "WIPRO", link: "https://docs.google.com/document/d/1IIoC3AAbyGw1GrtP1LLuXBy1q2jxDbgwQtCxd6XIh6w/edit?tab=t.0" },
    { name: "Tech Mahindra", link: "https://docs.google.com/document/d/1fiyZRtd8ZRtFO1kgNBjbgr8Dva7i6tmwxdDXFn6RM9w/edit?tab=t.0" },
    { name: "Accenture", link: "https://docs.google.com/document/d/1XHBCgvHNLH8GkL4G8lkyVsQbPm-r290ykPSNSt7kIJU/edit?tab=t.0" },
    { name: "Capgemini", link: "https://docs.google.com/document/d/1MJOnI_goA5m9sG7mMS7h6BigE8iloPuMWP-7-5ilKQ0/edit?tab=t.0" },
    { name: "Cognizant", link: "https://docs.google.com/document/d/1BfVQhNb_ICQfxrv-2yL091oDtGShJywZ1MvoKTVRJpQ/edit?tab=t.0" },
    { name: "Infosys", link: "https://docs.google.com/document/d/1YlIjdy1uZR1RuhIYU3oz9YXGy-oPfC8fZTox6PYJBo4/edit?tab=t.0#heading=h.hcwyy4lc8uv6" },
  ];

  return (
    <div className="marathon-container">
      <button onClick={() => navigateTo('/Features')} className="back-button1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <h1 className='marathonHeader'>Marathon Classes</h1>
      <div className="marathon-buttons1">
        <button className="marathon-button1" onClick={() => navigateTo('/Amcat')}>
          <span className="tick-icon1">✔</span> AMCAT
        </button>
        <button className="marathon-button1" onClick={() => navigateTo('/Cocubes')}>
          <span className="tick-icon1">✔</span> CoCubes
        </button>
        <button className="marathon-button1" onClick={() => navigateTo('/Elitmus')}>
          <span className="tick-icon1">✔</span> eLitmus
        </button>
      </div>
      <h2 className="company-specific">Company Specific</h2>
      <div className="marathon-buttons-grid">
        {companyDocs.map((doc, index) => (
          <div key={index} className="marathon-card">
            <h3 className="marathon-doc-title">{doc.name}</h3>
            <div className="marathon-buttons-container">
              <button
                className="marathon-doc-button"
                onClick={() => openDoc(doc.link)}
              >
                Open Document
              </button>
              <button
  className="marathon-doc-button"
  onClick={() => openDoc('https://docs.google.com/forms/d/e/1FAIpQLSd12VNW9dqxsHnH13R7JFrug_guszXURRbW4dMc3HmdGHlG5w/viewform')}
>
  Join Us!
</button>

            </div>
          </div>        
        ))}
      </div>
    </div>
  );
};

export default MarathonClasses;
