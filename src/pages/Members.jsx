import '../styles/Members.css';
import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Members() {
    const [allMembers, setAllMembers] = useState([]);
    const [show, setShow] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [sortedMembers, setSortedMembers] = useState([]);

    useEffect(() => {
        
        const fetchMembers = async () => {
            try {
                const response = await axios.get(`import.meta.env.VITE_URL_API_FUTURA_BIOLAB/${members}`);
                console.log(import.meta.env.VITE_URL_API_FUTURA_BIOLAB)
                setAllMembers(response.data);
                setShow(response.data); 
            } catch (error) {
                console.error( error);
            }
        };

        fetchMembers();
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSort = () => {
        const sorted = [...allMembers].sort((a, b) => a.name.localeCompare(b.name));
        setSortedMembers(sorted);
        setShow(sorted);
        setIsOpen(true);
    };

    return (
        <main className='main-members'>
            <section className='section-members'>
                <div className='members-title'>
                    <button onClick={toggleDropdown}>
                        Order by
                        <KeyboardArrowDownIcon />
                    </button>
                    {isOpen && (
                        <div className='dropdown-menu'>
                            <button className='sortButton-member' onClick={handleSort}>
                                Sort Alphabetically
                            </button>
                        </div>
                    )}
                </div>

                <article className='members-container'>
                    {show.length === 0 ? (
                        <p>...Cargando</p>
                    ) : (
                        show.map((selectedMember) => (
                            <div key={selectedMember.id} className='selected-member'>
                                <div className='icon-container'>
                                    <MoreVertIcon className='moreverticon-member' />
                                </div>
                                <img src={selectedMember.imgSrc} alt={selectedMember.name} />
                                <div className='member-details'>
                                    <div className='member-username'>
                                        <h3>{selectedMember.name}</h3>
                                        <p>{selectedMember.role}</p>
                                    </div>
                                    <div className='followers-follows-member'>
                                        <div className='followers-member'>
                                            <p className='number-follow-member'>{selectedMember.followers}</p>
                                            <p>Followers</p>
                                        </div>
                                        <div className='follows-member'>
                                            <p className='number-follow-member'>{selectedMember.follows}</p>
                                            <p>Follows</p>
                                        </div>
                                    </div>
                                    <Link to={`/members/${selectedMember.id}`} className='button-members'>
                                        My profile
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </article>
            </section>
        </main>
    );
}

export default Members;