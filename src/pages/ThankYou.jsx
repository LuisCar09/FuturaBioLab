import '../styles/ThankYou.css';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function ThanKYouPage() {
    return (
        <main className='main-thankyou'>
            <section className="thankYou-section">
                <div className="thankyou-container">
                    <h1>Thank You, {/* Customer's Name */}</h1>
                    <p>You will receive a confirmation email shortly.</p>
                    <p>Order Number: {/* Order Number */}</p>
                </div>

                <div className="order-details">
                  <CardGiftcardIcon />
                  <div className='details-thankyou'>
                  <div className="service-details-thankyou">
                        
                        <h2>Service Name</h2>
                        <p>0.00 €</p>
                        <p>Date and Time: {/* Date and Time */}</p>
                        <p>Duration: {/* Duration */}</p>
                        <p>Staff Member: {/* Staff Name */}</p>
                        <p>Location: {/* Location */}</p>
                    </div>

                    <div className="billing-details">
                       <div className='billing-details-container'>
                       <p>Subtotal:</p>
                       <p>0.00 €</p>
                       </div>
                       <div className='billing-details-container'>
                        <p>Shipping:</p>
                        <p>Free</p>

                       </div>
                       <div className='billing-details-container'>
                        <p>Tax:</p>
                        <p>10.00€</p>

                       </div>
                       <div className='billing-total-container'>
                        <h3>Total:</h3>
                        <p>10.00€</p>

                       </div>
                        
                    </div>
                  </div>
                    
                </div>

                <div className="address-details">
                    <div className="shipping-address">
                        <h3>Shipping Address</h3>
                        <p>Customer Name: {/* Customer's Name */}</p>
                        <p>Street, City {/* Shipping Address */}</p>
                        <p>post code,Country:</p>
                        <p>Phone Number: {/* Phone Number */}</p>
                        <p>3-5 Business Days</p>
                    </div>

                    <div className="billing-address">
                        <h3>Billing Address</h3>
                        <p>Customer Name: {/* Customer's Name */}</p>
                        <p>Street, City {/* Billing Address */}</p>
                        <p>post code, Country:</p>
                        <p>Phone Number: {/* Phone Number */}</p>
                    </div>
                </div>
                <div className='button-thanyou'>

                  <a className="continue-shopping">Continue shopping</a>
                </div>

            </section>
        </main>
    );
}

export default ThanKYouPage;