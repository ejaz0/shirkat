import React from 'react';
import '../Styles/Css/AboutStyle.css';
import elvisH from '../Styles/Css/images/prifle-removebg-preview.png';
import rashedRafa from '../Styles/Css/images/1712175677779.jpg';
import aryaEisa from '../Styles/Css/images/644_e43222bd86412c55c14fe34e9ea1e4ac-2023-11-09 23_27_42.jpg';
import ThreeDLogo from './ThreeDObject'; // Import the ThreeDLogo component

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header-container">
                <header className="about-header">
                    <div className="about-text">
                        <h1>About Us</h1>
                        <p>Home / About</p>
                    </div>
                    <div className="three-d-logo-container">
                        <ThreeDLogo />
                    </div>
                </header>
            </div>
            <div className="about-section">
                <h1 className="about-title">Our Team</h1>
                <p className="about-description">
                    We are a team of three dedicated software engineers, each with our own area of expertise. Together, we provide comprehensive IT solutions and services, ensuring that every aspect of your project is handled with the utmost care and professionalism.
                </p>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={elvisH} alt="Elvis Hasanaj" className="team-photo" />
                        <h2 className="team-name">Elvis Hasanaj</h2>
                        <p className="team-role">Technical Manager</p>
                        <p className="team-bio">
                            Elvis is a creative leader with a knack for innovative solutions and exceptional client service. As the Technical Manager, he oversees all technical aspects of our projects, ensuring that we deliver high-quality, efficient, and scalable solutions.
                        </p>
                        <div className="team-socials">
                            <a href="https://www.linkedin.com/in/elvishasanaj/"rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={rashedRafa} alt="Rashed Rafa" className="team-photo" />
                        <h2 className="team-name">Rashed Rafa</h2>
                        <p className="team-role">Project Manager</p>
                        <p className="team-bio">
                            Rashed is our dynamic Project Manager who excels at building strong client relationships and driving project success. His expertise in project management ensures that our projects are delivered on time, within scope, and meet the highest standards of quality.
                        </p>
                        <div className="team-socials">
                            <a href="https://www.linkhttps://www.linkedin.com/in/rashad-rafa-a7b665203/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={aryaEisa} alt="Arya Eisa" className="team-photo" />
                        <h2 className="team-name">Arya Eisa</h2>
                        <p className="team-role">Sales Manager</p>
                        <p className="team-bio">
                            Arya is a talented Sales Manager with a deep understanding of market trends and client needs. He is adept at creating modern, responsive solutions that not only meet but exceed client expectations, driving sales growth and client satisfaction.
                        </p>
                        <div className="team-socials">
                            <a href="https://www.linkedin.com/in/arya-eisa-292710191/" rel="noreferrer"target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
