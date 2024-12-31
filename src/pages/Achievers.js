import React from "react";
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
    ],
  },
];
// const aboutus=[{
//   designation:" Mentor",
//   logo:
// }];

const Achievers = () => {
  return (
    <div className="main-container">
      <Navigation />
      <section className="achiever-section">
        <div className="achiever-header">
          <img
            src="../images/Our Achievers.png"
            alt="Our Achievers"
            className="our-achievers-img"
          />
        </div>
        
        {achievers.map((companyData) => (
          <div key={companyData.company} className="company-section">
            <h2 className="company-title">{companyData.company}</h2>
            <div className="achievers-grid">
              {companyData.people.map((person) => (
                <div key={person.name} className="achiever-card">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="achiever-photo"
                  />
                  <p className="achiever-name">{person.name}</p>
                  <img
                    src={companyData.logo}
                    alt={`${companyData.company} Logo`}
                    className="card-company-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Achievers;