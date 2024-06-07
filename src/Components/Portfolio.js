import React from 'react';
import '../Styles/Css/PortfolioStyle.css';
import PortfolioImage1 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001123.png';
import PortfolioImage2 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001130.png';
import PortfolioImage3 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001134.png';
import PortfolioImage4 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001139.png';
import PortfolioImage5 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001142.png';
import PortfolioImage6 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001146.png';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-header-container">
                <header className="portfolio-header">
                    <h1>Portfolio</h1>
                    <p>Home / Portfolio</p>
                </header>
            </div>
            <div className="portfolio-section">
                <header className="portfolio-header">
                    <h1>Awesome Portfolio</h1>
                    <div className="portfolio-filter">
                        <a href="#">All</a>
                        <a href="#">Mobile Apps</a>
                        <a href="#">Cloud</a>
                        <a href="#">Data Analysis</a>
                        <a href="#">Hosting</a>
                    </div>
                </header>
                <div className="portfolio-grid">
                    <div className="portfolio-item">
                        <img src={PortfolioImage1} alt="Portfolio 1" />
                    </div>
                    <div className="portfolio-item">
                        <img src={PortfolioImage2} alt="Portfolio 2" />
                    </div>
                    <div className="portfolio-item">
                        <img src={PortfolioImage3} alt="Portfolio 3" />
                    </div>
                    <div className="portfolio-item">
                        <img src={PortfolioImage4} alt="Portfolio 4" />
                    </div>
                    <div className="portfolio-item">
                        <img src={PortfolioImage5} alt="Portfolio 5" />
                    </div>
                    <div className="portfolio-item">
                        <img src={PortfolioImage6} alt="Portfolio 6" />
                    </div>
                </div>
                <a className="see-more-button" href="#">See More</a>
            </div>
        </div>
    );
};

export default Portfolio;
