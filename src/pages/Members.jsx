import '../styles/Members.css';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Members() {
    const members = [
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
    ];

    const [allMembers, setallMembers] = useState(''); // Inicia con el primer miembro
    const [isOpen, setIsOpen] = useState(false);

    setTimeout(() => {
        setallMembers(members)
    }, 2000);

    

    return (
        <main className='main-members'>
            <section className='section-members'>
                <div className='members-title'>
                    <button >
                        All members
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
                <article className='members-container'>
                    {!allMembers ?
                    <p>...Cargando</p> 
                    : 
                    (allMembers.map((selectedMember,index) => {
                        return(
                            <div key={index} className='selected-member'>
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
                                            <p className='number-follow-member'> {selectedMember.followers}</p>
                                            <p>Followers </p>
                                        </div>
                                        <div className='follows-member'>
                                            <p className='number-follow-member'>{selectedMember.follows}</p>
                                            <p>Follows</p>
                                        </div>
                                    </div>
                                    <button className='button-members'>My profile</button>
                                </div>
                            </div>
                        )
                    }))}
                    
                    

                    
                </article>
            </section>
        </main>
    );
}

export default Members;



