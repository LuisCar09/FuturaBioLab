import '../styles/Profile.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/utils/ProfileCard';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Profile = () => {
  const { id } = useParams(); 
  const [member, setMember] = useState(null);
  const [followers, setFollowers] = useState(0);
  const [follows, setFollows] = useState(0);
  const [projects, setProjects] = useState([])
  const [description,setDescription] = useState('')
  const navigate = useNavigate();
  const {user} = useContext(UserContext)
  console.log(user)
  
  

//   useEffect(() => {
//     const  fecthMember = async () => {
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}members/${id}`) 
//             console.log(response)
//             setMember(response.data)
           
            
//         } catch (error) {
//             console.log({message: error})
//         }
//     }
//     fecthMember()
// },[id])


  const handleButtonClick = () => {
    navigate('/setting');
  }

  const handleButtonUpload = () => {
    navigate('/projects/:id');
  }

  return (

    <main className='main-profile-container'>

      <section className='section-profile--container'>
        <div className="profile-container">
         <div className='camera-icon'>
          <CameraAltIcon />
         </div>
         <div className='profile-info'>
            <div className='user-info'>
              <img src="https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg" alt="Picture" className="profile-picture" />
                <div className='info-user-follow'>
                <h2 className="user-name">{user ? user.userName : 'Hola'}</h2> 
                  
                    <div>
                    <p className="user-follows">Followers: {followers}</p>
                    <p className="user-follows">follows: {follows}</p>
                  
                  </div>
                </div>
            </div>
            <div className='edit-settings-user'>
             <button className='edit-data' onClick={handleButtonClick}>
                  Edit data
                </button>
              <MoreVertIcon className='morevert-icon' />     
            </div>
         </div>    
        </div>  
        <div className="navigation-bar-profile">
            <a href="#" className="nav-profile">Profile</a>
            <a href="#" className="nav-files">Projects</a>
        </div>
        <div className='profile-content'>
              <div className='profile-edit'>
                <h3>Profile</h3>
                <button className="edit-profile-button" onClick={handleButtonClick}>
                 <EditIcon className='editicon' />
                  Edit Profile
                </button>
              </div>
              <div className='registration-container'>
                <p>Registration Date: 25 Oct 2024</p>
              </div>
        </div>
        <div className="about-me-container">
              <h3>About Me</h3>
              <textarea className="about-me-textarea" >{description}</textarea>
        </div>
        
              <div className="projects-container-profile">
               <div className="projects-title-profile">
                 <h3>Projects</h3>

                 <Link to='/projects/${id}' className="add-project-button">Add Project</Link>
                 </div>
                <div className='projects--profile'>
                {projects.length > 0 ? (
              projects.map(project => (
                <div key={project.id}>{project.name} {project.image} {project.title}
                {project.views}</div> 
              ))
            ) : (
              <p>Don't have projects</p>
            )}
                <button className="uploadproject-profile" onClick={handleButtonUpload}>
                 
                Upload your project
                </button>
               
                </div>
              </div>
      </section>
      
    </main>
  );
};

export default Profile;

