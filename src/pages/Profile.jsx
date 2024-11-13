import '../styles/Profile.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Profile = () => {
  return (
    <main className='main-profile-container'>
      <section className='section-profile--container'>
        <div className="profile-container">
          <div className="header-container">
            <CameraAltIcon />
            <img src="https://images.ecestaticos.com/X6jKxwFNcSPcl3CEQuItXawaAc8=/0x0:2097x1430/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F614%2F40c%2Ff02%2F61440cf024b55a412a97e4c4c59fffbd.jpg" alt="Background" className="background-image" />
            <div className="profile-info">
              <img src="https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg" alt="Picture" className="profile-picture" />
              <div className="user-details">
                <h2 className="user-name">Username</h2>
                <p className="user-follows">0 Followers • 0 Following</p>
              </div>
              <div className='morevert-icon'>
                <MoreVertIcon />
              </div>
            </div>
          </div>

          <div className="navigation-bar-profile">
            <a href="#" className="nav-profile">Profile</a>
            <a href="#" className="nav-files">Files</a>
          </div>

          <div className="profile-content">
            <div className="profile-sectionTop">
              <h3>Profile</h3>
              <div className='registration-container'>
                <p>Registration Date: 25 Oct 2024</p>
                <button className="edit-profile-button">Edit Profile</button>
              </div>
            </div>


            <div className="profile-sectionMiddle">
              <h3>About Me</h3>
              <textarea className="about-me-textarea" placeholder="Share something about yourself..."></textarea>
            </div>

            <div className="profile-sectionBotton">
              <h3>Projects</h3>
              <div className="projects-container">
                {/* aqui los proyectos que tenga */}
              </div>
              <button className="add-project-button">Add Project</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;


  

  
  