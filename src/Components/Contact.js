import React, { useState } from 'react';
import '../Styles/Css/ContactStyle.css';
import emailjs from 'emailjs-com';
import Modal from './Modal'; // Import your Modal component
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
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
                        <h1 id="contactUs">{t('contact.title')}</h1>
                        <p id="contactUsP">{t('contact.description')}</p>
                    </div>
                </header>
            </div>
            <div className="contact-section">
                <div className="contact-info">
                    <h1>{t('contact.get_in_touch')}</h1>
                </div>
                <div className="contact-form">
                    <h2>{t('contact.send_message')}</h2>
                    <p>{t('contact.message_prompt')}</p>
                    <form onSubmit={handleSubmit} aria-label="Contact Form">
                        <label htmlFor="user_name">{t('contact.name_placeholder')}</label>
                        <input type="text" id="user_name" name="user_name" placeholder={t('contact.name_placeholder')} required />
                        
                        <label htmlFor="user_email">{t('contact.email_placeholder')}</label>
                        <input type="email" id="user_email" name="user_email" placeholder={t('contact.email_placeholder')} required />
                        
                        <label htmlFor="message">{t('contact.message_placeholder')}</label>
                        <textarea id="message" name="message" placeholder={t('contact.message_placeholder')} required></textarea>
                        
                        <button type="submit" className="send-button">{t('contact.send_button')}</button>
                    </form>
                </div>
            </div>

            {/* Modal component */}
            <Modal isOpen={showModal} onClose={closeModal} />
        </div>
    );
};

export default ContactForm;
