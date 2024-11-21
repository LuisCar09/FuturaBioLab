import '../styles/MyCart.css'

function MyCart() {
    return (
        <main className="main-mycart">
            <section className="section-mycart">
               <article className='products-mycart'>
                 <div className='product-details-mycart'>
                    <h3>Name product</h3>
                    <div className='img-products-mycart'>
                   
                      <div className='buttons-mycart'>
                       <button className='buttonproduct-mycart'>-</button>
                       <p>1</p>
                       <button className='buttonproduct-mycart'>+</button>
                      </div>

                    </div>

                 </div>
               </article>
               <article className='mycart-container'>
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
               </article> 
               
               
            </section>
        </main>
    )
}

export default MyCart
