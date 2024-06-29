import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Css/Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    return (
        <div
            className={`modal ${isOpen ? 'open' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <div className="modal-content">
                <h2 id="modal-title">{t('modal.thanks_title')}</h2>
                <p id="modal-description">{t('modal.thanks_message')}</p>
                <button className="close-button" onClick={onClose} aria-label={t('modal.close_button_aria')}>
                    {t('modal.close_button')}
                </button>
            </div>
        </div>
    );
};

export default Modal;
