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
import { duration } from '@mui/material';


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
  const [nameService,setNameService] = useState('')
  const [emailService,setEmailService] =useState('')
  const [usernameService,setUsernameService] = useState('')
  const [descriptionService,setDescriptionService]= useState('')
  const [durationService, setDurationService]= useState('')
  const [priceService,setPriceService] = useState ('')
  const [locationService, setLocationService] = useState('')
  const navigate = useNavigate();
  const uid = localStorage.getItem('uid')
  const token = localStorage.getItem('authToken')

  

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
 
const createService = async () => {
  try {
    const body = {
      nameService: name,
      emailService: email,
      usernameService: username,
      descriptionService: description,
      durationService: duration,
      priceService: priceService,
      locationService: location

    }
    console.log(body)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const servicesResponse = await axios.post('http://localhost:8080/service/new',body,{
      headers:{Authorization : `Bearer ${token}`}
  })
  console.log(servicesResponse);
  navigate('/profile')
  } catch (error) {
    console.error(error.message);
  }
}



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
        ): <div className='service-article-container-servicesnew'>
          <form className='form-servicesnew'>
            <div className='title-container-servicesnew'>
              <div className='infouser-container-servicenew'>
              <h2>Service Name</h2>
               <input
               id='title-service'
               placeholder="Enter the service name" required  />
              </div>
              <div className='infouser-container-servicenew'>
               <h2>Email</h2>
               <input
                id='email-service'
                placeholder="Enter the email contact" required  />

              </div>
            </div>
          <div className='description-container-servicesnew'>
            <h2>Description</h2>
            <textarea>Enter the description of the service</textarea>
          </div>
          <div className='duration-price-location-servicesnew'>
            <div className='duration-servicenew'>
              <h2>Duration</h2>
              <input 
              id='duration-service'
              />
            </div>
            <div className='price-servicenew'>
              <h2>Price</h2>
              <input 
              id='price-service'
              />
            </div>
            <div className='location-servicenew'>
              <h2>Location</h2>
              <input 
              id='location-service'
              />
            </div>

          </div>

          <div className='container-button-servicenew'>

           <button type="button" className='button-servicesnew'>Save</button>
          </div>

          </form>
        </div>
        }
        </article>
        
              
      </section>
      
    </main>
  );
};

export default Profile;

