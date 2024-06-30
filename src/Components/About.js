import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Css/AboutStyle.css';
import elvisH from '../Styles/Css/images/prifle-removebg-preview.png';
import rashadRafa from '../Styles/Css/images/Jag.jpg';
import aryaEisa from '../Styles/Css/images/644_e43222bd86412c55c14fe34e9ea1e4ac-2023-11-09 23_27_42.jpg';

const About = () => {
    const { t } = useTranslation();

    // Memoize translated texts and static data to avoid unnecessary re-renders
    const translatedTexts = useMemo(() => ({
        title: t('about.title'),
        description: t('about.description'),
        team_title: t('about.team_title'),
        elvis: {
            name: 'Elvis Hasanaj',
            bio: t('about.team_members.elvis.bio'),
            linkedin: 'https://www.linkedin.com/in/elvishasanaj/'
        },
        rashad: {
            name: 'Rashad Rafa',
            bio: t('about.team_members.rashad.bio'),
            linkedin: 'https://www.linkedin.com/in/rashad-rafa-a7b665203/'
        },
        arya: {
            name: 'Arya Eisa',
            bio: t('about.team_members.arya.bio'),
            linkedin: 'https://www.linkedin.com/in/arya-eisa-292710191/'
        }
    }), [t]);

    return (
        <div className="about-container">
            <div className="about-header-container">
                <header className="about-header">
                    <div className="about-text">
                        <h1>{translatedTexts.title}</h1>
                        <p>{translatedTexts.description}</p>
                    </div>
                </header>
            </div>
            <div className="about-section">
                <h2 className="about-title">{translatedTexts.team_title} <i className="fas fa-users"></i></h2>
                <div className="team-grid">
                    <TeamMember
                        name={translatedTexts.elvis.name}
                        bio={translatedTexts.elvis.bio}
                        linkedin={translatedTexts.elvis.linkedin}
                        image={elvisH}
                    />
                    <TeamMember
                        name={translatedTexts.rashad.name}
                        bio={translatedTexts.rashad.bio}
                        linkedin={translatedTexts.rashad.linkedin}
                        image={rashadRafa}
                    />
                    <TeamMember
                        name={translatedTexts.arya.name}
                        bio={translatedTexts.arya.bio}
                        linkedin={translatedTexts.arya.linkedin}
                        image={aryaEisa}
                    />
                </div>
            </div>
        </div>
    );
};

const TeamMember = ({ name, bio, linkedin, image }) => (
    <div className="team-member">
        <img src={image} alt={name} className="team-photo" loading="lazy" />
        <h3 className="team-name">{name}</h3>
        <p className="team-bio">{bio}</p>
        <div className="team-socials">
            <a href={linkedin} rel="noreferrer" target="_blank" aria-label={`LinkedIn profile of ${name}`}>
                <i className="fab fa-linkedin"></i>
            </a>
        </div>
    </div>
);

export default About;
