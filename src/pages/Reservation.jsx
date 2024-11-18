import '../styles/Reservation.css';

function FormReservation() {
    return (
        <main className='main-formreservation'>
            <section className='section-formreservation'>
                <aside className='details-formreservation'>
                    
                    <h2>Detalles de servicio</h2>
                    
                </aside>

                <div className='form-formreservation-children'>
                <form className='form-formreservation'>
                    <div className='name-formreservation' >
                        <div className='name-email-formresservation'>
                        <label htmlFor='name-input' className='label-formreservation'>
                            Name*
                        </label>
                        <input 
                            id='name-input'
                            type='text'
                            required
                        />                     
                        </div>
                        <div className='name-email-formresservation'>
                        <label htmlFor='email-input' className='label-formreservation'>
                            Email*
                        </label>
                        <input 
                            id='email-input'
                            type='email'
                            required
                        />
                        </div>
                    </div>

                    <div className='phone-formreservation'>
                        <label htmlFor='phone-input' className='label-formreservation'>
                            Phone number
                        </label>
                        <input 
                            id='phone-input'
                            type='text'
                        />
                        <p>Add a message</p>
                        <textarea className='textarea-formreservation'></textarea>
                    </div>

                    <div className='payment-formreservation'>
                        <h3>Payment</h3>
                       {/*} <p>Service name</p>*/}
                        <div className='methodpayment-formreservation'>
                            <div className='input-payment-formreservation'>
                           
                            <input 
                                type="text" 
                                id="credit-card"
                                name="payment" 
                                value="credit-card" 
                                
                            />
                            </div>
                            <div className='input-payment-formreservation'>
                            <input 
                                type="text" 
                                id="paypal"
                                name="payment" 
                                value="paypal" 
                                
                            />
                            </div>
                            <div className='input-payment-formreservation'>
                            
                            <input 
                                type="text" 
                                id="bank-transfer"
                                name="payment" 
                                value="bank-transfer" 
                            />
                            </div>
                        </div>
                    </div>
                    
                </form>       
                <div className='data-formreservation'>
                    <div className='data-formreservation-details'>
                    <h3>Reservation details</h3>
                    <p>Service name</p>
                    <p>Date and time</p>
                    <p>Duration</p>
                    </div>
                    <h3>Payment details</h3>
                    <div className='price-formreservation'>
                        <p className='price'>Total</p>
                        <p className='amount'>10€</p>
                    </div>
                    <div className='buttons-formreservation'>
                    <button className='addbutton-formreservation'>Add to cart</button>
                   
                    </div>
                  </div>
                </div>
                <h4>The fields marked with (*) are required</h4>
            </section>
        </main>
    );
}

export default FormReservation;
