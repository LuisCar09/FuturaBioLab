import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const ProfileCard = ({ username, userImg, description, createdAt, projects }) => {
    return (
        <div className='profile-container'>
            <div className='profile-info'>
                <img src={userImg} alt={`${username}'s profile`} className='profile-picture' />
                <div className='info-user-follow'>
                    <h2 className='user-name'>{username}</h2>
                    <p className='registration-date'>{createdAt}</p>
                </div>
                <MoreVertIcon className='morevert-icon' />
            </div>
            <div className='about-me-container'>
                <h3>About Me</h3>
                <p>{description}</p>
            </div>
            <div className='projects-container-profile'>
                <div className='projects-title-profile'>
                    <h3>Projects</h3>
                    <a href='#' className='add-project-button'>Add Project</a>
                </div>
                <div className='projects--profile'>
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <Link to={`/projects/${project.id}`} key={project.id} className='project-link'>
                                <div className='project-item'>
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>Don't have projects</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;