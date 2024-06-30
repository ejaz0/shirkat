import React, { Suspense, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Styles/Css/ServiceDetail.css';
import SeoImage from '../Styles/Css/images/Services/Seoo.webp';
import MaintenanceImage from '../Styles/Css/images/Services/Maintence.webp';
import UXImage from '../Styles/Css/images/Services/ux.webp';
import WebdevImage from '../Styles/Css/images/Services/Webdev.webp';

const LazyImage = React.memo(({ src, alt, className }) => (
    <Suspense fallback={<div>Loading image...</div>}>
        <img src={src} alt={alt} className={className} />
    </Suspense>
));

const ServiceDetail = React.memo(() => {
    const { t } = useTranslation();
    const { id } = useParams();

    const serviceData = useMemo(() => ({
        1: {
            title: t('serviceDetail.webDevelopment.title'),
            description: t('serviceDetail.webDevelopment.description'),
            details: t('serviceDetail.webDevelopment.details'),
            mainImage: WebdevImage
        },
        2: {
            title: t('serviceDetail.seoServices.title'),
            description: t('serviceDetail.seoServices.description'),
            details: t('serviceDetail.seoServices.details'),
            mainImage: SeoImage
        },
        3: {
            title: t('serviceDetail.webMaintenance.title'),
            description: t('serviceDetail.webMaintenance.description'),
            details: t('serviceDetail.webMaintenance.details'),
            mainImage: MaintenanceImage
        },
        4: {
            title: t('serviceDetail.uxUiDesign.title'),
            description: t('serviceDetail.uxUiDesign.description'),
            details: t('serviceDetail.uxUiDesign.details'),
            mainImage: UXImage
        }
    }), [t]);

    const service = serviceData[id];

    if (!service) {
        return <div>{t('serviceDetail.serviceNotFound')}</div>;
    }

    return (
        <div className="service-container">
            <div className="service-header-container">
                <header className="service-header">
                    <div className="service-text">
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                    </div>
                </header>
            </div>
            <main className="service-content">
                <article className="service-main">
                    <h2>{service.title}</h2>
                    <p>{service.details}</p>
                    {service.mainImage && (
                        <LazyImage src={service.mainImage} alt={service.title} className="service-image" />
                    )}
                </article>
                <aside className="service-sidebar">
                    <div className="service-list">
                        <h3>{t('serviceDetail.listOfServices')}</h3>
                        <ul>
                            {Object.entries(serviceData).map(([key, { title }]) => (
                                <li key={key} className={id === key ? 'active' : ''}>
                                    <Link to={`/service/${key}`}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="service-follow">
                        <h3>{t('serviceDetail.followUs')}</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/threesoft" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
});

export default ServiceDetail;
