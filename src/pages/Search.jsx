import '../styles/Search.css'
import SearchIcon from '@mui/icons-material/Search';



{/*con useEffect poner el foco cuando se monte, falta importarlo y useRef tambien , meterlo dentro de la funcion*/}

 {/* 
    const inputRef = useRef(null);
    
        useEffect(() => {
            inputRef.current.focus();
        }, []);

    */} 


function Search(){

  
    

    return(
     <main className='main-search'>
        <section className='section-search'>

        <article className='articletop-search'>
            <div className='title-search'>
                <h1>Search Results</h1>
                <div className='inputcontainer-search'>

                <SearchIcon className='iconlens-search'/>
                <input className='input-search'
                  
                  id='input-search'
                  type='text'
                  required
                />
                </div>
                <nav className='navbar-search'>

                <h2>Services</h2>
                <h2>Projects</h2>
                <h2>Other Results</h2>
                </nav>
                <h3>31 matches found for ''</h3>
            </div>
        </article>
        <article className='articlebottom-search'>
           <div className='news-search'>
                
                    <img src="https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/una-bacteria-depredadora-que-mata-para-obtener-bioplastico/5870428-5-esl-MX/Una-bacteria-depredadora-que-mata-para-obtener-bioplastico.jpg" alt="" />
                
                <div className='titlenews-search'>
                
                  <h2>I´m a bioplastic babe</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nostrum eaque magnam, blanditiis perspiciatis dicta soluta ut fuga culpa doloribus nobis delectus, dolore eum, ipsa reiciendis dolorum possimus fugiat dignissimos?</p>
                    
                </div>
           </div>
        </article>
        </section>
     </main>
    )
}

export default Search