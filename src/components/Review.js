import React, { useState, useEffect } from 'react';
import './Review.css';  // Assuming you're putting CSS in this file for the review section
const reviews = [
    {
        name: "Diksha Pandey",
        text: "Coder House exceeded my expectations in every way. The real-world insights shared by industry professionals are invaluable, and the regular coding competitions helped me improve my skills significantly. The mentors are approachable and dedicated, making learning both effective and enjoyable. I’m grateful for their support throughout my placement journey.",
        rating: 5
    },
    {
        name: "Aditya Upadhyay",
        text: "Optus is an excellent choice for mastering Data Structures and Algorithms (DSA). The way they cover challenging topics like Graphs and Trees makes complex concepts much easier to grasp and apply. A special mention goes to Aditya Sir, whose teaching style not only makes the subject engaging but also inspires continuous improvement. He encourages students to participate in coding competitions on platforms like LeetCode and Codeforces, which has been incredibly helpful in building problem-solving skills. His encouragement to keep practicing and competing gives students a strong edge.",
        rating: 5
    },
    {
        name: "Ekansh Rahul Jain",
        text: "I had a great learning experience with Optus EdTech Solutions, especially in DSA topics like graphs and trees. Aditya Sir's clear and engaging teaching, along with his motivation to participate in contests, boosted my confidence in problem-solving. Thank you for creating such a supportive learning environment!",
        rating: 5
    },
    {
        name: "Ishan",
        text: "I can’t say enough good things about my experience with Optus for Data Structures and Algorithms! From day one, the instructors were super approachable and really passionate about the subject. They made complicated concepts feel much simpler, which was a huge relief. What I loved most was the hands-on approach. We didn’t just sit through lectures; we got to solve real coding problems and tackle challenges that helped us apply what we learned. The personalized feedback was a game-changer—I could see exactly where I needed to improve.",
        rating: 5
    },
    {
        name: "Muzzamil Khan",
        text:  "Coder House is a great place to begin. The offline classes are highly engaging, and the mentors are always available to clarify your doubts. I loved workshops and hackathons in particular; they provided hands-on experience and gave a boost to my confidence regarding problem-solving. Guidance received from experienced mentors helped me crack my first job interview with ease!",
        rating: 5
    },
    {
        name: "Shivang Tiwari",
        text: "Initially, I was skeptical about the whole offline training idea, but Coder House totally flipped the script for me. Topics that were thought to be super tough became almost easy due to the expertise of our mentors from IITs and NITs. The collaborative learning environment always kept me motivated and focused. Today, I am more than ever prepared to face real-world challenges in the tech industry.",
        rating: 5
    },
    {
        name: "Ayushi Jain",
        text: "Best Place for technical class as well as Placement. All mentors and administration team are awesome. I loved their planning and mindset towards students.",
        rating: 5
    },
    {
        name: "Seema Sahu",
        text: "Joining Coder House was probably the best decision I ever made in college. All of this, along with mentors who care and an environment that fosters growth, makes one confident about taking that leap to pursue the dream role. Their emphasis on real-world applications, plus excellent infrastructure, makes everything quite seamless. Thanks, Coder House team!",
        rating: 5
    },
    {
            name: "Vikram Joshi",
            text: "Joining Coder House was probably the best decision I ever made in college. All of this, along with mentors who care and an environment that fosters growth, makes one confident about taking that leap to pursue the dream role. Their emphasis on real-world applications, plus excellent infrastructure, makes everything quite seamless. Thanks, Coder House team!",
            rating: 5
    },

    // Add more reviews here if needed
];


const ReviewSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000); // Auto slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    // Custom star icon component
    const Star = ({ filled }) => (
        <svg width="20" height="20" fill={filled ? "#FFD700" : "#ccc"}>
            <polygon points="10,1.5 12.3,7.9 19.5,7.9 13.5,12.2 15.8,18.6 10,14.8 4.2,18.6 6.5,12.2 0.5,7.9 7.7,7.9" />
        </svg>
    );

    const stars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <Star key={i} filled={i < rating} />
        ));
    };

    return (
        <section className="review-section">
            <div className="review-title">
                <span>Our </span><span className="highlight">Reviews</span>
            </div>

            <div className="review-card">
                <div className="quote-icon">
                    <span className="double-quote">&ldquo;</span>
                </div>
                
                <div className="stars">
                    {stars(reviews[currentIndex].rating)}
                </div>

                <h3 className="review-author">{reviews[currentIndex].name}</h3>
                <p className="review-text">{reviews[currentIndex].text}</p>
            </div>

            <div className="review-dots">
                {reviews.map((_, index) => (
                    <span key={index} className={index === currentIndex ? 'active-dot' : 'dot'}></span>
                ))}
            </div>
        </section>
    );
};

export default ReviewSection;
