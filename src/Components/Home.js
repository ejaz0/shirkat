import React from 'react';
import '../Styles/Css/HomeStyle.css';
import HeroImage from '../Styles/Css/images/Remove-bg.ai_1717774002262.png';

const Home = () => {
    return (
        <div className="container">
        <div className="home-page">
            <section className="hero" id="home">
                <div className="hero-content">
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
                    <h3>Web Development</h3>
                    <p>High-quality web development services using modern technologies.</p>
                </div>
                <div className="service-card">
                    <h3>Digital Marketing</h3>
                    <p>Comprehensive digital marketing solutions to boost your online presence.</p>
                </div>
                <div className="service-card">
                    <h3>SaaS Products</h3>
                    <p>Scalable and efficient SaaS solutions for various business needs.</p>
                </div>
                <div className="service-card">
                    <h3>Apps Development</h3>
                    <p>Professional app development services for both iOS and Android platforms.</p>
                </div>
                <div className="service-card">
                    <h3>SEO Services</h3>
                    <p>Effective SEO strategies to improve your website's search engine rankings.</p>
                </div>
                <div className="service-card">
                    <h3>Data Analysis</h3>
                    <p>Advanced data analysis services to help you make informed decisions.</p>
                </div>
            </div>
            <button className="services-button">See All Services</button>
        </section>
    </div>
    
    );
};

export default Home;
