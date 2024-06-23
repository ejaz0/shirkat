import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/Css/ServiceDetail.css';
import SeoImage from '../Styles/Css/images/Services/Seoo.webp';
import MaintenanceImage from '../Styles/Css/images/Services/Maintence.webp';
import UXImage from '../Styles/Css/images/Services/ux.webp';
import WebdevImage from '../Styles/Css/images/Services/Webdev.webp';

const ServiceDetail = () => {
    const { id } = useParams();
    const serviceData = {
        1: {
            title: "Web Development",
            description: "High-quality web development services using modern technologies. We specialize in creating responsive and scalable web applications tailored to your business needs.",
            details: `
                Dive deep into our comprehensive web development solutions where we create dynamic, responsive websites optimized for performance and user experience. From e-commerce platforms to corporate portals, we build solutions that drive your online presence forward.`,
            mainImage: WebdevImage
        },
        2: {
            title: "SEO Services",
            description: "Effective SEO strategies to improve your website's search engine rankings. We optimize your content, keywords, and meta tags to enhance visibility and attract more organic traffic.",
            details: `
                Explore our SEO services that include keyword research, on-page and off-page optimization, and SEO audits. We focus on increasing your site's authority, enhancing user engagement, and maximizing conversions through strategic SEO practices.`,
            mainImage: SeoImage
        },
        3: {
            title: "Web Maintenance",
            description: "Ensure your website runs smoothly and efficiently with our comprehensive web maintenance services. We provide regular updates, security patches, and performance optimizations.",
            details: `
                Learn more about our proactive maintenance approach, including security patches, performance optimization, and content updates. We provide peace of mind by keeping your website secure, up-to-date, and running efficiently.`,
            mainImage: MaintenanceImage
        },
        4: {
            title: "UX/UI Design",
            description: "Create intuitive and engaging user experiences with our expert UX/UI design services. We focus on usability, accessibility, and visual appeal to enhance user satisfaction and conversion rates.",
            details: `
                Discover our design process, from user research and wireframing to prototyping and testing. We focus on enhancing user satisfaction by improving usability and accessibility, ultimately driving higher engagement and retention rates.`,
            mainImage: UXImage
        }
    };

    const service = serviceData[id];

    if (!service) {
        return <div>Service not found</div>;
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
            <div className="service-content">
                <div className="service-main">
                    <h2>{service.title}</h2>
                    <p>{service.details}</p>
                    {service.mainImage && <img src={service.mainImage} alt={service.title} className="service-image" />}
                </div>
                <aside className="service-sidebar">
                    <div className="service-list">
                        <h3>List Of Services</h3>
                        <ul>
                            {Object.entries(serviceData).map(([key, { title }]) => (
                                <li key={key} className={id === key ? 'active' : ''}>
                                    <Link to={`/service/${key}`}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="service-follow">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/threesoft" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ServiceDetail;
