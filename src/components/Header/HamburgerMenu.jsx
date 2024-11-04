import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css'

const HamburgerMenu = ({ links, onClose }) => {
    return (
        <nav className="navbar-mobile">
            <ul className="mobile-menu">
                {links.map(({ name, path, id }) => (
                    <li key={id} onClick={onClose}> 
                        <Link to={path}>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HamburgerMenu;