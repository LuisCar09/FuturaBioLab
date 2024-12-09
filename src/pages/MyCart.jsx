import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import ItemCart from '../components/utils/ItemsCart';
import '../styles/MyCart.css'
function MyCart() {
  const items = JSON.parse(localStorage.getItem('items'))
  const [tax,setTax] = useState(0)
  const [shippingChanges,setShippingCharges] = useState(0)
  const [subTotal, SetSubTotal] = useState(items.reduce((acc,current) => {
    return parseFloat(acc) + parseFloat(current.price)
  },0))
  
  
  useEffect(() => {
    localStorage.setItem('price',subTotal)
    setTax(subTotal * 0.21)
    setShippingCharges(subTotal * 0.01)
  },[subTotal])
  
  
  return (
    <main className="main-mycart">
      <section className="section-mycart">
        <div  className='items-container' >
        {items && (
          items.map(item => {
            return (
              
              
              <ItemCart key={item.serviceid} name={item.name}   setSubTotal={SetSubTotal} price={item.price} />
              
            )
          })
        )}
        </div>
        <article className='mycart-container'>
          <div className='content-mycart'>
            <h3>Sub Total</h3>
            <p>{subTotal}€</p>
          </div>
          <div className='content-mycart'>
            <h3>Tax</h3>
            <p>{(tax).toFixed(2)}€</p>
          </div>
          <div className='content-mycart'>
            <h3>Shoping Charges</h3>
            <p>{(shippingChanges).toFixed(2)}€</p>
          </div>
          <div className='content-mycart'>
            <h3>Total</h3>
            <p>{(subTotal + tax + shippingChanges).toFixed(2)}€</p>
          </div>
          <Link to='/mycart/checkout'>
            <button>Checkout</button>
          </Link>
        </article>


      </section>
    </main>
  )
}

export default MyCart
