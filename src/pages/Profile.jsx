import '../styles/Profile.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams(); 
  const [member, setMember] = useState(null);


  useEffect(() => {
    const  fecthMember = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}members/${id}`) 
            console.log(response)
            setMember(response.data)
           
            
        } catch (error) {
            console.log({message: error})
        }
    }
    fecthMember()
},[id])
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
                  <h2 className="user-name">Username</h2>
                  <div>
                    <p className="user-follows">0 Followers </p>
                    <p className="user-follows">0 Following</p>
                  </div>
                </div>
            </div>
            <div className='edit-settings-user'>
             <button className='edit-data'>
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
                <button className="edit-profile-button">
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
              <textarea className="about-me-textarea" ></textarea>
        </div>
        
              <div className="projects-container-profile">
               <div className="projects-title-profile">
                 <h3>Projects</h3>

                 <a href='#' className="add-project-button">Add Project</a>
                 </div>
                <div className='projects--profile'>
                <p>Don't have projects</p>
                <button className='uploadproject-profile'>
                Upload your project
                </button>
                </div>
              </div>
      </section>
    </main>
  );
};

export default Profile;

