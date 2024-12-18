import React, { useState } from 'react';
import './Notes.css';
import Navigation from "../components/Navigation";

const Notes = () => {
  const categories = [
    "C++", "Java", "HTML", "CSS", "JavaScript", "Python", 
    "SQL", "React", "Node.js", "Machine Learning", 
    "System Design", "Algorithms", "Data Structures", 
    "Operating Systems", "DBMS", "Networks", "AI", 
    "Deep Learning", "Kubernetes", "Cloud Computing"
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="notes-container">
      {/* Navbar with Search Bar */}
      <Navigation />
      <header className="navbar1">
        <div className="title-container">
          <div>
            <h1> Notes </h1>
            <p className="tagline">Explore notes for 20+ topics and enhance your learning journey</p>
          </div>
        </div>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for a course..." 
            className="search-bar" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </div>
      </header>

      {/* List of Notes */}
      <div className="notes-list">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <div key={index} className="note-item">
              <h2 className="category-title">{category}</h2>
              <p className="category-description">Explore notes on {category} to master the topic!</p>
            </div>
          ))
        ) : null}
      </div>

      {/* No results message */}
      {filteredCategories.length === 0 && (
        <div className="no-results">No matching courses found</div>
      )}
    </div>
  );
};

export default Notes;
