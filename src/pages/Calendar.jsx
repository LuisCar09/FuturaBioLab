import '../styles/Calendar.css'
import { Link } from 'react-router-dom';
import VideocamIcon from '@mui/icons-material/Videocam';

function CalendarPage(){
    return (
      <main className='main-calendar'>
        <section className='section-calendar'>
            <article className='articletop-calendar'>
                
                    <h1>Service name</h1>
                    <div className='article-description-servicedetail'>
                <h2>Service description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus exercitationem, vitae quidem nulla cupiditate tempora, ipsum, vero et optio alias amet a ab sequi quo voluptate deleniti quae aspernatur.</p>
                <img src='https://upliftproject.eu/wp-content/uploads/2021/11/workshop-uplift-october.jpg' />
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
                    type='date'/>

                </div>

            
                <div className='hour-calendar'>
                    <h3>Standar hour of central Europe</h3>
                    <p>November 23th, Saturday</p>
                    <div className='hourservice-calendar'>
                        <div className='timeservice-calendar'>
                            <p>0:00</p>
                            <p>1:00</p>
                        </div>
                        <div className='timeservice-calendar'>
                            <p>0:00</p>
                            <p>1:00</p>
                        </div>
                        <div className='timeservice-calendar'>
                            <p>0:00</p>
                            <p>1:00</p>
                        </div>
                        <div className='timeservice-calendar'>
                            <p>0:00</p>
                            <p>1:00</p>
                        </div>
                        <div className='timeservice-calendar'>
                            <p>0:00</p>
                            <p>1:00</p>
                        </div>

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
                    <button> <Link to='/reservation' className='link-calendar'>Next</Link></button>

                    </div>
                </div>

            </article>

        </section>

      </main>
    )
}

export default CalendarPage
