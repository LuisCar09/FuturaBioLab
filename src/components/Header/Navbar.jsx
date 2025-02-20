import '../../styles/NavBar.css';
import Logo from './Logo'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import NavLinks from './NavLinks';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const NavBar = ({ linkNames, isMenuOpen }) => {
    const [showMenu, setShowMenu] = useState(false);

    const clickHandler = () => {
        setShowMenu(!showMenu);
    };



    return (
        <nav className={`navbar`}>
        <Logo />
        <div className='nav-container'>
            <NavLinks linkNames={linkNames} classForUl={'navbar-ul'} />
            <div className='cart-icon'>
                <Link to="/mycart">
                    <ShoppingCartIcon />
                </Link>
            </div>
        </div>
        <div className='menu-icon' onClick={clickHandler}>
            <MenuIcon />
        </div>
        <HamburgerMenu
            linkNames={linkNames}
            showMenu={showMenu}
            clickHandler={clickHandler}
        />
    </nav>
    );
};

export default NavBar;
