import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import '../styles/ProjectCard.css'

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
                            <p><Link to='/members/${id}'>{projects.owner}</Link></p>
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
                
                <aside className={hideElements ? 'asidecontainer-info-method showAsideInforMethod ' : 'asidecontainer-info-method'} >
                   
                <div className='methodcontainer-method'>
                        <h2>Method</h2>
                        <textarea></textarea>
                    </div>

                    <div className='aside-info-method'>
                        <h2>References</h2>
                        <input
                            id='references'
                            type='text'
                            required
                        />
                    </div>
                    <div className='aside-info-method'>
                        <h2>Bibliography</h2>
                        <input
                            id='bibliography'
                            type='text'
                            required
                        />
                    </div>
                    <div className='moreinfo-projectcard'>
                    <RemoveCircleOutlineIcon onClick={()=> setHideElements(prev => !prev) } />
                        </div>
                </aside>



            </section>
            }
        </main>

    )
}

export default ProjectCard
    // <section section className = 'sectiontop-method' >


    //     <aside className='asidecontainer-info-method'>
    //         <div className='aside-info-method'>
    //             <h2>Tools</h2>
    //             <input
    //                 id='tools'
    //                 type='text'
    //                 required
    //             />
    //         </div>
    //         <div className='aside-info-method'>
    //             <h2>Ambient</h2>
    //             <input
    //                 id='ambient'
    //                 type='text'
    //                 required
    //             />
    //         </div>
    //         <div className='aside-info-method'>
    //             <h2>Light Conditions</h2>
    //             <input
    //                 id='ligth-conditions'
    //                 type='text'
    //                 required
    //             />
    //         </div>

    //         <div className='aside-info-method'>
    //             <h2>References</h2>
    //             <input
    //                 id='references'
    //                 type='text'
    //                 required
    //             />
    //         </div>
    //         <div className='aside-info-method'>
    //             <h2>Bibliography</h2>
    //             <input
    //                 id='bibliography'
    //                 type='text'
    //                 required
    //             />
    //         </div>
    //         <div className='methodcontainer-method'>
    //             <h2>Method</h2>
    //             <textarea></textarea>
    //         </div>
    //     </aside>       
    // </section>