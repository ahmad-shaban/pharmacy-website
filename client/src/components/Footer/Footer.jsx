import React from 'react';
import './Footer.css';
import logo from '../../assets/medicine (1).svg';
import facebook from '../../assets/facebook.svg';
import instgram from '../../assets/instagram_icon.png';
import pinterest from '../../assets/pintester_icon.png';
import whatsapp from '../../assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>Dawa2y</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="social-icons">
        <div className="social-icon-container">
          <img src={facebook} alt="" />
        </div>
        <div className="social-icon-container">
          <img src={instgram} alt="" />
        </div>
        <div className="social-icon-container">
          <img src={pinterest} alt="" />
        </div>
        <div className="social-icon-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyrights">
        <hr />
        <p>Copyrights @ 2024 all rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
