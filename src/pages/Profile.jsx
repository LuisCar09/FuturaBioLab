import '../styles/Profile.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import Header from '../components/Header/Header.jsx'

const Profile = () => {
  return (
    
    <main className='main-profile-container'>
        <Header isHome={false} />
      <section className='section-profile--container'>
        <div className="profile-container">
          <div className="header-container">
            <CameraAltIcon className='camera-icon'/>
            <img src="https://images.ecestaticos.com/X6jKxwFNcSPcl3CEQuItXawaAc8=/0x0:2097x1430/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F614%2F40c%2Ff02%2F61440cf024b55a412a97e4c4c59fffbd.jpg" alt="Background" className="background-image" />
            <div className="profile-info">
              <img src="https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg" alt="Picture" className="profile-picture" />
              <div className="user-details">
                <h2 className="user-name">Username</h2>
                <p className="user-follows">0 Followers • 0 Following</p>
              </div>
              <div className='edit-data-container' >
              
                <MoreVertIcon className='morevert-icon'/>
                <button className='edit-data'>
                Edit data
              </button>
              </div>
            </div>
          </div>

          <div className="navigation-bar-profile">
            <a href="#" className="nav-profile">Profile</a>
            <a href="#" className="nav-files">Files</a>
          </div>

          <div className="profile-content">
            <div className="profile-sectionTop">
             <div className='title-sectionTop'>
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


            <div className="profile-sectionMiddle">
              <h3>About Me</h3>
              <div className="about-me" placeholder="Share something about yourself..."></div>
            </div>

            <div className="profile-sectionBotton">
            <div className="projects-container">
              <h3>Projects</h3>
              
                {/* aqui los proyectos que tenga */}
              <button className="add-project-button">Add Project</button>
             </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;


  

  
  