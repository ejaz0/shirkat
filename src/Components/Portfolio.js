import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Styles/Css/PortfolioStyle.css';
import PortfolioImage1 from '../Styles/Css/images/portfolio/ConnectWork/Homepage.png';
import PortfolioImage2 from '../Styles/Css/images/portfolio/mideast/Screenshot 2024-06-26 at 17.01.27.png';

const Portfolio = () => {
    const { t } = useTranslation();

    const portfolioData = [
        {
            id: 1,
            image: PortfolioImage1,
            title: t('portfolio.items.0.title'),
            description: t('portfolio.items.0.description'),
        },
        {
            id: 2,
            image: PortfolioImage2,
            title: t('portfolio.items.1.title'),
            description: t('portfolio.items.1.description'),
        }
    ];

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
            <section className="portfolio-section">
                <header className="portfolio-header">
                    <h1>{t('portfolio.portfolioHeader.title')}</h1>
                </header>
                <div className="portfolio-grid">
                    {portfolioData.map((item) => (
                        <div key={item.id} className="portfolio-item">
                            <Link to={`/portfolio/${item.id}`}>
                                <img src={item.image} alt={item.title} className="portfolio-image" />
                                <div className="portfolio-card-content">
                                    <h3 className="portfolio-title">{item.title}</h3>
                                    <p className="portfolio-description">{item.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
               
            </section>
            <section className="testimonial-section">
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
            </section>
        </div>
    );
};

export default Portfolio;
