import { Link } from 'react-router-dom';

const NavLinks = ({ linkNames,classForUl,handlerClick }) => {
    return (
        <ul className={classForUl} >
            {linkNames && linkNames.length > 0 && linkNames.map(({ name, path, id }) => (
                <li key={id} onClick={handlerClick } ><Link to={path}>{name}</Link></li>
            ))}
        </ul>
    );
};

export default NavLinks;