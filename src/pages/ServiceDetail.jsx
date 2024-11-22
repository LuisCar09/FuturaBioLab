import '../styles/ServiceDetail.css'

function ServiceDetail(){
    return(
       <main className='main-servicedetail'>
        <section className='section-servicedetail'>
            <aritcle className='article-title-servicedetail'>
                <div className='title-servicedetail'>

                <h1>Service title</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem repellat ipsa quam sequi, sint porro cum consequatur earum! Quaerat autem officia magni doloremque sapiente labore est quam et nulla?</p>
                </div>
                <div className='duration-servicedetail'>
                    <p>Duration</p>
                    <p>Price</p>
                    <p>Location</p>
                </div>
                <div className='seatscontainer-servicedetail'>
                  
                   <p className='available-seats-servicedetail'>Available seats</p>
                   <button className='buttonreserve-servicedetail'>Reserve now</button>
                  
                </div>

            </aritcle>
            <aritcle className='article-description-servicedetail'>
                <h2>Service description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus exercitationem, vitae quidem nulla cupiditate tempora, ipsum, vero et optio alias amet a ab sequi quo voluptate deleniti quae aspernatur.</p>
                <img src='https://upliftproject.eu/wp-content/uploads/2021/11/workshop-uplift-october.jpg' />
                
            </aritcle>
            <aritcle className='article-session-servicedetail'>
                <h3>Next sessions</h3>
                <div className='datecontainer-servicedetail'>
                 <div className='datesession-servicedetail'>
                    <div className='date-servicedetail'>

                  <p>22 Nov</p>
                  <p>Friday</p>
                    </div>
                  <div className='time-servicedetail'>
                  <p>11:00</p>
                  <p>45 min</p>
                  </div>
                  <p>member</p>
                </div>
                <div className='datesession-servicedetail'>
                    <div className='date-servicedetail'>

                  <p>22 Nov</p>
                  <p>Friday</p>
                    </div>
                  <div className='time-servicedetail'>
                  <p>11:00</p>
                  <p>45 min</p>
                  </div>
                  <p>member</p>
                </div>
                <div className='datesession-servicedetail'>
                    <div className='date-servicedetail'>

                  <p>22 Nov</p>
                  <p>Friday</p>
                    </div>
                  <div className='time-servicedetail'>
                  <p>11:00</p>
                  <p>45 min</p>
                  </div>
                  <p>member</p>
                </div>
                <div className='datesession-servicedetail'>
                    <div className='date-servicedetail'>

                  <p>22 Nov</p>
                  <p>Friday</p>
                    </div>
                  <div className='time-servicedetail'>
                  <p>11:00</p>
                  <p>45 min</p>
                  </div>
                  <p>member</p>
                </div>
                <div className='datesession-servicedetail'>
                    <div className='date-servicedetail'>

                  <p>22 Nov</p>
                  <p>Friday</p>
                    </div>
                  <div className='time-servicedetail'>
                  <p>11:00</p>
                  <p>45 min</p>
                  </div>
                  <p>member</p>
                </div>
        
                </div> 
                  <button className='buttonreserve-servicedetail'>Reserve now</button>
            </aritcle>
            <aritcle className='article-details-servicedetail'>
                <div className='cancellationpolicy-servicedetail' >
                  <h3>Cancellation policy</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos, laborum hic provident tempore minus maxime, nostrum ipsum voluptatum, perspiciatis minima pariatur! Voluptas perspiciatis dicta itaque dignissimos rerum blanditiis fugit.</p>
                </div>
                <div className='contactdetails-servicedetail'>
                    <h3>Contact details</h3>
                    <p>123-456-789</p>
                    <p>email@example.com</p>
                    <p>123 real street</p>

                </div>
                
            </aritcle>

        </section>

       </main>
    )
}

export default ServiceDetail