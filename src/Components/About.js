import React from 'react';
import '../Styles/Css/AboutStyle.css';
import elvisH from '../Styles/Css/images/prifle-removebg-preview.png';
import rashedRafa from '../Styles/Css/images/1712175677779.jpg';
import aryaEisa from '../Styles/Css/images/644_e43222bd86412c55c14fe34e9ea1e4ac-2023-11-09 23_27_42.jpg';
import ThreeDLogo from './ThreeDObject'; // Import the ThreeDLogo component
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            <div className="about-header-container">
                <header className="about-header">
                    <div className="about-text">
                        <h1>{t('about.title')}</h1>
                        <p>{t('about.description')}</p>
                    </div>
                    <div className="three-d-logo-container">
                        <ThreeDLogo />
                    </div>
                </header>
            </div>
            <div className="about-section">
                <h1 className="about-title">{t('about.team_title')} <i className="fas fa-users"></i></h1>
                <div className="team-grid">
                    <div className="team-member">
                        <img src={elvisH} alt="Elvis Hasanaj" className="team-photo" />
                        <h2 className="team-name">Elvis Hasanaj</h2>
                        <p className="team-bio">{t('about.team_members.elvis.bio')}</p>
                        <div className="team-socials">
                            <a href="https://www.linkedin.com/in/elvishasanaj/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={rashedRafa} alt="Rashed Rafa" className="team-photo" />
                        <h2 className="team-name">Rashad Rafa</h2>
                        <p className="team-bio">{t('about.team_members.rashad.bio')}</p>
                        <div className="team-socials">
                            <a href="https://www.linkedin.com/in/rashad-rafa-a7b665203/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={aryaEisa} alt="Arya Eisa" className="team-photo" />
                        <h2 className="team-name">Arya Eisa</h2>
                        <p className="team-bio">{t('about.team_members.arya.bio')}</p>
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
