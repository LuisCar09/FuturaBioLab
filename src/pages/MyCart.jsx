import '../styles/MyCart.css'

function MyCart() {
    return (
        <main className="main-mycart">
            <section className="section-mycart">
                <h1 className="title-mycart">My cart</h1>
                <div className="container-mycart">
                    <h2>The cart is empty</h2>
                    <a href="#" className="continue-mycart">Keep buying</a>
                </div>
            </section>
        </main>
    )
}

export default MyCart
