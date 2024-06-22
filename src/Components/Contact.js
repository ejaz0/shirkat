import React, { useState } from 'react';
import '../Styles/Css/ContactStyle.css';
import ThreeDGlobe from './ThreeDGlobe'; // Assuming the ThreeDGlobe component is in the same directory
import emailjs from 'emailjs-com';
import Modal from './Modal'; // Import your Modal component

const ContactForm = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log('Email successfully sent!', result.text);
            setShowModal(true); // Show modal on successful submission
        })
        .catch((error) => {
            console.error('Error sending email:', error.text);
            // Optionally: Show an error message to the user
        })
        .finally(() => {
            e.target.reset(); // Reset the form
        });
    };

    const closeModal = () => {
        setShowModal(false);
    };

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
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="user_name" placeholder="Name" required />
                        <input type="email" name="user_email" placeholder="Email" required />
                        <textarea name="message" placeholder="Message" required></textarea>
                        <button type="submit" className="send-button">Send</button>
                    </form>
                </div>
            </div>

            {/* Modal component */}
            <Modal isOpen={showModal} onClose={closeModal} />
        </div>
    );
};

export default ContactForm;
