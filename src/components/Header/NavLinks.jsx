import { Link } from 'react-router-dom';

const NavLinks = ({ linkNames }) => {
    return (
        <ul>
            {linkNames && linkNames.length > 0 && linkNames.map(({ name, path, id }) => (
                <li key={id}><Link to={path}>{name}</Link></li>
            ))}
        </ul>
    );
};

export default NavLinks;