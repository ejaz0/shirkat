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
                        
                        <button className="hero-button">Contact Us</button>
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
                        <i className="fas fa-search service-icon"></i>
                        <h3>SEO Services</h3>
                        <p>Effective SEO strategies to improve your website's search engine rankings.</p>
                        <a href="#">Read More &rarr;</a>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-wrench service-icon"></i> {/* Changed icon */}
                        <h3>Web Maintenance</h3>
                        <p>Ensure your website runs smoothly and efficiently with our comprehensive web maintenance services.</p>
                        <a href="#">Read More &rarr;</a>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-paint-brush service-icon"></i> {/* Changed icon */}
                        <h3>UX/UI Design</h3>
                        <p>Create intuitive and engaging user experiences with our expert UX/UI design services.</p>
                        <a href="#">Read More &rarr;</a>
                    </div>
                </div>
                <button className="services-button">See All Services</button>
            </section>
        </div>
    );
};

export default Home;
