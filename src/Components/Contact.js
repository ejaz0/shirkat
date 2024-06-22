import React from 'react';
import '../Styles/Css/ContactStyle.css';
import ThreeDGlobe from './ThreeDGlobe'; // Assuming the ThreeDGlobe component is in the same directory

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header-container">
                <header className="contact-header">
                    <div className="header-content">
                        <h1>Contact Us</h1>
                        <p>
                            <i className="fas fa-home"></i> Home / Contact
                        </p>
                    </div>
                    <div className="globe-container">
                        <ThreeDGlobe />
                    </div>
                </header>
            </div>
            <div className="contact-section">
                <div className="contact-info">
                    <h1>Get in Touch</h1>
                    <p>We'd love to hear from you! Whether you have a question about our services, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
                </div>
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <p>We are always here to help you with your inquiries and provide the best solutions for your business needs. Fill out the form below, and we will get back to you as soon as possible.</p>
                    <form>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit" className="send-button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
