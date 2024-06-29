import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Styles/Css/NavBarStyle.css'; // Ensure this imports your original CSS for NavBar styling
import ThreeSoftLogo from '../Styles/Css/images/threesoftlogoneww.png';

const NavBar = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 1) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav ref={navRef}>
            <div className="logo-container">
                <Link to="/">
                    <img src={ThreeSoftLogo} alt={t('navbar.logo_alt')} className="logo" />
                </Link>
            </div>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={isMenuOpen ? 'show' : ''}>
                <li><Link to="/" onClick={toggleMenu}>{t('navbar.home')}</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>{t('navbar.about')}</Link></li>
                <li><Link to="/portfolio" onClick={toggleMenu}>{t('navbar.portfolio')}</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>{t('navbar.contact')}</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;

