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
  const [_id,setId]  = useState('')
  const [userName,setUserName] = useState('')
  const [projects, setProjects] = useState([])
  const [userFollowers,setUserFollowers] = useState('')
  const [userFollows,setUserFollows] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userCreatedDate,setUserCreatedDate] = useState('')
  const [isServiceCliked, setIsServiceCliked] = useState(false)
  const navigate = useNavigate();
  const uid = localStorage.getItem('uid')
  

  

  useEffect(() =>{
        
    const fetchUserData = async () =>{
       try {
        
        
        const userDataResponse = await axios.get(`http://localhost:8080/users/${uid}`,{
            headers:{Authorization:`Bearer ${localStorage.getItem('authToken')}`}
            
        })
        const userData = userDataResponse.data
        
       
        setId(userData[0]._id)
        setUserName(userData[0].userName)
        setUserDescription(userData[0].description)
        setUserFollowers(userData[0].followers)
        setUserFollows(userData[0].follows)
        setUserCreatedDate(userData[0].createdAt)
       } catch (error) {
        console.log(error.message);
        
       }
        
    }
    fetchUserData()
},[])


  const handleButtonClick = () => {
    navigate('/setting');
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
                <h2 className="user-name">{userName}</h2> 
                  
                    <div>
                    <p className="user-follows">Followers: {userFollowers}</p>
                    <p className="user-follows">follows: {userFollows}</p>
                  
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
            
            <a  className="nav-files" onClick={()=> setIsServiceCliked(prev => !prev)} > {!isServiceCliked ? 'Services' : 'Projects'} </a>
        </div> 
        <article className='article-profile-container'>
        
        {!isServiceCliked ? (
         <>
         <div className='profile-content'>
              <div className='profile-edit'>
                <h3>Profile</h3>
                <button className="edit-profile-button" onClick={handleButtonClick}>
                 <EditIcon className='editicon' />
                  Edit Profile
                </button>
              </div>
              <div className='registration-container'>
                <p>Registration Date: {userCreatedDate.split('T')[0]}</p>
              </div>
        </div>
        <div className="about-me-container">
              <h3>About Me</h3>
              <div className="about-me-profile" value={userDescription} ></div>
        </div>
        <div className="projects-container-profile">
               <div className="projects-title-profile">
                 <h3>Projects</h3>

                 <Link to='/projects/new' className="add-project-button">Add Project</Link>
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
                </div>
        </div>
         </> 
        ): <div className='service-article-container'>
          <h2>AQUI VAS HACER TU MAGIA BARBARA DEL VALLE</h2>
        </div>
        }
        </article>
        
              
      </section>
      
    </main>
  );
};

export default Profile;

