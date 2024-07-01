import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyLoadedHeroImage from '../Styles/Css/images/Remove-bg.ai_1717774002262.png';
import '../Styles/Css/HomeStyle.css';

const Home = () => {
    const { t } = useTranslation();

    // Memoize translated texts to avoid unnecessary re-renders
    const translatedTexts = useMemo(() => ({
        hero_title: t('home.hero_title'),
        hero_subtitle: t('home.hero_subtitle'),
        hero_description: t('home.hero_description'),
        hero_button: t('home.hero_button'),
        services_title: t('home.services_title'),
        services_description: t('home.services_description'),
        service_read_more: t('home.service_read_more'),
        service1_title: t('home.service1_title'),
        service1_description: t('home.service1_description'),
        service2_title: t('home.service2_title'),
        service2_description: t('home.service2_description'),
        service3_title: t('home.service3_title'),
        service3_description: t('home.service3_description'),
        service4_title: t('home.service4_title'),
        service4_description: t('home.service4_description'),
        service5_title: t('home.service5_title'),
        service5_description: t('home.service5_description'),
    }), [t]);

    return (
        <div className="container">
            <div className="home-page">
                <section className="hero" id="home">
                    <div className="hero-content">
                        <h1>{translatedTexts.hero_title}</h1>
                        <h2>{translatedTexts.hero_subtitle}</h2>
                        <p>{translatedTexts.hero_description}</p>
                        <Link to="/contact" className="hero-button">{translatedTexts.hero_button}</Link>
                    </div>
                    <div className="hero-graphic">
                        <img src={LazyLoadedHeroImage} alt={translatedTexts.hero_alt} loading="lazy" />
                    </div>
                </section>
            </div>
            <section className="services" id="services">
                <h2>{translatedTexts.services_title}</h2>
                <p>{translatedTexts.services_description}</p>
                <div className="services-grid">
                    <ServiceCard
                        iconClass="fas fa-code"
                        title={translatedTexts.service1_title}
                        description={translatedTexts.service1_description}
                        linkText={`${translatedTexts.service_read_more} →`}
                        linkTo="/service/1"
                    />
                    <ServiceCard
                        iconClass="fas fa-search"
                        title={translatedTexts.service2_title}
                        description={translatedTexts.service2_description}
                        linkText={`${translatedTexts.service_read_more} →`}
                        linkTo="/service/2"
                    />
                    <ServiceCard
                        iconClass="fas fa-wrench"
                        title={translatedTexts.service3_title}
                        description={translatedTexts.service3_description}
                        linkText={`${translatedTexts.service_read_more} →`}
                        linkTo="/service/3"
                    />
                    <ServiceCard
                        iconClass="fas fa-paint-brush"
                        title={translatedTexts.service4_title}
                        description={translatedTexts.service4_description}
                        linkText={`${translatedTexts.service_read_more} →`}
                        linkTo="/service/4"
                    />
                     <ServiceCard
                        iconClass="fas fa-code-branch"
                        title={translatedTexts.service5_title}
                        description={translatedTexts.service5_description}
                        linkText={`${translatedTexts.service_read_more} →`}
                        linkTo="/service/5"
                    />
                </div>
            </section>
        </div>
    );
};

const ServiceCard = ({ iconClass, title, description, linkText, linkTo }) => (
    <article className="service-card">
        <i className={`${iconClass} service-icon`} aria-hidden="true"></i>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={linkTo}>{linkText}</Link>
    </article>
);

export default Home;
