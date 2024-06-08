import React, { useState } from 'react';
import '../Styles/Css/PortfolioStyle.css';
import ThreeDLogo from './ThreeDSuitcase'; // Assuming you have the ThreeDLogo component
import PortfolioImage1 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001123.png';
import PortfolioImage2 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001130.png';
import PortfolioImage3 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001134.png';
import PortfolioImage4 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001139.png';
import PortfolioImage5 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001142.png';
import PortfolioImage6 from '../Styles/Css/images/portfolio/Screenshot 2024-06-08 001146.png';

const portfolioData = [
    {
        image: PortfolioImage1,
        title: 'Project One',
        description: 'Description for project one.',
        category: 'web',
    },
    {
        image: PortfolioImage2,
        title: 'Project Two',
        description: 'Description for project two.',
        category: 'mobile',
    },
    {
        image: PortfolioImage3,
        title: 'Project Three',
        description: 'Description for project three.',
        category: 'cloud',
    },
    {
        image: PortfolioImage4,
        title: 'Project Four',
        description: 'Description for project four.',
        category: 'data',
    },
    {
        image: PortfolioImage5,
        title: 'Project Five',
        description: 'Description for project five.',
        category: 'hosting',
    },
    {
        image: PortfolioImage6,
        title: 'Project Six',
        description: 'Description for project six.',
        category: 'web',
    },
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredPortfolioData = selectedCategory === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.category === selectedCategory);

    return (
        <div className="portfolio-container">
            <div className="portfolio-header-container">
                <header className="portfolio-header">
                    <div className="header-content">
                        <h1>Portfolio</h1>
                        <p>Home / Portfolio</p>
                    </div>
                    <div className="logo-container">
                        <ThreeDLogo />
                    </div>
                </header>
            </div>
            <div className="portfolio-section">
                <header className="portfolio-header">
                    <h1>Awesome Portfolio</h1>
                    <div className="portfolio-filter">
                        <a onClick={() => setSelectedCategory('all')}>All</a>
                        <a  onClick={() => setSelectedCategory('mobile')}>Mobile Apps</a>
                        <a  onClick={() => setSelectedCategory('cloud')}>Cloud</a>
                        <a  onClick={() => setSelectedCategory('data')}>Data Analysis</a>
                        <a  onClick={() => setSelectedCategory('hosting')}>Hosting</a>
                        <a  onClick={() => setSelectedCategory('web')}>Web</a>
                    </div>
                </header>
                <div className="portfolio-grid">
                    {filteredPortfolioData.map((item, index) => (
                        <div key={index} className="portfolio-item">
                            <img src={item.image} alt={`Portfolio ${index + 1}`} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                <a className="see-more-button" href="#">See More</a>
            </div>
        </div>
    );
};

export default Portfolio;
