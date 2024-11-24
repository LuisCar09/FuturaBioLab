import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Card = ({username,date,title,descriptionProject,projectImg,projectViews,userImg}) => {
    return (
        <div className='container-projects'>
            <div className='image-projects'>
                <img src={projectImg[0]} alt={title} />
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
                        <MoreVertIcon className='moreverticon-projects' />
                    </div>
                </div>
                <div className='nameproject-projects'>
                    <h2>{title}</h2>
                    <p>{descriptionProject}.</p>
                </div>
                <div className='visualizations-projects'>
                    <p>Views: {projectViews.length < 1 ? '0' : projectViews }</p>
                    <FavoriteBorderIcon className='fav-icon-projects' />

                </div>
            </div>
        </div>
    )
}

export default Card