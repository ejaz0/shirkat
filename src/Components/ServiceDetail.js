import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Css/ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const serviceData = {
        1: {
            title: "Web Development",
            description: "High-quality web development services using modern technologies.",
            details: "Detailed information about Web Development services we offer...",
        },
        2: {
            title: "SEO Services",
            description: "Effective SEO strategies to improve your website's search engine rankings.",
            details: "Detailed information about SEO services we offer...",
        },
        3: {
            title: "Web Maintenance",
            description: "Ensure your website runs smoothly and efficiently with our comprehensive web maintenance services.",
            details: "Detailed information about Web Maintenance services we offer...",
        },
        4: {
            title: "UX/UI Design",
            description: "Create intuitive and engaging user experiences with our expert UX/UI design services.",
            details: "Detailed information about UX/UI Design services we offer...",
        }
    };

    const service = serviceData[id];

    return (
        <div className="service-container">
            <div className="service-header-container">
                <header className="service-header">
                    <div className="service-text">
                        <h1>{service?.title}</h1>
                        <p>{service?.description}</p>
                    </div>
                </header>
            </div>
            <div className="service-content">
                <div className="service-main">
                    <img src="https://via.placeholder.com/800x400" alt="Service" className="service-image" />
                    <h2>Information Security Services We Offer</h2>
                    <p>{service?.details}</p>
                    <div className="service-subcontent">
                        <img src="https://via.placeholder.com/400x200" alt="Subcontent 1" className="service-subimage" />
                        <img src="https://via.placeholder.com/400x200" alt="Subcontent 2" className="service-subimage" />
                    </div>
                    <h2>Information Security Services We Offer</h2>
                    <p>{service?.details}</p>
                </div>
                <aside className="service-sidebar">
                    <div className="service-list">
                        <h3>List Of Services</h3>
                        <ul>
                            {Object.entries(serviceData).map(([key, { title }]) => (
                                <li key={key} className={id === key ? 'active' : ''}>{title}</li>
                            ))}
                        </ul>
                    </div>
                  
                    <div className="service-follow">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ServiceDetail;
