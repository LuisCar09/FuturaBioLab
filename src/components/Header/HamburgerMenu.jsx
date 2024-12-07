import CloseIcon from '@mui/icons-material/Close';
import NavLinks from './NavLinks';

const HamburgerMenu = ({ linkNames, showMenu, clickHandler }) => {
    return (
        <div className={`menu-display ${showMenu ? 'visible' : 'hidden'}`}>
            <div className='close-container'>
                <div>
                    <CloseIcon onClick={clickHandler} />
                </div>
            </div>
             <NavLinks linkNames={linkNames} />
             
        </div>
    );
};

export default HamburgerMenu;