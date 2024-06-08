import React, { useState } from 'react';
import '../Styles/Css/ContactStyle.css';
import ThreeDGlobe from './ThreeDGlobe'; // Assuming the ThreeDGlobe component is in the same directory

const Contact = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="contact-container">
            <div className="contact-header-container">
                <header className="contact-header">
                    <div className="header-content">
                        <h1>Contact Us</h1>
                        <p>Home / Contact</p>
                    </div>
                    <div className="globe-container">
                        <ThreeDGlobe />
                    </div>
                </header>
            </div>
            <div className="contact-section">
                <div className="contact-info">
                    <h1>Get in Touch</h1>
                    <p>Email: contact@consultingfirm.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Main Street, City, Country</p>
                    <button className="contact-button" onClick={toggleForm}>Send Email</button>
                </div>
                {showForm && (
                    <div className="contact-form-overlay">
                        <div className="contact-form">
                            <span className="close-button" onClick={toggleForm}>&times;</span>
                            <h2>Get in touch</h2>
                            <form>
                                <input type="text" placeholder="Name" required />
                                <input type="email" placeholder="Email" required />
                                <textarea placeholder="Message" required></textarea>
                                <button type="submit" className="send-button">Send</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
