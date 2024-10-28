import '../../styles/Hero.css'


const Hero = () => {
    return(
        <main>
        <section>
            <div className='sectionTop'>
                <img className='backgroundImage' src='https://img.freepik.com/fotos-premium/imaginese-biotecnologos-marinos-utilizando-ingenieria-genetica-generativa_1198283-89240.jpg' alt="Background" />
                <div className="content">
                    <h2>Explore with us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate laboriosam voluptas quaerat deleniti harum quis, explicabo molestiae fuga quia atque ipsam ea officia beatae recusandae et voluptatum quisquam eligendi aut?</p>
                    <button>
                        <a className='buttonTop' href='/proyects'>+</a>
                    </button>
                </div>
            </div>
        </section>
    </main>


    )
}

export default Hero