import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Css/NavBarStyle.css';
import ThreeSoftLogo from '../Styles/Css/images/threesoftlogoneww.png'; // Import the logo

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="logo-container">
            <Link to="/">
                    <img src={ThreeSoftLogo} alt="ThreeSoft Logo" className="logo" />
                </Link>            </div>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={isMenuOpen ? 'show' : ''}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
