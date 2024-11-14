import React, { useEffect, useState } from 'react';
import '../../styles/Header.css';
import NavBar from './Navbar'; 

const Header = ({isHome}) => { 
    const [isVisible, setIsVisible] = useState(!isHome); 
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 480);

    const links = [
        { name: 'About us', path: '/aboutus', id: crypto.randomUUID() },
        { name: 'Contact us', path: '/contactus', id: crypto.randomUUID() },
        { name: 'Log in', path: '/login', id: crypto.randomUUID() },
        { name: 'Projects', path: '/projects', id: crypto.randomUUID() }
    ];

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (window.innerWidth >= 480) { 
            if (currentScrollY > lastScrollY && currentScrollY > 40) {
                // Scroll hacia abajo
                setIsVisible(true);
            } else if (currentScrollY < lastScrollY && currentScrollY === 0) {
                // Si estamos en la parte superior de la página
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Scroll hacia arriba
                setIsVisible(true);
            }
        }

        setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
        const isSmall = window.innerWidth < 480;
        setIsSmallScreen(isSmall);
    };

    useEffect(() => {

        if(!isHome){
            setIsVisible(true)
        }else {
            setIsVisible(false)
        }
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [lastScrollY, isHome]);

    return (
        <header  isHome={true} className={`headertop ${isVisible ? 'visible' : 'invisible'}`} >
            <NavBar linkNames={links} isMenuOpen={isSmallScreen} />
        </header>
    );
};

export default Header;
