import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/Css/PortfolioDetails.css'; // Ensure the path is correct

// Import images
import CWImage1 from '../Styles/Css/images/portfolio/ConnectWork/Homepage.png';
import CWImage2 from '../Styles/Css/images/portfolio/ConnectWork/employeers.png';
import CWImage3 from '../Styles/Css/images/portfolio/ConnectWork/Jobboard.png';
import CWImage4 from '../Styles/Css/images/portfolio/ConnectWork/Jobseekers.png';

const PortfolioDetail = () => {
    const { id } = useParams(); // Using useParams hook from react-router-dom

    // Define portfolio data with correct IDs and image imports
    const portfolioData = {
        1: {
            title: "Connectwork.se",
            description: "A dynamic platform connecting job seekers with employers. We created their logo and built an engaging website.",
            details: "At Threesoft, we take pride in bringing ideas to life. We conceived ConnectWork from inception, starting with a simple Figma prototype and crafting its unique identity, including logo design and comprehensive web development. Our journey culminated in delivering ConnectWork—a dynamic platform where job seekers and employers seamlessly connect. ",
            images: [CWImage1, CWImage2, CWImage3, CWImage4]
        },
        // Add more portfolio items as needed
    };

    const portfolio = portfolioData[id];

    // useState hook for managing activeIndex state
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle next image in the slideshow
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % portfolio.images.length);
    };

    // Function to handle previous image in the slideshow
    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? portfolio.images.length - 1 : prevIndex - 1
        );
    };

    // Prepare slideshow images
    let subImages;

    if (id === '1' && portfolio.images) {
        subImages = (
            <div className="portfolio-subcontent">
                {portfolio.images.map((image, index) => (
                    <div
                        key={index}
                        className={`portfolio-subimage-wrapper ${index === activeIndex ? 'active' : ''}`}
                        style={{ transform: `translateX(${-activeIndex * 100}%)` }} // Slide transition
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="portfolio-subimage"
                        />
                    </div>
                ))}
            </div>
        );
    } else {
        // Default placeholder or error handling if id doesn't match
        subImages = (
            <div className="portfolio-subcontent">
                <p>No images found for this project.</p>
            </div>
        );
    }

    return (
        <div className="portfolio-container">
            <div className="portfolio-header-container">
                <header className="portfolio-header">
                    <div className="portfolio-text">
                        <h1>{portfolio.title}</h1>
                        <p>{portfolio.description}</p>
                    </div>
                </header>
            </div>
            <div className="portfolio-content">
                <div className="portfolio-main">
                    <h2>Project Details</h2>
                    <p>{portfolio.details}</p>
                    {subImages}
                    <div className="portfolio-controls">
                        <button onClick={handlePrev} className="control-btn prev-btn">
                            Prev
                        </button>
                        <button onClick={handleNext} className="control-btn next-btn">
                            Next
                        </button>
                    </div>
                </div>
                <aside className="portfolio-sidebar">
                    <div className="portfolio-list">
                        <h3>Other Projects</h3>
                        <ul>
                            {Object.entries(portfolioData).map(([key, { title }]) => (
                                <li key={key} className={id === key ? 'active' : ''}>
                                    <Link to={`/portfolio/${key}`}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="portfolio-follow">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/threesoft/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default PortfolioDetail;
