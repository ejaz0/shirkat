import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import '../Styles/Css/PortfolioDetails.css'; // Ensure the path is correct

// Import images
import CWImage1 from '../Styles/Css/images/portfolio/ConnectWork/Homepage.png';
import CWImage2 from '../Styles/Css/images/portfolio/ConnectWork/employeers.png';
import CWImage3 from '../Styles/Css/images/portfolio/ConnectWork/Jobboard.png';
import CWImage4 from '../Styles/Css/images/portfolio/ConnectWork/Jobseekers.png';
import MideastImage1 from '../Styles/Css/images/portfolio/mideast/Screenshot 2024-06-26 at 17.01.27.png';
import MideastImage2 from '../Styles/Css/images/portfolio/mideast/Screenshot 2024-06-26 at 17.01.49.png';
import MideastImage3 from '../Styles/Css/images/portfolio/mideast/Screenshot 2024-06-26 at 17.02.29.png';
import GmSakerhet from '../Styles/Css/images/portfolio/gmsakerhet/gmsakerhet.png';
import GmSakerhet1 from '../Styles/Css/images/portfolio/gmsakerhet/gmsakerhet2.png';
import GmSakerhet2 from '../Styles/Css/images/portfolio/gmsakerhet/gmsakerhet3.png';

const PortfolioDetail = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    // Define portfolio data with correct IDs and image imports
    const portfolioData = useMemo(() => ({
        1: {
            title: t('portfolioDetail.connectWork.title'),
            description: t('portfolioDetail.connectWork.description'),
            details: t('portfolioDetail.connectWork.details'),
            images: [CWImage1, CWImage2, CWImage3, CWImage4]
        },
        2: {
            title: t('portfolioDetail.mideast.title'),
            description: t('portfolioDetail.mideast.description'),
            details: t('portfolioDetail.mideast.details'),
            images: [MideastImage1, MideastImage2, MideastImage3]
        },
        3: {
            title: t('portfolioDetail.gmsakerhet.title'),
            description: t('portfolioDetail.gmsakerhet.description'),
            details: t('portfolioDetail.gmsakerhet.details'),
            images: [GmSakerhet, GmSakerhet1, GmSakerhet2]
        },
        // Add more portfolio items as needed
    }), [t]);

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

    if (!portfolio) {
        return <div>{t('portfolioDetail.noImagesFound')}</div>;
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
            <main className="portfolio-content">
                <section className="portfolio-main">
                    <h2>{t('portfolioDetail.projectDetails')}</h2>
                    <p>{portfolio.details}</p>
                    <div className="portfolio-subcontent">
                        {portfolio.images.map((image, index) => (
                            <div
                                key={index}
                                className={`portfolio-subimage-wrapper ${index === activeIndex ? 'active' : ''}`}
                                style={{ transform: `translateX(${-activeIndex * 100}%)` }} // Slide transition
                            >
                                <LazyLoad height={200} offset={100} once>
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="portfolio-subimage"
                                        loading="lazy"
                                    />
                                </LazyLoad>
                            </div>
                        ))}
                    </div>
                    <div className="portfolio-controls">
                        <button onClick={handlePrev} className="control-btn prev-btn" aria-label="Previous Slide">
                            {t('portfolioDetail.prevButton')}
                        </button>
                        <button onClick={handleNext} className="control-btn next-btn" aria-label="Next Slide">
                            {t('portfolioDetail.nextButton')}
                        </button>
                    </div>
                </section>
                <aside className="portfolio-sidebar">
                    <div className="portfolio-list">
                        <h3>{t('portfolioDetail.otherProjects')}</h3>
                        <ul>
                            {Object.entries(portfolioData).map(([key, { title }]) => (
                                <li key={key} className={id === key ? 'active' : ''}>
                                    <Link to={`/portfolio/${key}`}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="portfolio-follow">
                        <h3>{t('portfolioDetail.followUs')}</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/threesoft/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default PortfolioDetail;
