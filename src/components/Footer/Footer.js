import React from 'react';
import './Footer.css'; // Create a CSS file for styles

// Import the images from the assets folder
import instagramLogo from '../../assets/logo/instagram.png';
import facebookLogo from '../../assets/logo/facebook.png';
import linkedinLogo from '../../assets/logo/linkedin.png';
import googlePlusLogo from '../../assets/logo/google-plus.png';
import phoneLogo from '../../assets/logo/telephone.png';

const Footer = () => {
  return (
    <footer className="ss">
      <div style={{ width: '100%', background: 'rgb(0, 0, 0)', height: '100%', alignItems: 'center', textAlign: 'center' }}>
        <a href="https://www.instagram.com/sakly.adem/?hl=fr" target="_blank" rel="noopener noreferrer">
          <img className="kaka1" src={instagramLogo} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/Sakli10/" target="_blank" rel="noopener noreferrer">
          <img className="kaka" src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/adem-sakli-269190201/" target="_blank" rel="noopener noreferrer">
          <img className="kaka" src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a href="mailto:sakliadem94@gmail.com">
          <img className="kaka" src={googlePlusLogo} alt="Google Plus" />
        </a>
        <a href="tel:+33773576489">
          <img className="kaka" src={phoneLogo} alt="Phone" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
