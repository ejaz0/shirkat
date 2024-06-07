import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Css/NavBarStyle.css';
import ThreeSoftLogo from '../Styles/Css/images/threesoftlogoneww.png'; // Import the logo

const NavBar = () => {
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

    return (
        <nav>
            <div className="logo-container">
                <img src={ThreeSoftLogo} alt="ThreeSoft Logo" className="logo" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
