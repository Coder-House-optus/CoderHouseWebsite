import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import "./Notes.css";
import Navigation from "../components/Navigation";

const Notes = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const categories = [
    "C++", "Java", "HTML", "CSS", "JavaScript", "Python",
    "SQL", "React", "Node.js", "Machine Learning",
    "System Design", "MongoDB", "Data Structures",
    "C Programming", "DBMS", "Cybersecurity", "AI",
    "Deep Learning", "Full Stack Development", "Cloud Computing",
    "Android App Development", "Angular", "AWS", "Bootstrap", 
    "C# Programming", "Deveops", "Django", "Express.js", 
    "Flutter Development", "Git and Github", "IOS App Development",
    "Kotlin", "Machine Learning", "MERN Stack Developer",
    "MYSQL", "PHP", "PostgreSQL", "RDBMS", "Ruby on Rails", 
    "Spring Boot", "Swift", "Tailwind", "UI & UX",
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (category) => {
    const formattedCategory = category.replace(/\s+/g, '_');
    navigate(`/notes/category/${formattedCategory}`);
  };

  return (
    <div className="notes-container">
      <Navigation />
      <header className="navbar1">
        <div className="title-container">
          <div>
            <h1>Code & Beyond</h1>
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