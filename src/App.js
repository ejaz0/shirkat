// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import PortfolioDetail from './Components/PortfolioDetail';
import ServiceDetail from './Components/ServiceDetail';
import Contact from './Components/Contact';
import { useTranslation } from 'react-i18next';
import '../src/Styles/Css/AppStyle.css';

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <NavBar />
      <div>
        <button onClick={() => changeLanguage('sv')}>Svenska</button>
        <button onClick={() => changeLanguage('en')}>English</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
