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
    ];

    const [selectedMember, setSelectedMember] = useState(members[0]); // Inicia con el primer miembro
    const [isOpen, setIsOpen] = useState(false);

    const toggleMembersList = () => {
        setIsOpen(!isOpen);
    };

    const handleMemberSelect = (member) => {
        setSelectedMember(member);
        setIsOpen(false); // Cierra la lista cuando has seleccionado el que quieras
    };

    return (
        <main className='main-members'>
            <section className='section-members'>
                <div className='members-title'>
                    <button onClick={toggleMembersList}>
                        {isOpen ? 'See less' : 'All members'}
                        <KeyboardArrowDownIcon />
                    </button>
                </div>

                <div className='selected-member'>
                    <MoreVertIcon  className='moreverticon-member'/>
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

                {isOpen && (
                    <div className='selected-member'>
                        {members.map((member) => (
                            <div 
                                className='member-item' 
                                key={member.id} 
                                onClick={() => handleMemberSelect(member)} // selecciona el member que quieras
                            >
                                <MoreVertIcon className='moreverticon-member' />
                                <img src={member.imgSrc} alt={member.name} />
                                <div className='member-username'>
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                                <div className='followers-follows-member'>
                                    <div className='followers-member'>
                                         
                                          <p className='number-follow-member'> {member.followers}</p>
                                          <p>Followers </p> 
                                             
                                    </div>
                                    <div className='follows-member'>
                                        <p>{member.follows}</p>
                                        <p className='number-follow-member'>Follows</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}

export default Members;



