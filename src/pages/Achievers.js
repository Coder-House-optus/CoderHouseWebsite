import React, { useState, useEffect } from "react";
import "./Achievers.css";
import Navigation from "../components/Navigation";

const achievers = [
  {
    company: "Cognizant",
    logo: "../images/Cognizant.png",
    people: [
      { name: "Achyut Jha", photo: "../images/Cognizant/Achyut Jha.jpg" },
      { name: "Adarsh Vishwakarma", photo: "../images/Cognizant/Adarsh Vishwakarma.jpg" },
      { name: "Aditya Gaiki", photo: "../images/Cognizant/Aditya Gaiki.jpg" },
      { name: "Aman tiwari", photo: "../images/Cognizant/Aman tiwari.png" },
      { name: "Amita Vishwakarma", photo: "../images/Cognizant/Amita Vishwakarma.jpg" },
      { name: "Anusha Namdeo", photo: "../images/Cognizant/Anusha Namdeo.png" }
    ],
  },
  {
    company: "TCS",
    logo: "../images/image 3.png",
    people: [
      { name: "Samiksha Mehta", photo: "../images/TCS/Samiksha Mehta.jpg" },
      { name: "Saurabh tiwari", photo: "../images/TCS/Saurabh tiwari.jpg" },
      { name: "Shubhi Chouksey", photo: "../images/TCS/Shubhi Chouksey.jpg" },
      { name: "Shweta Patel", photo: "../images/TCS/Shweta Patel.jpg" },
      { name: "Suryansh Agrahari", photo: "../images/TCS/Suryansh Agrahari.jpg" },
      { name: "Swastika Sanoria", photo: "../images/TCS/Swastika Sanoria.jpg" }
    ],
  },
  {
    company: "Persistent",
    logo: "../images/Persistent.png",
    people: [
      { name: "Anchal Kesarwani", photo: "../images/Persistent/Aanchal Kesarwani.jpg" },
      { name: "Abhi Vishwakarma", photo: "../images/Persistent/Abhi Vishwakarma.jpg" },
      { name: "Abhishek Jhariya", photo: "../images/Persistent/Abhishek Jhariya.jpg" },
      { name: "Abhishek Raghuvanshi", photo: "../images/Persistent/Abhishek Raghuvanshi.jpg" },
      // { name: "Jesna Joshy", photo: "../images/Persistent/Jesna Joshy.jpg" }
    ],
  },
];

const Achievers = () => {
  return (
    <section className="achiever-section">
      <Navigation />
      {achievers.map((companyData, index) => (
        <CompanySection key={companyData.company} companyData={companyData} />
      ))}
    </section>
  );
};

// Component for each company
const CompanySection = ({ companyData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2);

  const totalPeople = companyData.people.length;

  // Dynamically adjust itemsToShow based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) setItemsToShow(1); // Smaller screens show 1 item
      else setItemsToShow(2); // Larger screens show 2 items
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Handlers for navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPeople - itemsToShow : prevIndex - itemsToShow
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + itemsToShow >= totalPeople) {
        return 0; // Reset to the first index if reached the end
      }
      return prevIndex + itemsToShow; // Otherwise, go forward by the number of items to show
    });
  };

  return (
    <div className="company-section">
      {/* 'Our Achievers' image */}
      <div className="achiever-header">
        <img
          src="../images/Our Achievers.png"
          alt="Our Achievers"
          className="our-achievers-img"
        />
      </div>

      {/* Company logo and name */}
      <div className="company-info">
  <img
    src={companyData.logo}
    alt={`${companyData.company} Logo`}
    className={`company-logo ${companyData.company === 'TCS' ? 'tcs-logo' : ''}`}
  />
</div>


      {/* Achievers Slider */}
      <div className="achiever-slider">
        <div className="achiever-content">
          {companyData.people
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((person, idx) => (
              <div
                key={`${person.name}-${idx}`}
                className={`achiever-card card-${idx}`}
              >
                <img
                  src={person.photo}
                  alt={person.name}
                  className="achiever-photo"
                />
                <p className="achiever-name">{person.name}</p>
              </div>
            ))}
        </div>

        {/* Navigation below images */}
        <div className="slider-nav">
          <button
            className="nav-arrow left"
            onClick={handlePrev}
            aria-label={`Previous ${companyData.company} achievers`}
          >
            ❮
          </button>
          <button
            className="nav-arrow right"
            onClick={handleNext}
            aria-label={`Next ${companyData.company} achievers`}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achievers;
