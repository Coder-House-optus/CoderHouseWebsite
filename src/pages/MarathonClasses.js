import React from 'react';
import './MarathonClasses.css';

const MarathonClasses = () => {
  const navigateTo = (url) => {
    window.location.href = url; // Navigate to the given URL
  };

  const openDoc = (url) => {
    window.open(url, '_blank'); // Open document in a new tab
  };

  const companyDocs = [
    { name: "TCS", link: "https://example.com/tcs-doc" },
    { name: "TCS NQT", link: "https://example.com/tcs-nqt-doc" },
    { name: "WIPRO", link: "https://example.com/wipro-doc" },
    { name: "Tech Mahindra", link: "https://example.com/tech-mahindra-doc" },
    { name: "Accenture", link: "https://example.com/accenture-doc" },
    { name: "Capgemini", link: "https://example.com/capgemini-doc" },
    { name: "Cognizant", link: "https://example.com/cognizant-doc" },
    { name: "TCS CodeVita", link: "https://example.com/tcs-codevita-doc" },
  ];


  return (
    <div className="marathon-container">
      <button onClick={() => navigateTo('/Features')} className="back-button1">
        Back to Feature
      </button>
      <h1>Marathon Classes</h1>
      <div className="marathon-buttons">
        <button className="marathon-button" onClick={() => navigateTo('/Amcat')}>
          <span className="tick-icon1">✔</span> AMCAT
        </button>
        <button className="marathon-button" onClick={() => navigateTo('/Cocubes')}>
          <span className="tick-icon1">✔</span> CoCubes
        </button>
        <button className="marathon-button" onClick={() => navigateTo('/Elitmus')}>
          <span className="tick-icon1">✔</span> eLitmus
        </button>
      </div>
      <h2>Company Specific</h2>
      <div className="marathon-buttons-grid">
        {companyDocs.map((doc, index) => (
          <div key={index} className="marathon-card">
            <h3>{doc.name}</h3>
            <button
              className="marathon-doc-button"
              onClick={() => openDoc(doc.link)}
            >
              Open Document
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarathonClasses;