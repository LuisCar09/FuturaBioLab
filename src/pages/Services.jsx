
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './Spinner'
import { LinkedCamera } from '@mui/icons-material';
import '../styles/Services.css';
function Services() {
    const [services,setServices ] = useState('') ;
    const token = localStorage.getItem('authToken')
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const servicesResponse = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'services')
                
                setServices(servicesResponse.data)
            } catch (error) {
                console.log(error.message);
                
            }
        }
        fetchServices()
    },[])
    return (
        <main className='main-services'>
            <section className='section-services'>
                <div className='services-title'>
                <h1>Our Services</h1>
                <h2>All services</h2>

                </div>

                <div className='services-container'>
                    {services ?  services.map((service) => (
                        
                        <div className='service-item' key={service._id}>
                            <img src={service.image[0]} alt={service.name} />
                           <div className='servicetitle-services'> 
                            <h3>{service.name}</h3>
                            <p>{service.price}</p>
                            <Link to={`/services/${service._id}`}>
                              <button className='button-services'>Reserve now</button>
                            </Link>
                            </div>
                        </div>
                    )): <Spinner />}
                </div>
            </section>
        </main>
    );
}

export default Services;
