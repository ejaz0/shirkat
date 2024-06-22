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
                        <p>
                        We are a team of three dedicated software engineers, each with our own area of expertise, committed to providing top-notch IT solutions. We specialize in creating custom websites that cater to your specific needs, from initial concept and design to full development and deployment. Our services include logo design, UX/UI design, and complete website creation, ensuring a seamless and professional online presence. Beyond development, we offer ongoing maintenance and updates to keep your website running smoothly and effectively, allowing you to focus on your business while we handle the technical details.

                        </p>
                    </div>
                    <div className="three-d-logo-container">
                        <ThreeDLogo />
                    </div>
                </header>
            </div>
            <div className="about-section">
                <h1 className="about-title">
                    Our Team <i className="fas fa-users"></i>
                </h1>
                <p className="about-description">

</p>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={elvisH} alt="Elvis Hasanaj" className="team-photo" />
                        <h2 className="team-name">Elvis Hasanaj</h2>

                        <p className="team-bio">
                        Elvis is a dedicated programmer with a strong foundation in software engineering, driven by a passion for technology and innovation. His expertise lies in designing and implementing advanced solutions that exceed expectations. With a keen focus on detail and a knack for solving complex technical challenges, Elvis ensures every project is crafted with precision and scalability in mind.






</p>
                        <div className="team-socials">
                            <a href="https://www.linkedin.com/in/elvishasanaj/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={rashedRafa} alt="Rashed Rafa" className="team-photo" />
                        <h2 className="team-name">Rashad Rafa</h2>
                      
                        <p className="team-bio">
                        Rashad has a rich background in UX/UI design, having honed his skills from a young age. His passion for design is complemented by his software engineering expertise and experience in project management. Rashad excels at building strong client relationships and driving project success. His multifaceted skill set ensures that projects are delivered on time, within scope, and meet the highest standards of quality.

</p>
                        <div className="team-socials">
                            <a href="https://www.linkedin.com/in/rashad-rafa-a7b665203/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={aryaEisa} alt="Arya Eisa" className="team-photo" />
                        <h2 className="team-name">Arya Eisa</h2>
                     
                        <p className="team-bio">
                        Arya is a seasoned professional with a robust background in both business management and software engineering. Having successfully run companies, he brings a wealth of experience in understanding market trends and client needs. Arya excels in creating modern, responsive solutions that not only meet but exceed client expectations. His unique blend of business acumen and technical expertise drives sales growth and ensures exceptional client satisfaction.

</p>
                        <div className="team-socials">
                            <a href="https://www.linkedin.com/in/arya-eisa-292710191/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
