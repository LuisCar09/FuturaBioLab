import '../../styles/NavBar.css';
import { Link } from 'react-router-dom';
import Logo from './Logo'

const NavBar = ({ linkNames }) => {
    return (
        <nav className={`navbar`}>
             <Logo />
            <ul>
                {linkNames && linkNames.length > 0 ? (
                    linkNames.map(({ name, path, id }) => (
                        <li key={id}><Link to={path}>{name}</Link></li>
                    ))
                ) : (
                    <li>No links available</li> 
                )}
            </ul>
        </nav>
    );
};

export default NavBar;