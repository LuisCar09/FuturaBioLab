import { useEffect,useState } from 'react';
import Card from '../components/utils/Card';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';

import '../styles/Projects.css'

function Projects() {
    const [projects,setProjects] = useState(null)
   

    
    

    useEffect(()=>{
        try {
            const fetchData = async () => {
                const dataResponse = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'projectss')
                setProjects(dataResponse.data)        
            }
            fetchData()
        } catch (error) {
            console.error(error.message)
        }
    },[])
    return (
        <main className='main-projects'>
            
            {!projects ? 
                <section className='section-spinner' >
                    <div className='spiner-projects'></div> 
                </section>
            :
            projects.map(project => {
                    const{owner,_id,nameproject,createdAt,description,image,views} = project
                    
                    return(
                        <Card key={_id} id={_id} username={owner} date={createdAt.split('T')[0]} title={nameproject} descriptionProject={description} projectImg={image} projectViews={views} userImg={image}
                        />
                    )
                })}
            
    
            
        </main>
    )
}

export default Projects;
