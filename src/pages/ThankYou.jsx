import '../styles/thankYou.css'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function ThanKYouPage(){
    return(
    <section className="thankYou-section">

     <div className="thankyou-container">
      <h1>Thank You, {/* Customer's Name */}</h1>
      <p>You will receive a confirmation email shortly.</p>
      <p>Order Number: {/* Order Number */}</p>
     </div>

      <div className="order-details">
        <div className="service-details">
          <CardGiftcardIcon />
          <h2>Service Name</h2>
          <p>0.00 €</p>
          <p>Date and Time: {/* Date and Time */}</p>
          <p>Duration: {/* Duration */}</p>
          <p>Staff Member: {/* Staff Name */}</p>
          <p>Location: {/* Location */}</p>
        </div>

        <div className="billing-details">
          <h3>Subtotal: 0.00 €</h3>
          <h3>Shipping: Free</h3>
          <h3>Tax: 10.00 €</h3>
          <h2>Total: 10.00 €</h2>
        </div>
      </div>

      <div className="address-details">
        <div className="shipping-address">
          <h3>Shipping Address</h3>
          <p>Customer Name: {/* Customer's Name */}</p>
          <p>Street, City, State Zip Code, Country: {/* Shipping Address */}</p>
          <p>Phone Number: {/* Phone Number */}</p>
          <p>3-5 Business Days</p>
        </div>

        <div className="billing-address">
          <h3>Billing Address</h3>
          <p>Customer Name: {/* Customer's Name */}</p>
          <p>Street, City, State Zip Code, Country: {/* Billing Address */}</p>
          <p>Phone Number: {/* Phone Number */}</p>
        </div>
      

      <button className="continue-shopping">Continue Shopping</button>
    </div>
   </section>
    )
}

export default ThanKYouPage