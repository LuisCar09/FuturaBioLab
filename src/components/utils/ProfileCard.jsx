import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const ProfileCard = ({ username, userImg, bio,  createdAt, projects }) => {
    return (
        <div className='container-profile'>
            <div className='profile-header'>
                <img src={userImg} alt={`${username}'s profile`} className='profile-image' />
                <div className='username-container'>
                    <h2>{username}</h2>
                    <p>{createdAt}</p>
                </div>
                <MoreVertIcon className='moreverticon-profile' />
            </div>
            <div className='bio-container'>
                <h3>About Me</h3>
                <p>{bio}</p>
            </div>
            <div className='projects-container'>
                <h3>Projects</h3>
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
                    <p>No projects available.</p>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;