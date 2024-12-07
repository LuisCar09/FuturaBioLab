import '../styles/Calendar.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Reservation from './Reservation';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ServiceCard() {
    const [selectedHour, setSelectedHour] = useState('');
    const [service,setService] = useState('')
    const [showService,setShowService] = useState(true)
    const navigate = useNavigate(); 
    const {id} = useParams()
    const token = localStorage.getItem('authToken')
    
    
  
   

useEffect(() => {
    const fetchService = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const service = await axios.get(`http://localhost:8080/services/${id}`,{
            headers:{Authorization: `Bearer ${token}`}
        })
        setService(service.data);
        
    }
    fetchService()
},[])
    
    
    return (
       <>
                {showService ? (
                    <section className='service-payment--container'>
                        <div className='service-payment--wrapcontainer'>
                        <article className='articletop-calendar'>
                            <h1>{service.name}</h1>
                            <div className='article-description-servicedetail'>
                                <h2>{service.description}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus exercitationem, vitae quidem nulla cupiditate tempora, ipsum, vero et optio alias amet a ab sequi quo voluptate deleniti quae aspernatur.</p>
                                <img src={service.image} alt='Service'
                                />
                            </div>

                        </article>
                        <article className='articlebottom-calendar'>

                            <div className='servicedetail-calendar'>

                                <div className='detailicon-calendar'>
                                    <VideocamIcon />
                                    <p>Available online</p>
                                </div>
                                <div className='infoservice-calendar'>
                                    <h4><span>Service name:</span> {service.name}</h4>
                                    <p> <span>Location: </span> {service.location} </p>
                                    <p><span>Member:</span> {service.username}</p>
                                    <p><span>Duration:</span> {service.duration}</p>
                                    <p><span>Price: </span> {service.price}</p>
                                    <p><span>Time: </span> {service.hour}</p>
                                    <p><span>Stock: </span> {service.stock}</p>
                                </div>
                                <div className='button-calendar'>

                                    <Link to={`/reservation/${service._id}`}><button  >Next</button></Link>
                                </div>
                            </div>
                        </article>
                        </div>
                    </section>
                ) : 
                <>
                <Reservation serviceName={service.name} serviceDuration= {service.duration} servicePrice={service.price} backToServiceCard={setShowService}  />
                </>
                }
          </>
    );
}

export default ServiceCard;
