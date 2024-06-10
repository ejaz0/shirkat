import React from 'react';
import '../Styles/Css/HomeStyle.css';
import HeroImage from '../Styles/Css/images/Remove-bg.ai_1717774002262.png';

const Home = () => {
    return (
        <div className="container">
            <div className="home-page">
                <section className="hero" id="home">
                    <div className="hero-content">
                        <h1>ThreeSoft</h1>
                        <h1>Providing The Best Services & IT Solutions</h1>
                        <p>Learn more about our expert, consumer-advising skills. Get solutions delivered by experts with adaptive strategies.</p>
                        <button className="hero-button">Learn More</button>
                    </div>
                    <div className="hero-graphic">
                        <img src={HeroImage} alt="Hero Graphic" />
                    </div>
                </section>
            </div>
            <section className="services" id="services">
                <h2>Services We Offer</h2>
                <p>Learn more about our expert, consumer-advising skills. Get solutions delivered by experts with adaptive strategies.</p>
                <div className="services-grid">
                    <div className="service-card">
                        <i className="fas fa-code service-icon"></i>
                        <h3>Web Development</h3>
                        <p>High-quality web development services using modern technologies.</p>
                        <a href="#">Read More &rarr;</a>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-bullhorn service-icon"></i>
                        <h3>Digital Marketing</h3>
                        <p>Comprehensive digital marketing solutions to boost your online presence.</p>
                        <a href="#">Read More &rarr;</a>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-cloud service-icon"></i>
                        <h3>SaaS Products</h3>
                        <p>Scalable and efficient SaaS solutions for various business needs.</p>
                        <a href="#">Read More &rarr;</a>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-mobile-alt service-icon"></i>
                        <h3>Apps Development</h3>
                        <p>Professional app development services for both iOS and Android platforms.</p>
                        <a href="#">Read More &rarr;</a>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-search service-icon"></i>
                        <h3>SEO Services</h3>
                        <p>Effective SEO strategies to improve your website's search engine rankings.</p>
                        <a href="#">Read More &rarr;</a>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-chart-bar service-icon"></i>
                        <h3>Data Analysis</h3>
                        <p>Advanced data analysis services to help you make informed decisions.</p>
                        <a href="#">Read More &rarr;</a>
                    </div>
                </div>
                <button className="services-button">See All Services</button>
            </section>
        </div>
    );
};

export default Home;
