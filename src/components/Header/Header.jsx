import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Header.css';
import NavBar from './Navbar'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => { 
    
    const location = useLocation()
    const isHomePage = location.pathname !== '/' ? false : true
    const [isVisible, setIsVisible] = useState(false); 
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 480);
    const token = localStorage.getItem('authToken') 



    const links = [
        { name: 'Projects', path: '/projects', id: crypto.randomUUID() },
        { name: 'About us', path: '/aboutus', id: crypto.randomUUID() },
        { name: 'Contact us', path: '/contactus', id: crypto.randomUUID() },
        
        
        
    ];
    token ? 
    links.push(
    { name: !token ? '' : 'Members', path: !token ? '' : '/members', id: crypto.randomUUID() },
    { name: !token ? '' : 'Services', path: !token ? '' : '/services', id: crypto.randomUUID() },
    { name: !token ? '' : 'My profile', path: !token ? '' : '/profile', id: crypto.randomUUID() },
    { name: !token ? 'Login' : 'Log out', path: !token ? '/login' : '/logout', id: crypto.randomUUID() },
   
    )
    :
    links.push(
        { name: 'Login', path: '/login' , id: crypto.randomUUID() },
    
    )
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

    // const handleResize = () => {
    //     const isSmall = window.innerWidth < 480;
    //     setIsSmallScreen(isSmall);
    // };

    // useEffect(() => {

    
    //     !isVisible ? setIsVisible(false) : setIsVisible(true)

    //     window.addEventListener('scroll', handleScroll);
    //     // window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         // window.removeEventListener('resize', handleResize);
    //     };
    // }, [lastScrollY]);

    return (

        !isHomePage ? (
        <header   className={`headertop-fixed`} >
        <NavBar linkNames={links} isMenuOpen={isSmallScreen} />
        </header>) 
        : 
        (
        <header   className={`headertop visible `} >
        <NavBar linkNames={links} isMenuOpen={isSmallScreen} />
        
        
        </header>
        )

        
    );
};

export default Header;
