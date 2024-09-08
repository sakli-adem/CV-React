import React, { useEffect, useState } from 'react';
import './Header.css'; // Ensure this file contains relevant styles

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const scrollUpBtn = document.querySelector('.scroll-up-btn');

      // Sticky navbar on scroll
      if (window.scrollY > 5) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }

      // Scroll-up button show/hide
      if (window.scrollY > 500) {
        scrollUpBtn.classList.add('show');
      } else {
        scrollUpBtn.classList.remove('show');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="#">Sakli Adem</a>
          </div>
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="menu-btn" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="menu-btn" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#mi" className="menu-btn" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#project" className="menu-btn" onClick={() => setMenuOpen(false)}>Project</a></li>
            <li><a href="#certif" className="menu-btn" onClick={() => setMenuOpen(false)}>Certificat</a></li>
            <li><a href="#contact" className="menu-btn" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
