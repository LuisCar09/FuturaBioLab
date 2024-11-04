import '../../styles/Header.css';
import NavBar from './Navbar'; 
import Logo from './Logo'; 
import React, { useEffect, useState } from 'react';

const Header = () => { 
    const [isVisible, setIsVisible] = useState(false); // Inicialmente invisible
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0); 

    const links = [
        {name: 'About us', path: '/aboutus', id: crypto.randomUUID()},
        {name: 'Contact us', path: '/contactus', id: crypto.randomUUID()},
        {name: 'Log in', path: '/login', id: crypto.randomUUID()},
        {name: 'Projects', path: '/projects', id: crypto.randomUUID()} 
    ];

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
            setIsVisible(false);
        } else if (currentScrollY > lastScrollY && currentScrollY > 40) {
            setIsVisible(true);
        } else if (currentScrollY < lastScrollY && currentScrollY > 40) {
            setIsVisible(true);
        } else if (currentScrollY < lastScrollY && currentScrollY <= 40) {
            setIsVisible(false);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    // Comprobamos el tamaño de la ventana
    const isSmallScreen = window.innerWidth < 768; // Ajusta el ancho según tus necesidades

    return (
        <header className={`navbar-container ${isVisible ? 'visible' : 'invisible'}`}>
            <Logo />
            {isSmallScreen && (
                <>
                    <button className="navbar-hamburger" onClick={toggleMenu}>
                        ☰
                    </button>
                    {isMenuOpen && (
                        <NavBar linkNames={links} isMobile={links} /> 
                    )}
                </>
            )}
            {!isSmallScreen && <NavBar linkNames={links} />}
        </header>
    );
};

export default Header;
