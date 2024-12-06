const Checkout = () => {
    return (
        <main className="main-checkout">
          <section className="section-checkout">
            <aside className="aside-payment-checkout">
                  <div className="method-payment-checkout">
                  <h3>Payment</h3>
                            <div className='methodpayment-formreservation'>
                                {['credit-card', 'paypal', 'bank-transfer'].map((method) => (
                                    <div className='payment-formreservation' key={method}>
                                        <p
                                            onClick={() => handlePaymentMethodClick(method)}
                                            className={selectedPaymentMethod === method ? 'selected' : ''}
                                        >
                                            {method}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className='credit-card-input'>
                                    <label htmlFor='card-number' className='label-formreservation'>
                                        Card Number
                                    </label>
                                    <input 
                                        id='card-number'
                                        type='text'
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        placeholder='Enter your card number'
                                        required
                                    />
                                </div>
                                <div className='paypal-message'>
                                    <p>This payment method is currently unavailable.</p>
                                </div>

                                <div className='bank-transfer-info'>
                                    <h4>Future Biolab S.L.</h4>
                                    <input 
                                        type='text'
                                        value='1234567890'
                                        readOnly
                                        placeholder='Account number (for testing purposes)'
                                    />
                                    <p>* This account number does not exist, it is only for testing.</p>
                                </div>
                  </div>
            </aside>
            <aside className="aside-total-checkout">

            </aside>
          </section>

        </main>
    )
}

export default Checkout