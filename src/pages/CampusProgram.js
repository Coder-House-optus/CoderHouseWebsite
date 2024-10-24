import React, { useState } from 'react';
import './CampusProgram.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CampusProgram = () => {
  // Extended program data with 18 programs
  const programsData = [
    { name: "C++ Programming", symbol: "💻", description: "Master the fundamentals of C++ programming, including object-oriented design, data structures, and algorithms.", duration: "6 months", cost: "$700" },
    { name: "Web Development", symbol: "🌐", description: "Learn to create responsive websites using HTML, CSS, JavaScript, and frameworks like React and Angular.", duration: "5 months", cost: "$800" },
    { name: "Machine Learning", symbol: "🤖", description: "Explore the world of machine learning, data science, and neural networks using Python and TensorFlow.", duration: "4 months", cost: "$900" },
    { name: "Artificial Intelligence", symbol: "🧠", description: "Dive into AI concepts, natural language processing, and AI ethics with practical projects and real-world applications.", duration: "5 months", cost: "$1000" },
    { name: "Data Structures & Algorithms", symbol: "🧮", description: "Sharpen your algorithmic thinking with an in-depth study of sorting, searching, and data organization techniques.", duration: "4 months", cost: "$750" },
    { name: "Mobile App Development", symbol: "📱", description: "Build native and cross-platform mobile apps using React Native, Flutter, and Kotlin.", duration: "6 months", cost: "$850" },
    { name: "Cybersecurity", symbol: "🔐", description: "Understand the principles of security and encryption, and learn how to protect systems from cyber threats.", duration: "5 months", cost: "$950" },
    { name: "Blockchain Development", symbol: "🔗", description: "Learn the core concepts of blockchain, decentralized applications (DApps), and smart contracts with Solidity.", duration: "5 months", cost: "$1100" },
    { name: "Cloud Computing", symbol: "☁️", description: "Master cloud services, including AWS, Azure, and Google Cloud, to deploy, manage, and scale applications.", duration: "6 months", cost: "$1000" },
    { name: "Python Programming", symbol: "🐍", description: "Get started with Python, one of the most versatile and in-demand programming languages in the world.", duration: "3 months", cost: "$600" },
    { name: "Game Development", symbol: "🎮", description: "Learn to create immersive 2D and 3D games using Unity and Unreal Engine.", duration: "7 months", cost: "$1200" },
    { name: "Big Data Analytics", symbol: "📊", description: "Analyze large datasets using Hadoop, Spark, and other big data technologies to derive actionable insights.", duration: "6 months", cost: "$1300" },
    { name: "UI/UX Design", symbol: "🎨", description: "Learn to design user-friendly interfaces and experiences using tools like Figma, Sketch, and Adobe XD.", duration: "4 months", cost: "$750" },
    { name: "DevOps Engineering", symbol: "⚙️", description: "Learn CI/CD, containerization with Docker, and orchestration using Kubernetes to optimize development pipelines.", duration: "6 months", cost: "$1000" },
    { name: "Augmented Reality (AR)", symbol: "👓", description: "Explore AR development to create interactive experiences using Unity and ARKit/ARCore.", duration: "5 months", cost: "$900" },
    { name: "Internet of Things (IoT)", symbol: "🌐", description: "Learn the foundations of IoT, sensor technology, and how to connect devices for a smarter world.", duration: "5 months", cost: "$950" },
    { name: "Robotics", symbol: "🤖", description: "Develop knowledge in robotic systems and automation, with hands-on projects in building and programming robots.", duration: "6 months", cost: "$1400" },
    { name: "Digital Marketing", symbol: "📈", description: "Master online marketing strategies, SEO, and social media campaigns to grow brands and businesses.", duration: "3 months", cost: "$500" }
  ];

  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);

  return (
    <section className="programs">
      <Navigation />
      <h4 className="programs-subtitle">Available Programs</h4>
      <h2 className="programs-title">
        <span className="text-black">Our</span>
        <span className="text-green"> Campus Programs</span>
      </h2>

      {/* Program Cards */}
      <div className="program-cards">
        {programsData.map((program, index) => (
          <div
            key={index}
            className="program-card"
            onClick={() => setCurrentProgramIndex(index)}
          >
            <h4>{program.name}</h4>
            <p>{program.symbol}</p>
          </div>
        ))}
      </div>

      {/* Program Details with Image and Text */}
      {programsData[currentProgramIndex] && (
        <div className="program-details-container">
          {/* Image Section */}
          <div className="program-image">
            <img src={programsData[currentProgramIndex].image} alt={programsData[currentProgramIndex].name} />
          </div>

          {/* Details Section */}
          <div className="program-details">
          <h3 className="program-name-details">{programsData[currentProgramIndex].name}</h3>
          <p className="program-description">{programsData[currentProgramIndex].description}</p>
          <p className="program-startDate-details">Start Date: {programsData[currentProgramIndex].startDate}</p>
          <p><strong>Duration:</strong> {programsData[currentProgramIndex].duration}</p>
          <p><strong>Cost:</strong> {programsData[currentProgramIndex].cost}</p>

          <div className="view-more">
            <button className="view-more-button">View More</button>
          </div>
        </div>
        </div>
      )}
      <Footer/>
    </section>
  );
};

export default CampusProgram;