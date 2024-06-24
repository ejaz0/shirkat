import React, { useState } from 'react';
import '../Styles/Css/ContactStyle.css';
import ThreeDGlobe from './ThreeDGlobe'; // Assuming the ThreeDGlobe component is in the same directory
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
                    <div className="globe-container">
                        <ThreeDGlobe />
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
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="user_name" placeholder={t('contact.name_placeholder')} required />
                        <input type="email" name="user_email" placeholder={t('contact.email_placeholder')} required />
                        <textarea name="message" placeholder={t('contact.message_placeholder')} required></textarea>
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
