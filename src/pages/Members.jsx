import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import SearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles/Members.css';
import '../styles/Spinner.css'

function Members() {
    const [allMembers, setAllMembers] = useState([]);
    const allMemberRef = useRef()
    const [inputValue, setInputValue] = useState('')

    const fetchMembers = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users');
            setAllMembers(response.data);
            allMemberRef.current = response.data
            
            
        } catch (error) {
            console.error(error);
        }
    };
 
   
    
    
    const fetchByNameMembers = async (userName) => {
        try {
            
            !userName ? setAllMembers(allMemberRef.current) : null
            const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/username/' + userName);
            !response.data  ? '' : setAllMembers(response.data)

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

   


   

    return (
        <main className='main-members'>
            <section className='section-members'>
                <div className='members-title'>
                    <div className='search-container'>
                        <input type='text' placeholder='Search user'  onChange={(e) => setInputValue(e.target.value)} value={inputValue} />

                        <SearchIcon />
                    </div>

                </div>

                <article className= {!allMembers || allMembers.length < 1 ? 'members-container-loading' :'members-container' } >
                    {!allMembers || allMembers.length < 1 ? (
                        <Spinner />
                    ) : (
                        allMembers.map((selectedMember) => (
                            <div key={selectedMember._id} className='selected-member'>
                                <div className='icon-container'>
                                    <MoreVertIcon className='moreverticon-member' />
                                </div>
                                
                                    <img src={selectedMember.image} alt={selectedMember.name} />
                                
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
                                    <Link to={`/members/${selectedMember._id}`} className='button-members'>
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