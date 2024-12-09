import Card from '../components/utils/Card';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import ServiceCard from '../components/utils/ServiceCard';

import '../styles/Profile.css'


const Profile = () => {
  const location = useLocation()
  const comingFromMember = location.pathname.includes('member')


  const { id } = useParams();
  const [_id, setId] = useState('')
  const [checkUid, setCheckUid] = useState('')
  const [userName, setUserName] = useState('')
  const [projects, setProjects] = useState([])
  const [userFollowers, setUserFollowers] = useState('')
  const [userFollows, setUserFollows] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userCreatedDate, setUserCreatedDate] = useState('')
  const [userImage,setUserImage] = useState('')
  const [isServiceCliked, setIsServiceCliked] = useState(false)
  const [nameService, setNameService] = useState('')
  const [emailService, setEmailService] = useState('')
  const [descriptionService, setDescriptionService] = useState('')
  const [durationService, setDurationService] = useState('')
  const [priceService, setPriceService] = useState('')
  const [locationService, setLocationService] = useState('')
  const [imageService, setImageService] = useState('')
  const [stockService, setStockService] = useState('')
  const [dateService, setDateService] = useState('')
  const [timeService, setTimeService] = useState('')
  const [services, setServices] = useState([]);
  const [showServiceForm, setShowServiceForm] = useState(false)
  const navigate = useNavigate()
  const uid = localStorage.getItem('uid')
  const token = localStorage.getItem('authToken')


  useEffect(() => {


    const fetchUserData = async () => {
      try { 
        const userId = !comingFromMember ? `${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}users/${uid}` : `${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}users/members/profile/${id}`


        const userDataResponse = await axios.get(`${userId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }

        })
        const userData = userDataResponse.data

        setId(userData[0]._id)
        setUserName(userData[0].userName)
        setUserDescription(userData[0].description)
        setUserFollowers(userData[0].followers)
        setUserFollows(userData[0].follows)
        setUserCreatedDate(userData[0].createdAt)
        setCheckUid(userData[0].uid)
        setUserImage(userData[0].image)

      } catch (error) {
        console.log(error.message);

      }

    }
    fetchUserData()

    if (checkUid) fetchProjects()
    if (checkUid) fetchServices()
    
    
  }, [checkUid])
  
  const createService = async () => {

    try {
      const body = {
        name: nameService,
        email: emailService,
        username: userName,
        description: descriptionService,
        duration: durationService,
        price: priceService,
        location: locationService,
        uid,
        image: imageService,
        stock: stockService,
        date: dateService,
        hour: timeService
      }

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const servicesResponse = await axios.post(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'services/new', body, {
        headers: { Authorization: `Bearer ${token}` }
      })
      

      navigate('/services')
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleButtonClick = () => {
    navigate('/setting');
  }

  const fetchProjects = async () => {
    const userProjects = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}projects/user/${checkUid}`)
    setProjects(userProjects.data)
  }
  const fetchServices = async () => {
   
    
    const userServices = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}services/user/${checkUid}`)
   
    
    setServices(userServices.data)
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
              <img src={userImage} alt="Picture" className="profile-picture" />
              <div className='info-user-follow'>
                <h2 className="user-name">{userName}</h2>
                <div>
                  <p className="user-follows">Followers: {userFollowers}</p>
                  <p className="user-follows">Follows: {userFollows}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-bar-profile">
          <a className="nav-files" onClick={() => setIsServiceCliked(prev => !prev)}>{!isServiceCliked ?   'Services' : 'Projects'}</a>
          {isServiceCliked && (
            <button className="add-service-button" onClick={() => setShowServiceForm(prev => !prev)}>
              {showServiceForm ? 'Cancel' : 'Add Service'}
            </button>
          )}
        </div>
        <article className='article-profile-container'>
          {!isServiceCliked ? (
            <>
              <div className='profile-content'>
                <div className='profile-edit'>
                  <h3>Profile</h3>
                  {checkUid === localStorage.getItem('uid') ? (
                    <button className="edit-profile-button" onClick={handleButtonClick}>
                      <EditIcon className='editicon' />
                      Edit Profile
                    </button>) : ''}
                </div>
                <div className='registration-container'>
                  <p>Registration Date: {userCreatedDate.split('T')[0]}</p>
                </div>
              </div>
              <div className="about-me-container">
                <h3>About Me</h3>
                <div className="about-me-profile">{userDescription}</div>
              </div>
              <div className="projects-container-profile">
                <div className="projects-title-profile">
                  <h3>Projects</h3>
                  {checkUid === localStorage.getItem('uid') && <Link to='/projects/new' className="add-project-button">Add Project</Link>}
                </div>
                <div className='projects--profile'>
                  {projects.length > 0 ? (
                    projects.map(project => (
                      
                      <Card key={crypto.randomUUID()} id={project._id} username={project.owner} date={project.createdAt.split('T')[0]} title={project.nameproject} descriptionProject={project.description} projectImg={project.image} projectViews={project.views} userImg={project.image}
                      />
                    ))
                  ) : (
                    <p>Don't have projects</p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className='service-article-container-servicesnew'>
              {showServiceForm ? (
                <form className='form-servicesnew'>
                  <div className='title-container-servicesnew'>
                    <div className='infouser-container-servicenew'>
                      <h2>Service Name</h2>
                      <input
                        id='title-service'
                        placeholder="Enter the service name"
                        value={nameService}
                        onChange={(e) => setNameService(e.target.value)}
                        required />
                    </div>
                    <div className='infouser-container-servicenew'>
                      <h2>Email</h2>
                      <input
                        id='email-service'
                        placeholder="Enter the email contact"
                        value={emailService}
                        onChange={(e) => setEmailService(e.target.value)}
                        required />
                    </div>
                  </div>
                  <div className='description-container-servicesnew'>
                    <h2>Description</h2>
                    <textarea placeholder='Enter the description of the service'
                      value={descriptionService}
                      onChange={(e) => setDescriptionService(e.target.value)}></textarea>
                  </div>

                  <div className='duration-price-location-servicesnew'>
                    <div className='duration-servicenew'>
                      <h2>Duration</h2>
                      <input
                        id='duration-service'
                        value={durationService}
                        onChange={(e) => setDurationService(e.target.value)}
                        placeholder='Ex: 30'
                      />
                    </div>
                    <div className='price-servicenew'>
                      <h2>Price</h2>
                      <input
                        id='price-service'
                        value={priceService}
                        onChange={(e) => setPriceService(e.target.value)}
                        placeholder='Ex: 50'
                      />
                    </div>
                    <div className='location-servicenew'>
                      <h2>Location</h2>
                      <input
                        id='location-service'
                        value={locationService}
                        onChange={(e) => setLocationService(e.target.value)}
                        placeholder='Ex: City'
                      />
                    </div>
                  </div>
                  <div className='date-time-stock-servicesnew'>
                    <div className='location-servicenew'>
                      <h2>Date</h2>
                      <input
                        id='date-service'
                        value={dateService}
                        onChange={(e) => setDateService(e.target.value)}
                        placeholder='DD/MM/YYYY'
                      />
                    </div>
                    <div className='location-servicenew'>
                      <h2>Time</h2>
                      <input
                        id='time-service'
                        value={timeService}
                        onChange={(e) => setTimeService(e.target.value)}
                        placeholder='Ex: 18:00'
                      />
                    </div>
                    <div className='location-servicenew'>
                      <h2>Stock</h2>
                      <input
                        id='stock-service'
                        value={stockService}
                        onChange={(e) => setStockService(e.target.value)}
                        placeholder='Ex: 20'
                      />
                    </div>
                  </div>
                  <div className='image-servicenew'>
                    <h2>Image</h2>
                    <input
                      id='image-service'
                      value={imageService}
                      onChange={(e) => setImageService(e.target.value)}
                      placeholder='Ex: https://www.envaselia.com/images_blog/que-son-los-bioplasticos.jpg,'
                    />
                  </div>
                  <div className='container-button-servicenew'>
                    <button type="button" className='button-servicesnew' onClick={createService}>Create</button>
                  </div>
                </form>
              ) : (
                <div className='noserviceavailable-servicenews'>
                  <div className='services-container'>
                  {services.length > 0 ? (
                    services.map(service => (
                      
                
                      <ServiceCard key={service._id} id={service._id} title={service.name} image={service.image[0]} price={service.price} uid={service.uid} />
                      
                    ))
                  ) : (
                    <p>No services available</p> 
                  )}
                  </div>
                </div>
              )}
            </div>
          )}
        </article>
      </section>
    </main>
  );
};

export default Profile;
// {showService && (
//   <section className='service-payment--container'>
//       <div className='service-payment--wrapcontainer'>
//       <article className='articletop-calendar'>
//           <h1>{service.name}</h1>
//           <div className='article-description-servicedetail'>
//               <h2>{service.description}</h2>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus exercitationem, vitae quidem nulla cupiditate tempora, ipsum, vero et optio alias amet a ab sequi quo voluptate deleniti quae aspernatur.</p>
//               <img src={service.image} alt='Service'
//               />
//           </div>

//       </article>
//       <article className='articlebottom-calendar'>

//           <div className='servicedetail-calendar'>

//               <div className='detailicon-calendar'>
//                   <VideocamIcon />
//                   <p>Available online</p>
//               </div>
//               <div className='infoservice-calendar'>
//                   <h4><span>Service name:</span> {service.name}</h4>
//                   <p> <span>Location: </span> {service.location} </p>
//                   <p><span>Member:</span> {service.username}</p>
//                   <p><span>Duration:</span> {service.duration}</p>
//                   <p><span>Price: </span> {service.price}</p>
//                   <p><span>Time: </span> {service.hour}</p>
//                   <p><span>Stock: </span> {service.stock}</p>
//               </div>
//               <div className='button-calendar'>

//                   <Link to={`/reservation/${service._id}`}><button  >Next</button></Link>
//               </div>
//           </div>
//       </article>
//       </div>
//   </section>
// )}