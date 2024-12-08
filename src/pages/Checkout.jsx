import { useState} from "react";
import { Link } from "react-router-dom";

import '../styles/Checkout.css'

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard'); 
    
    const [subTotal,setSubTotal] = useState(parseInt(localStorage.getItem('price')))
    const [tax,setTax] = useState(subTotal * 0.21)
    const [shippingCharges,setShippingCharges] = useState(subTotal * 0.01)

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <main className="main-checkout">
            <section className="section-checkout">
                <aside className="aside-payment-checkout">
                    <div className="method-payment-checkout">
                        <h3>Payment</h3>
                        <label htmlFor="payment-method">Select Payment Method:</label>
                       <div className="method-payment-select-checkout">
                        <select 
                            id="payment-method" 
                            value={paymentMethod} 
                            onChange={handlePaymentMethodChange} >
                            <option value="creditCard">Credit card</option>
                            <option value="paypal">Paypal</option>
                            <option value="bankTransfer">Bank Transfer</option>
                        </select>

                        {paymentMethod === 'creditCard' && (
                            <div className='credit-card-input-checkout'>
                                <label htmlFor='card-number' className='label-checkout'>
                                    Card Number
                                </label>
                                <input 
                                    id='card-number'
                                    type='text'      
                                    placeholder='Enter your card number'
                                    required
                                />
                                <div className="expirationdate-securitycode-checkout">
                                <input 
                                    id='expiration-date'
                                    type='text'      
                                    placeholder='Expiration date(MM/YY)'
                                    required
                                />
                                 <input 
                                    id='security-code'
                                    type='text'      
                                    placeholder='Security code'
                                    required
                                />
                                </div>
                            </div>
                        )}

                        {paymentMethod === 'paypal' && (
                            <div className='paypal-message-checkout'>
                                <p>This payment method is currently unavailable.</p>
                            </div>
                        )}

                        {paymentMethod === 'bankTransfer' && (
                            <div className='bank-transfer-info-checkout'>
                                <h4>Future Biolab S.L.</h4>
                                <input 
                                    type='text'
                                    placeholder='Account number (for testing purposes)'
                                />
                                <p>* This account number does not exist, it is only for testing.</p>
                            </div>
                        )}
                    </div>
                    </div>
                </aside>
            <aside className="aside-total-checkout">
            <div className='product-details-checkout'>
                    <div className="nameproduct-checkout">
                    <h3>Name product</h3>
                      <div className='buttons-checkout'>
                       <button className='buttonproduct-checkout'>-</button>
                       <p>1</p>
                       <button className='buttonproduct-checkout'>+</button>
                     
                       </div>  
                    </div>
                    <div className='content-checkout'>
                 <h3>Sub Total</h3>
                 <p>{(subTotal).toFixed(2)}€</p>
                </div>
                <div className='content-checkout'>
                 <h3>Tax</h3>
                 <p>{(tax).toFixed(2)}€</p>
                </div>
                <div className='content-checkout'>
                 <h3>Shoping Charges</h3>
                 <p>{(shippingCharges).toFixed(2)}€</p>
                </div>
                <div className='content-checkout'>
                 <h3>Total</h3>
                 <p>{(subTotal + tax + shippingCharges).toFixed(2) }€</p>
                </div>
                <Link to='/thankyou'>
                <button>Checkout</button>
                </Link>

                 </div>
            </aside>
          </section>

        </main>
    ) 
}

export default Checkout