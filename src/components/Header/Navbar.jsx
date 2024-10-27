import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css'; 

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false); // Inicialmente invisible
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Si el usuario está en la parte superior de la página (currentScrollY es 0), 
        //navbar se oculta (setIsVisible(false)).
        if (currentScrollY === 0) {
            setIsVisible(false);
        }
        // Si el usuario se está desplazando hacia abajo (la posición actual es mayor que la última),
        // y la posición actual del scroll es mayor de 60px, el navbar es visible.
        else if (currentScrollY > lastScrollY && currentScrollY > 40) {
            setIsVisible(true);
        }
       // Si el usuario se está desplazando hacia abajo (la posición actual es mayor que la última),
        // y la posición actual del scroll es mayor de 60px, el navbar es visible.
        else if (currentScrollY < lastScrollY && currentScrollY > 40) {
            setIsVisible(true);
        }
        // Si el usuario se desplaza hacia arriba y está en la parte superior (menos de 60px),
        // el navbar se oculta.
        else if (currentScrollY < lastScrollY && currentScrollY <= 40) {
            setIsVisible(false);
        }

        setLastScrollY(currentScrollY); // Actualiza la última posición de scroll
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);//llamamos a la función handleScroll que nos muestra o oculta el navbar
        return () => {
            window.removeEventListener('scroll', handleScroll);//Cuando este componente ya no esté visible, deja de escuchar el evento de scroll
        };
    }, []); //e la función solo se ejecutará una vez cuando se muestre por primera vezy no volverá a ejecutarse en actualizaciones posteriores.

    return (
        <header className={`navbar-container ${isVisible ? 'visible' : 'invisible'}`}>
            <nav className="navbar">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About us</Link></li>
                    <li><Link to='/contacto'>Contact us</Link></li>
                    <li><Link to='/login'>Log in</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
