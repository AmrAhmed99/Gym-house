import React from 'react';
import { Link } from 'react-router-dom';

import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className='footer-section'>
            <div className='socialMedia-links'>
                <Link to='https://github.com/'><img src={Github} alt="Github" /></Link>
                <Link to='https://www.instagram.com/'><img src={Instagram} alt="Instagram" /></Link>
                <Link to='https://www.linkedin.com/'><img src={LinkedIn} alt="LinkedIn" /></Link>
            </div>

            <div className='footer-logo'>
                <Link to='/'><img src={Logo} alt="fit club" /></Link>
            </div>
        </div>
    </div>
  );
}

export default Footer;
