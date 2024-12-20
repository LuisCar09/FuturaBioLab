import React, { useState } from 'react';
import SocialLinks from './SocialLinks'; 
import ContactInfo from './ContactInfo';
import Sitemap from './Sitemap';
import ImportantLinks from './ImportantLinks';
import '../../styles/Footer.css'

const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <footer className='footer'>
            <div className="footer-container">
               
                    <article className="footer-article">
                        <ContactInfo />
                    </article>
                    <article className="footer-article">
                        <ImportantLinks />
                    </article>
                    <article className="footer-article">
                    <SocialLinks />
                    </article>
               
                {/* <div className={`social-menu ${isMenuOpen ? 'showMenu' : ''}`}>
                    <SocialLinks />
                </div> */}
            </div>
            <div className="footer-credits">
                <p>&copy; {new Date().getFullYear()} Futura BioLab. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

