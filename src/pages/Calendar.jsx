import '../styles/Calendar.css'
import Calendar from 'react-calendar'
import VideocamIcon from '@mui/icons-material/Videocam';

function CalendarPage(){
    return (
      <main className='main-calendar'>
        <section className='section-calendar'>
            <article className='articletop-calendar'>
                <div className='title-calendar'>
                    <h1>Service name</h1>
                    <p>Check our availability and book your preferred date and time</p>
                    <nav className='navbar-calendar'>
                        <p>Filter by</p>
                        <p>Location</p>
                        <p>Member</p>
                    </nav>
                </div>

            </article>
            <article className='articlebottom-calendar'>

                <div className='calendar-calendar'>
                    <h2>Select date and time</h2>
                    <div className="calendar">
      <div className="month">
        <h2>November 2024</h2>
      </div>
      <div className="days">
        <div className="day">Sun</div>
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
        <div className="dayempty"></div>
        <div className="dayempty"></div>
        <div className="dayempty"></div>
        <div className="dayempty"></div>
        <div className="dayempty"></div>
        <div className="day">1</div>
        <div className="day">2</div>
        <div className="day">3</div>
        <div className="day">4</div>
        <div className="day">5</div>
        <div className="day">6</div>
        <div className="day">7</div>
        <div className="day">8</div>
        <div className="day">9</div>
        <div className="day">10</div>
        <div className="day">11</div>
        <div className="day">12</div>
        <div className="day">13</div>
        <div className="day">14</div>
        <div className="day">15</div>
        <div className="day">16</div>
        <div className="day">17</div>
        <div className="day">18</div>
        <div className="day">19</div>
        <div className="day">20</div>
        <div className="day">21</div>
        <div className="day">22</div>
        <div className="day">23</div>
        <div className="day">24</div>
        <div className="day">25</div>
        <div className="day">26</div>
        <div className="day">27</div>
        <div className="day">28</div>
        <div className="day">29</div>
        <div className="dayempty"></div>
        <div className="dayempty"></div>
      </div>
    </div>
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
                    <button>Next</button>

                    </div>
                </div>

            </article>

        </section>

      </main>
    )
}

export default CalendarPage
