import React from 'react';
import '../Styles/Css/Modal.css';

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <h2>Thanks for your message!</h2>
                <p>We will contact you soon.</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
