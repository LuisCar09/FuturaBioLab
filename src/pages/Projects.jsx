import { useEffect,useState } from 'react';
import Card from '../components/utils/Card';
import Spinner from './Spinner';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';

import '../styles/Projects.css'
import '../styles/Spinner.css'

function Projects() {
    const [projects,setProjects] = useState(null)
   

    const fetchData = async () => {
        const dataResponse = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'projects')
        setProjects(dataResponse.data)        
    }
    

    useEffect(()=>{
        
        fetchData()
    },[])
    return (
        <main className='main-projects'>
        {!projects ?
            <section className='section-spinner' >
               <Spinner />
            </section>
        :
            
            <section className='section-projects'>
                {projects.map(project => {
                    const{owner,_id,nameproject,createdAt,description,image,views} = project
                    return(
                        <Card key={_id} id={_id} username={owner} date={createdAt.split('T')[0]} title={nameproject} descriptionProject={description} projectImg={image} projectViews={views} userImg={image}
                        />
                    )
                })}
            </section>
        }
       

       
    </main>
    )
}

export default Projects;
