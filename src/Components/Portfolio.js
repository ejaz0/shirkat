import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Styles/Css/PortfolioStyle.css';
import PortfolioImage1 from '../Styles/Css/images/portfolio/Connectwork.png';
import PortfolioImage2 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001130.png';
import PortfolioImage3 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001134.png';
import PortfolioImage4 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001139.png';
import PortfolioImage5 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001142.png';
import PortfolioImage6 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001146.png';

const Portfolio = () => {
    const { t } = useTranslation();

    // Define portfolio items with translations
    const portfolioData = [
        {
            id: 1,
            image: PortfolioImage1,
            title: t('portfolio.items.0.title'),
            description: t('portfolio.items.0.description'),
            category: 'web',
        },
        // Add more portfolio items as needed
    ];

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [displayedItems, setDisplayedItems] = useState([]);

    useEffect(() => {
        // Simulated API call or data loading
        setDisplayedItems(portfolioData);
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="portfolio-container">
            <div className="portfolio-header-container">
                <header className="portfolio-header">
                    <div className="header-content">
                        <h1>{t('portfolio.welcomeHeader.title')}</h1>
                        <p>{t('portfolio.welcomeHeader.description')}</p>
                    </div>
                </header>
            </div>
            <div className="portfolio-section">
                <header className="portfolio-header">
                    <h1>{t('portfolio.portfolioHeader.title')}</h1>
                    <div className="portfolio-filter-container">
                        {/* Filter controls can be added here */}
                    </div>
                </header>
                <div className="portfolio-grid">
                    {displayedItems.map((item) => (
                        <div key={item.id} className="portfolio-item">
                            <Link to={`/portfolio/${item.id}`}>
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                <a className="see-more-button" href="#">
                    {t('portfolio.seeMoreButton')}
                </a>
            </div>
            <div className="testimonial-section">
                <header className="portfolio-header">
                    <h1>{t('portfolio.testimonialsHeader.title')}</h1>
                </header>
                <div className="testimonial-grid">
                    {t('portfolio.testimonials', { returnObjects: true }).map((testimonial) => (
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
