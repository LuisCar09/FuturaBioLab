import '../styles/MyCart.css'

function MyCart() {
    return (
        <main className="main-mycart">
            <section className="section-mycart">
               <div className='mycart-container'>
                <div className='content-mycart'>
                 <h3>Sub Total</h3>
                 <p>10€</p>
                </div>
                <div className='content-mycart'>
                 <h3>Tax</h3>
                 <p>3.5€</p>
                </div>
                <div className='content-mycart'>
                 <h3>Shoping Charges</h3>
                 <p>2.17€</p>
                </div>
                <div className='content-mycart'>
                 <h3>Total</h3>
                 <p>37.29€</p>
                </div>
                <button>Checkout</button>
                </div> 
               
            </section>
        </main>
    )
}

export default MyCart
