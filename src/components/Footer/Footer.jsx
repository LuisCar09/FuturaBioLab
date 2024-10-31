import React, { useEffect, useState } from 'react';
import '../../styles/Footer.css';
import ContactInfo from './ContactInfo';
import ImportantLinks from './ImportantLinks';
import SocialLinks from './SocialLinks';
import Sitemap from './Sitemap';

const Footer = ({contactInfo,importantLinks,socialLinks,site}) => {
    {/*  const [showLine, setShowLine] = useState(false);
    
  const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.body.scrollHeight; 
        //window.scrollY retorna la posición vertical actual del scroll.
        //window.innerHeight retorna la altura de la visible del navegador.
       
        if (scrollPosition >= documentHeight) { // Comparar directamente con documentHeight
            setShowLine(true);
        } else {
            setShowLine(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
*/}

    return (
        <footer className='footer'>
        <div className="footer-container">
                <ContactInfo />
                <ImportantLinks />
                <SocialLinks />
                <Sitemap />
               

            <div className="footer-credits">
                <p>&copy; {new Date().getFullYear()} Futura BioLab. All rights reserved.</p>
            </div>
        </div>
        
        {/* Scroll line 
        <div className={`scroll-line ${showLine ? 'active' : ''}`}></div>*/}
    </footer>  
    )
     
}
export default Footer;

