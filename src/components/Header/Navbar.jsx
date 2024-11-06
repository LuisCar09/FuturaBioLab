import '../../styles/NavBar.css';
import { Link } from 'react-router-dom';
import Logo from './Logo'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const NavBar = ({ linkNames, isMenuOpen }) => {
    console.log(isMenuOpen);
    const [showMenu,setShowMenu] = useState(false)
    const clickHandler = () => {
        setShowMenu(!showMenu)
        
    }
    return (
        <nav className={`navbar`}>

            <Logo />
            {!isMenuOpen ? (<ul>
                {linkNames && linkNames.length > 0 ? (
                    linkNames.map(({ name, path, id }) => (
                        <li key={id}><Link to={path}>{name}</Link></li>
                    ))
                ) : (
                    <li>No links available</li>
                )}
            </ul>)
            :
            (   
                <>
                <MenuIcon  onClick={clickHandler} />
                <div style={!showMenu ? {display:'none'} : {display:'block'} } className='menu-display'>
                
                <div className='close-container'>
                    <div>
                    <CloseIcon onClick={clickHandler} />
                    </div>

                </div>
                </div>
                </>
                   
            )
            }

            


        </nav>

    );
};

export default NavBar;

// {isSmallScreen ? (
//     <>
        
        
//     </>
// ) : ''}


  //     {!isMenuOpen ?
        //         <>
        //             <Logo />
        //             <ul>
        //                 {linkNames && linkNames.length > 0 ? (
        //                     linkNames.map(({ name, path, id }) => (
        //                         <li key={id}><Link to={path}>{name}</Link></li>
        //                     ))
        //                 ) : (
        //                     <li>No links available</li>
        //                 )}
        //             </ul>
        //         </> 
        //         :
        //         <>
        //             <div className={`menu-list ${isMenuOpen ? 'showMenu' : ''}`}>
        //                 <header className="menu-header">
        //                     <button className="close-menu--list" onClick={toggleMenu}>☰</button>
        //                 </header>
        //                 <HamburgerMenu links={links} onClose={() => setIsMenuOpen(false)} />
        //                 <footer>

        //                 </footer>
        //             </div>

        //             <button className="navbar-hamburger" onClick={toggleMenu}>
        //                 ☰
        //             </button>

        //         </>
        //     }


        // {isMenuOpen && (
        //     <div className={`menu-list ${isMenuOpen ? 'showMenu' : ''}`}>
        //         <header className="menu-header">
        //             <button className="close-menu--list" onClick={toggleMenu}>☰</button>
        //         </header>
        //         {/* <HamburgerMenu links={links} onClose={() => setIsMenuOpen(false)} /> */}
        //         <footer>

        //         </footer>
        //         <button className="navbar-hamburger" onClick={toggleMenu}>
        //             ☰
        //         </button>
        //     </div>)

                
        // }