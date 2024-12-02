// Marathon.js
import React from 'react';
import './MarathonClasses.css';

const MarathonClasses = () => {
  const navigateTo = (url) => {
      window.location.href = url; // Navigate to the given URL
  };

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
                <button className="marathon-button" onClick={() => navigateTo('/cocubes')}>
                    <span className="tick-icon1">✔</span> CoCubes
                </button>
                <button className="marathon-button" onClick={() => navigateTo('/elitmus')}>
                    <span className="tick-icon1">✔</span> eLitmus
                </button>
            </div>
            <h2>Company Specific</h2>
            <div className="marathon-buttons1">
                <button className="marathon-button" onClick={() => navigateTo('/tcs')}>
                    <span className="tick-icon">✔</span> TCS
                </button>
                <button className="marathon-button" onClick={() => navigateTo('/tcs-nqt')}>
                    <span className="tick-icon">✔</span> TCS NQT
                </button>
                <button className="marathon-button" onClick={() => navigateTo('/wipro')}>
                    <span className="tick-icon">✔</span> WIPRO
                </button>
            </div>
            <button className="back-button" onClick={() => navigateTo('/features')}>
                
            </button>
        </div>
    );
};

export default MarathonClasses;
