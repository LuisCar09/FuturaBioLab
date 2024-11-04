import '../../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ linkNames }) => {
    return (
        <nav className={`navbar`}>
            <ul>
                {linkNames && linkNames.length > 0 ? (
                    linkNames.map(({ name, path, id }) => (
                        <li key={id}><Link to={path}>{name}</Link></li>
                    ))
                ) : (
                    <li>No links available</li> // Mensaje alternativo si no hay enlaces
                )}
            </ul>
        </nav>
    );
};

export default NavBar;