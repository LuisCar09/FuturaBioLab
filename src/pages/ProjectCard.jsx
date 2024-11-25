import '../styles/ProjectCard.css'
import { Link } from 'react-router-dom'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectCard = () => {
    
    const [projects, setProjects] = useState(null)
    const [hideElements,setHideElements] = useState(false)
    const {id} = useParams()
   // console.log(hideElements);
    
    
    
    useEffect(() => {
        const fecthProject = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'projects/' + id )
            
                setProjects(response.data)


            } catch (error) {
                console.log(error.message)
            }
        }
        fecthProject()
    }, [])

    return (

        <main className="project-container">
            {projects && <section className={!hideElements ? "project-container--section" : "project-container--section hidden " }  >
                <article className={!hideElements ? "project-container--article" : "project-container--aside-container moveLeft " } >

                    <div className="project-container--article-top" >
                        <div>
                            <p>{projects.nameproject}</p>
                            <p>{projects.composition}</p>

                        </div>
                    </div>
                    <div className="project-container--article--squarePicture">
                        <div className='image-container-projectcard'>
                            <img src={projects.image} />
                        </div>
                    </div>
                    <div className="project-container--article-button">
                        <div className='author-container-projectcard'>
                            <h2>Author</h2>
                            <p><Link to='/members'>{projects.owner}</Link></p>
                            <p>{projects.license}</p>
                        </div>

                    </div>


                </article>
                <aside className= {!hideElements ? "project-container--aside-container " : "project-container--aside-container moveRight " } >
                    <div className='containerinfo-projectcard'>
                        <div className='aside-info-projectcard'>
                            <h2>Description</h2>
                             <p>{projects.description}</p> 
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Ingredients</h2>
                            
                            <p>{projects.ingredients}</p> 
                        </div>

                        <div className='aside-info-projectcard'>
                            <h2>Properties</h2>
                            {projects.properties.map(prop => <p key={prop} >{prop}</p> )}
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Tools</h2>  
                            <p>{projects.tools}</p> 
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Application</h2>  
                            <p>{projects.application}</p> 
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Prep time</h2>  
                            <p>{projects.preptime}</p> 
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Proccesses</h2>  
                            <p>{projects.proccesses}</p> 
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Ambient conditions</h2>  
                            <p>{projects.ambientconditions}</p> 
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Ligths conditions</h2>  
                            <p>{projects.ligthsconditions}</p> 
                        </div>
                    </div>
                    
                    <div className='moreinfo-projectcard'>
                        <AddCircleOutlineIcon onClick={()=> setHideElements(prev => !prev) } />

                    </div>


                </aside>
                {/* <article className={!hideElements ? "project-container--article initial-top " : "project-container--aside-container top " } >

                    <div className="project-container--article-top" >
                        <div>
                            <p>{projects.nameproject}</p>
                            <p>{projects.composition}</p>

                        </div>
                    </div>
                    <div className="project-container--article--squarePicture">
                        <div className='image-container-projectcard'>
                            <img src={projects.image} />
                        </div>
                    </div>
                    <div className="project-container--article-button">
                        <div className='author-container-projectcard'>
                            <h2>Author</h2>
                            <p><Link to='/members'>{projects.owner}</Link></p>
                            <p>{projects.license}</p>
                        </div>

                    </div>


                </article>
                <aside className= {!hideElements ? "project-container--aside-container  " : "project-container--aside-container bottom " } >
                    <div className='containerinfo-projectcard'>
                        <div className='aside-info-projectcard'>
                            <h2>Description</h2>
                             <p>{projects.description}</p> 
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Ingredients</h2>
                            
                            <p>{projects.ingredients}</p> 
                        </div>

                        <div className='aside-info-projectcard'>
                            <h2>Properties</h2>
                            {projects.properties.map(prop => <p key={prop} >{prop}</p> )}
                        </div>
                    </div>
                    
                    <div className='moreinfo-projectcard'>
                        <AddCircleOutlineIcon onClick={()=> setHideElements(prev => !prev) } />

                    </div>


                </aside> */}
            </section>
            }
        </main>

    )
}

export default ProjectCard