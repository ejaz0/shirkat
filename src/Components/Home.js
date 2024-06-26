import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Styles/Css/HomeStyle.css';
import HeroImage from '../Styles/Css/images/Remove-bg.ai_1717774002262.png';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="home-page">
                <section className="hero" id="home">
                    <div className="hero-content">
                        <h1>{t('home.hero_title')}</h1>
                        <h1>{t('home.hero_subtitle')}</h1>
                        <p>{t('home.hero_description')}</p>
                        <Link to="/contact" className="hero-button">{t('home.hero_button')}</Link>
                    </div>
                    <div className="hero-graphic">
                        <img src={HeroImage} alt={t('home.hero_alt')} />
                    </div>
                </section>
            </div>
            <section className="services" id="services">
                <h2>{t('home.services_title')}</h2>
                <p>{t('home.services_description')}</p>
                <div className="services-grid">
                    <div className="service-card">
                        <i className="fas fa-code service-icon"></i>
                        <h3>{t('home.service1_title')}</h3>
                        <p>{t('home.service1_description')}</p>
                        <Link to="/service/1">{t('home.service_read_more')} &rarr;</Link>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-search service-icon"></i>
                        <h3>{t('home.service2_title')}</h3>
                        <p>{t('home.service2_description')}</p>
                        <Link to="/service/2">{t('home.service_read_more')} &rarr;</Link>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-wrench service-icon"></i>
                        <h3>{t('home.service3_title')}</h3>
                        <p>{t('home.service3_description')}</p>
                        <Link to="/service/3">{t('home.service_read_more')} &rarr;</Link>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-paint-brush service-icon"></i>
                        <h3>{t('home.service4_title')}</h3>
                        <p>{t('home.service4_description')}</p>
                        <Link to="/service/4">{t('home.service_read_more')} &rarr;</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
