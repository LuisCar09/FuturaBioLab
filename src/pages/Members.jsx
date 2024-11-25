import '../styles/Members.css';
import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

function Members() {
    const members = [
        {
            id: '672bfd4efc4152e7e9adb7ef',
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'barby_malybu',
            role: 'Administrator',
            followers: 1000,
            follows: 1,
        },
        {
            id: 2,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'lusicar-mipana',
            role: 'Administrator',
            followers: 1,
            follows: 1,
        },
        {
            id: 1,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'barby_malybu',
            role: 'Administrator',
            followers: 1000,
            follows: 1,
        },
        {
            id: 2,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'lusicar-mipana',
            role: 'Administrator',
            followers: 1,
            follows: 1,
        },
        {
            id: 3,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'barby_malybudos',
            role: 'Administrator',
            followers: 1000,
            follows: 1,
        },
        {
            id: 4,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'lusicar-mipanados',
            role: 'Administrator',
            followers: 1,
            follows: 1,
        },
        {
            id: 5,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'barby_malybutres',
            role: 'Administrator',
            followers: 1000,
            follows: 1,
        },
        {
            id: 6,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'lusicar-mipanatres',
            role: 'Administrator',
            followers: 1,
            follows: 1,
        },
        {
            id: 7,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'barby_malybu',
            role: 'Administrator',
            followers: 1000,
            follows: 1,
        },
        {
            id: 8,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'lusicar-mipana',
            role: 'Administrator',
            followers: 1,
            follows: 1,
        },
        {
            id: 9,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'barby_malybu',
            role: 'Administrator',
            followers: 1000,
            follows: 1,
        },
        {
            id: 10,
            imgSrc: 'https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg',
            name: 'lusicar-mipana',
            role: 'Administrator',
            followers: 1,
            follows: 1,
        },
    ];

    const [allMembers, setallMembers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [sortedMembers, setSortedMembers] = useState([])

    const className = isOpen ? 'allmembers-members' : 'notopen-members';

    
      setTimeout(() => {
          setallMembers(members)
      }, 2000);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSort = () => {
        const sorted = [...allMembers].sort((a, b) => a.name.localeCompare(b.name));
        setSortedMembers(sorted);
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
                        <button onClick={handleSort}>Sort Alphabetically</button>
                    </div>
                )}
                <p>All members</p>
            </div>
            
            <article className='members-container'>
                {allMembers.length === 0 ? (
                    <p>...Cargando</p>
                ) : (
                    (isOpen ? sortedMembers : allMembers).map((selectedMember) => (
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
};

export default Members;