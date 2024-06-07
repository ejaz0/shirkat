import React from 'react';
import '../Styles/Css/AboutStyle.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">We are a team of experienced software consultants dedicated to providing top-notch IT solutions and services.</p>
            <div className="team-grid">
                <div className="team-member">
                    <img src="/path/to/alex-smith.jpg" alt="Alex Smith" className="team-photo" />
                    <h2 className="team-name">Elvis Hasanaj</h2>
                    <p className="team-role">Technical Manager</p>
                    <p className="team-bio">Alex is a creative leader with a knack for innovative solutions and exceptional client service.</p>
                    <div className="team-socials">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="team-member">
                    <img src="/path/to/may-brown.jpg" alt="May Brown" className="team-photo" />
                    <h2 className="team-name">Rashed Rafa</h2>
                    <p className="team-role">Treasury Manager</p>
                    <p className="team-bio">May is our dynamic sales manager who excels at building strong client relationships and driving sales growth.</p>
                    <div className="team-socials">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="team-member">
                    <img src="/path/to/ann-richmond.jpg" alt="Ann Richmond" className="team-photo" />
                    <h2 className="team-name">Arya Eisa</h2>
                    <p className="team-role">Sales Manager</p>
                    <p className="team-bio">Ann is a talented web developer with expertise in creating modern, responsive websites and applications.</p>
                    <div className="team-socials">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
