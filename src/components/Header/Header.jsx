import React, { useEffect, useState } from 'react';
import '../../styles/Header.css';
import NavBar from './Navbar'; 
import HamburgerMenu from './HamburgerMenu'; 

const Header = () => { 
    const [isVisible, setIsVisible] = useState(false); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            if (currentScrollY === 0) {
                setIsVisible(false);
            } else if (currentScrollY > lastScrollY && currentScrollY > 40) {
                setIsVisible(true);
            } else if (currentScrollY < lastScrollY && currentScrollY > 40) {
                setIsVisible(true);
            } else if (currentScrollY < lastScrollY && currentScrollY <= 40) {
                setIsVisible(false);
            }
        }

        setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
        const isSmall = window.innerWidth < 480;
        setIsSmallScreen(isSmall);
        if (!isSmall) {
            setIsMenuOpen(false); 
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    return (
        <nav className={`navbar-container ${isVisible ? 'visible' : 'invisible'}`}>
            {isSmallScreen ? (
                <>
                    
                    <div className={`menu-list ${isMenuOpen ? 'showMenu' : ''}`}>
                        <header className="menu-header">
                            <button className="close-menu--list" onClick={toggleMenu}>☰</button>
                        </header>
                        <HamburgerMenu links={links} onClose={() => setIsMenuOpen(false)} /> 
                    </div>
                    {!isMenuOpen && ( 
                        <button className="navbar-hamburger" onClick={toggleMenu}>
                            ☰
                        </button>
                    )}
                </>
            ) : (
                <NavBar linkNames={links} />
            )}
        </nav>
    );
};

export default Header;
