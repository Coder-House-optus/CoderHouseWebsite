import React, { useState } from "react";
import "./Notes.css";
import Navigation from "../components/Navigation";

const Notes = () => {
  const categories = [
    "C++", "Java", "HTML", "CSS", "JavaScript", "Python",
    "SQL", "React", "Node.js", "Machine Learning",
    "System Design", "MongoDB", "Data Structures",
    "C Programming", "DBMS", "Cybersecurity", "AI",
    "Deep Learning", "Full Stack Development", "Cloud Computing",
    "Android App Development","Angular","AWS","Bootstrap","C Programming",
    "C# Programming","Deveops","Django","Express.js","Flutter Development",
    "Git and Github","IOS App Development","Kotlin","Machine Learning","MERN Stack Developer",
    "MYSQL","PHP","PostgreSQL","RDBMS","Ruby on Rails","Spring Boot","Swift","Tailwind","UI & UX",
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle card click and redirect to the image
  const handleCardClick = (category) => {
    const imagePath = `/images/LearningOfferings/${category.replace(/\s+/g, "_")}.jpg`; // Replace spaces with underscores if needed
    window.location.href = imagePath; // Redirect to the image
  };

  return (
    <div className="notes-container">
      {/* Navbar with Search Bar */}
      <Navigation />
      <header className="navbar1">
        <div className="title-container">
          <div>
            <h1> Code & Beyond </h1>
            <h1>"Explore, Master, and Innovate"</h1>
            <p className="tagline">Discover, Learn, and Master 20+ Topics</p>
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
            <div
              key={index}
              className="note-item"
              onClick={() => handleCardClick(category)}
            >
              <h2 className="category-title">{category}</h2>
              <p className="category-description">Explore more on {category}!</p>
            </div>
          ))
        ) : (
          <div className="no-results">No matching courses found</div>
        )}
      </div>
    </div>
  );
};

export default Notes;
