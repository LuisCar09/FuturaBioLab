
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css'; 

const NavBar = ({linkNames}) => {
    
    
    return (
        
            <nav className="navbar">
                <ul>
                    {linkNames.map(link => {
                        const {name,path,id} = link
                        return <li key={id} ><Link to={path}>{name}</Link></li>
                    })}
                    
                </ul>
            </nav>
        
    );
};

export default NavBar;
