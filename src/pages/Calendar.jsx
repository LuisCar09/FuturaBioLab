import '../styles/Calendar.css'
import { Link, useNavigate } from 'react-router-dom';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useState } from 'react';

function CalendarPage() {
    const [selectedHour, setSelectedHour] = useState('');
    const navigate = useNavigate(); 

    const handleHourClick = (hour) => {
        if (selectedHour === hour) {
            setSelectedHour('');
        } else {
            setSelectedHour(hour);
        }
    };
    console.log(selectedHour)

    const handleNextClick = () => {
        if (selectedHour) {
            
            navigate('/reservation' ,{selectedHour}); 
        } else {
            alert('Please, select an hour to continue');
        }
    };

const hours = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00','7:00', '8:00','9:00']

const groupedHours = [];
for (let i = 0; i < hours.length; i += 2) {
    groupedHours.push(hours.slice(i, i + 2));

 console.log(groupedHours) 
}

    return (
        <main className='main-calendar'>
            <section className='section-calendar'>
                <article className='articletop-calendar'>
                    <h1>Service name</h1>
                    <div className='article-description-servicedetail'>
                        <h2>Service description</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus exercitationem, vitae quidem nulla cupiditate tempora, ipsum, vero et optio alias amet a ab sequi quo voluptate deleniti quae aspernatur.</p>
                        <img src='https://upliftproject.eu/wp-content/uploads/2021/11/workshop-uplift-october.jpg' alt='Service'/>
                    </div>
                    <nav className='navbar-calendar'>
                        <p>Filter by</p>
                        <p>Location</p>
                        <p>Member</p>
                    </nav>
                </article>
                <article className='articlebottom-calendar'>
                    <div className='input-calendar'>
                        <input 
                            id='calendar'
                            type='date'
                        />
                    </div>
                    <div className='hour-calendar'>
                        <h3>Standar hour of central Europe</h3>
                        <p>November 23th, Saturday</p>
                        <div className='hourservice-calendar'>
                          {groupedHours.map((pair) => (
                             <div key={pair[0]} className='hour-pair'>
                            {pair.map((hour) => (
                            <div 
                             key={hour} 
                            className='timeservice-calendar' 
                            onClick={() => handleHourClick(hour)}>
                             
                              <p className={selectedHour === hour ? 'selected' : ''}>{hour}</p>
                         </div>
                          ))}
                        </div>
                          ))}
                        </div>
                    </div>
                    <div className='servicedetail-calendar'>
                        <h3>Service detail</h3>
                        <div className='detailicon-calendar'>
                            <VideocamIcon />
                            <p>Available online</p>
                        </div>
                        <div className='infoservice-calendar'>
                            <h4>Service name</h4> 
                            <p>Location</p>
                            <p>Member</p>
                            <p>Duration</p>
                            <p>Price</p>
                        </div>
                        <div className='button-calendar'>
                            <button onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default CalendarPage;
