import React, { useState, useEffect } from 'react';
import '../Styles/Css/PortfolioStyle.css';
import ThreeDLogo from './ThreeDSuitcase'; // Assuming you have the ThreeDLogo component
import PortfolioImage1 from '../Styles/Css/images/portfolio/Connectwork.png';
import PortfolioImage2 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001130.png';
import PortfolioImage3 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001134.png';
import PortfolioImage4 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001139.png';
import PortfolioImage5 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001142.png';
import PortfolioImage6 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001146.png';

const portfolioData = [
    {
        image: PortfolioImage1,
        title: 'Connectwork.se',
        description: `A dynamic platform connecting job seekers with employers. We created their logo and built an engaging website.`,
        category: 'web',
    },
    // Add more portfolio items as needed
];

const testimonials = [
    {
        id: 1,
        name: 'Hassan owner of ConnectWork',
        text: 'Working with threesoft was a great experience. They delivered our project on time and exceeded our expectations.',
    },
    
    // Add more testimonials as needed
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [displayedItems, setDisplayedItems] = useState(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
            const filteredData = selectedCategory === 'all'
                ? portfolioData
                : portfolioData.filter(item => item.category === selectedCategory);
            setDisplayedItems(filteredData);
        }, 300); // Wait for the fade-out animation to complete

        return () => clearTimeout(timer);
    }, [selectedCategory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="portfolio-container">
            <div className="portfolio-header-container">
                <header className="portfolio-header">
                    <div className="header-content">
                        <h1>Portfolio</h1>
                        <p><i className="fas fa-home"></i> Home / Portfolio</p>
                    </div>
                    <div className="logo-container">
                        <ThreeDLogo />
                    </div>
                </header>
            </div>
            <div className="portfolio-section">
                <header className="portfolio-header">
                    <h1>Our Portfolio</h1>
                    <div className="portfolio-filter-container">
                        {/* Filter controls can be added here */}
                    </div>
                </header>
                <div className="portfolio-grid">
                    {displayedItems.map((item, index) => (
                        <div key={index} className="portfolio-item">
                            <img src={item.image} alt={`Portfolio ${index + 1}`} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                <a className="see-more-button" href="#">See More</a>
            </div>
            <div className="testimonial-section">
                <header className="portfolio-header">
                    <h1>Testimonials</h1>
                </header>
                <div className="testimonial-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-item">
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <p className="testimonial-name">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
