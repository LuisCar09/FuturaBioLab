import '../styles/Members.css';
import { useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Members() {
    const [allMembers, setAllMembers] = useState([]);
    const [show, setShow] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [sortedMembers, setSortedMembers] = useState([]);
    const [inputValue, setInputValue] = useState('')

    const fetchMembers = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users');
            setAllMembers(response.data);
            setShow(response.data); 
        } catch (error) {
            console.error( error);
        }
    };
    
    const fetchByNameMembers = async (userName) => {
        try {
            
            const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/username/' + userName);
            console.log(response.data);
            
            
        } catch (error) {
          console.error(error.message)   
        }
    }
    useEffect(() => {
        fetchMembers();
    }, []);
    useEffect(() => {
        fetchByNameMembers(inputValue)
    }, [inputValue]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    
    const handleSort = () => {
        const sorted = [...allMembers].sort((a, b) => a.name.localeCompare(b.name));
        // setSortedMembers(sorted);
        // setShow(sorted);
        // setIsOpen(true);
    };

    return (
        <main className='main-members'>
            <section className='section-members'>
                <div className='members-title'>
                    <div className='search-container'>
                    <input type='text' placeholder='Search user' onChange={(e) => setInputValue(e.target.value)} value={inputValue}  />
                    
                    <SearchIcon />
                    </div>
                    
                </div>

                <article  className='members-container'>
                    {allMembers.length === 0 ? (
                        <p>...Cargando</p>
                    ) : (
                        allMembers.map((selectedMember) => (
                            <div key={selectedMember._id} className='selected-member'>
                                <div className='icon-container'>
                                    <MoreVertIcon className='moreverticon-member' />
                                </div>
                                {selectedMember.image ? (
            <img src={selectedMember.image} alt={selectedMember.name} />
        ) : (
            <p>No image available</p> // Mensaje alternativo si no hay imagen
        )}
                                <div className='member-details'>
                                    <div className='member-username'>
                                        <h3>{selectedMember.userName}</h3>
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