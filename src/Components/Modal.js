import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Css/Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h2>{t('modal.thanks_title')}</h2>
                <p>{t('modal.thanks_message')}</p>
                <button className="close-button" onClick={onClose}>{t('modal.close_button')}</button>
            </div>
        </div>
    );
};

export default Modal;
