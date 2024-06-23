import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/Css/ServiceDetail.css';

const PortfolioDetail = () => {
    const { id } = useParams();
    const portfolioData = {
        1: {
            title: "Connectwork.se",
            description: "A dynamic platform connecting job seekers with employers. We created their logo and built an engaging website.",
            details: "Detailed information about Connectwork.se project...",
        },
        // Add more portfolio items as needed
    };

    const portfolio = portfolioData[id];

    if (!portfolio) {
        return <div>Portfolio item not found</div>;
    }

    return (
        <div className="service-container">
            <div className="service-header-container">
                <header className="service-header">
                    <div className="service-text">
                        <h1>{portfolio?.title}</h1>
                        <p>{portfolio?.description}</p>
                    </div>
                </header>
            </div>
            <div className="service-content">
                <div className="service-main">
                    <img src="https://via.placeholder.com/800x400" alt="Service" className="service-image" />
                    <h2>Project Details</h2>
                    <p>{portfolio?.details}</p>
                    <div className="service-subcontent">
                        <img src="https://via.placeholder.com/400x200" alt="Subcontent 1" className="service-subimage" />
                        <img src="https://via.placeholder.com/400x200" alt="Subcontent 2" className="service-subimage" />
                    </div>
                </div>
                <aside className="service-sidebar">
                    <div className="service-list">
                        <h3>Other Projects</h3>
                        <ul>
                            {Object.entries(portfolioData).map(([key, { title }]) => (
                                <li key={key} className={id === key ? 'active' : ''}>
                                    <Link to={`/portfolio/${key}`}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="service-follow">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default PortfolioDetail;
