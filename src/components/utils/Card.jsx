import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Card = ({id,username,date,title,descriptionProject,projectImg,projectViews,userImg}) => {
    const [showOverlay,setShowOverlay] = useState(false)
    
    
    return (
        <>
       
        <div className='container-projects'>
        
            <div className='image-projects'>
            <Link to={`/projects/${id}`} className={!showOverlay ? 'link-to-project ': 'link-to-project overlay'} onMouseEnter={() => setShowOverlay(!showOverlay)}  onMouseLeave={() => setShowOverlay(!showOverlay)} >
                <img src={projectImg[0]} alt={title} />
            </Link>
            </div>
            <div className='info-projects'>
                <div className='usercontainer-projects'>
                    <div className='user-projects'>
                        <img
                            src={userImg[0]}
                            alt={username}
                            className='profile-image'
                        />
                        <div className='username-container'>
                            <p>{username}</p>
                            <div className='date-projects'>
                                <p>{date}</p>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='nameproject-projects'>
                    <h2>{title}</h2>
                   {/* <p>{descriptionProject}.</p> */}
                </div>
                <div className='visualizations-projects'>
                    <p>Views: {projectViews.length < 1 ? '0' : projectViews }</p>
                    <FavoriteBorderIcon className='fav-icon-projects' />

                </div>
            </div>
        </div>
        </>
    )
}

export default Card