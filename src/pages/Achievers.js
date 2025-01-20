import React from "react";
import "./Achievers.css";
import Navigation from "../components/Navigation";

const achievers = [
  {
    company: "Cognizant",
    logo: "../images/cognizant.png",
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

const ambassadors = [
  { name: "Khushi Shrivastava", photo: "../images/Ambassador/image8.jpg", company: "GGITS" },
  { name: "Prakhar Pandey", photo: "../images/Ambassador/image2.png", company: "LPU" },
  { name: "Hitesh Sharma", photo: "../images/Ambassador/image10.jpg", company: "VIT" },
  { name: "Shruti Singour", photo: "../images/Ambassador/image6.jpg", company: "GGITS" },
  { name: "Hiya Jain", photo: "../images/Ambassador/image5.png", company: "LPU" },
  { name: "Aastha Purey", photo: "../images/Ambassador/AasthaPurey.jpg", company: "VIT" },
  { name: "Divyanshu Singhal", photo: "../images/Ambassador/image7.jpg", company: "VIT" },
  { name: "Aanchal Agarwal", photo: "../images/Ambassador/image14.jpg", company: "GMC" },
];
const Achievers = () =>{
  const allAchievers =achievers.flatMap(company => 
    company.people.map(person => ({
      ...person,
      companyLogo: company.logo,
      company: company.company
    }))
  );

  return (
    <div className="main-containerss">
      <Navigation />
      <section className="content-section">
        <div className="section-header left-align">
          <h2 className="gradient-text green-blue">Our Ambassadors</h2>
        </div>
        
        <div className="ambassadors-grid">
          {ambassadors.map((person, index) => (
            <div key={index} className="achiever-card">
              <img src={person.photo} alt={person.name} className="achiever-photo" />
              <p className="achiever-name">{person.name}</p>
              <p className="company-name">{person.company}</p>
            </div>
          ))}
        </div>

        <div className="section-header right-align">
          <h2 className="gradient-text blue-green">Our Achievers</h2>
        </div>
        
        <div className="achievers-grid">
          {allAchievers.map((person, index) => (
            <div key={index} className="placed-card">
              <img src={person.photo} alt={person.name} className="achiever-photo" />
              <p className="achiever-name">{person.name}</p>
              <img src={person.companyLogo} alt={person.company} className="card-company-logo" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Achievers;