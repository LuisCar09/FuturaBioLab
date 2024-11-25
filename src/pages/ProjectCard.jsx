import '../styles/ProjectCard.css'
import { Link } from 'react-router-dom'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const ProjectCard = () => {

    const {id} = useParams()
    
    const [project, setProject] = useState(null)


useEffect(() => {
    const fecthProject = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}projects/${id}`) 
            console.log(response)
            setProject(response.data)
           
            
        } catch (error) {
            console.log({message: error})
        }
    }
    fecthProject()
},[id])


    return (
 
        <main className="project-container">
            <section className="project-container--section">
                <article className="project-container--article" >
                   
                        <div className="project-container--article-top">
                            <div>
                                <p>Agar-agar</p>
                                <p>Bioplastic</p>
                                
                            </div>
                        </div>
                        <div className="project-container--article--squarePicture">
                            <div className='image-container-projectcard'>
                                <img src='https://i0.wp.com/www.zoepowell.com/wp-content/uploads/2017/12/IMG_0112-705x940.jpg'/>
                            </div>
                        </div>
                        <div className="project-container--article-button">
                            <div className='author-container-projectcard'>
                                <h2>Author</h2>
                                <p><Link to='/members'>Barby Malybu</Link></p>
                                <p>License</p>
                            </div>
                            
                        </div>
                   
                    
                </article>
                <aside className="project-container--aside-container">
                    <div className='containerinfo-projectcard'> 
                    <div className='aside-info-projectcard'>
                        <h2>Description</h2>
                        <textarea></textarea>
                    </div>
                    <div className='aside-info-projectcard'>
                        <h2>Composition</h2>
                        <textarea></textarea>
                    </div>
                   
                        <div className='aside-info-projectcard'>
                        <h2>Properties</h2>
                        <textarea></textarea>
                         </div>
                         </div>
                   <div className='moreinfo-projectcard'>
                    <Link to='/method'><AddCircleOutlineIcon /></Link>

                   </div>
                
                   
                </aside>
            </section>
        </main>

    )
}

export default ProjectCard