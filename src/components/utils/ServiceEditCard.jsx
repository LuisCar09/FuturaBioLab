
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ServiceEditCard = () =>{
    const {id} = useParams()
    const token = localStorage.getItem('authToken')
    const [service,setService] = useState('')
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
    const [serviceId, setServiceId] = useState('')
    useEffect(()=> {
        const fetchService = async () =>{
           try {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

            
            console.log('http://localhost:8080/projects/' + id);
            const projectResponse = await axios.get('http://localhost:8080/services/' + id,{
                headers:{Authorization: `Bearer ${token}`},
            } )
            console.log(projectResponse.data);
            setNameService(projectResponse.data.name)
            setServiceId(projectResponse.data._id)
            setDurationService(projectResponse.data.duration)
            setEmailService(projectResponse.data.email)
            setDescriptionService(projectResponse.data.description)
            setLocationService(projectResponse.data.location)
            setPriceService(projectResponse.data.price)
            setDateService(projectResponse.data.date)
            setTimeService(projectResponse.data.time)
            setStockService(projectResponse.data.stock)
            setImageService(projectResponse.data.image)
           } catch (error) {
            console.log(error.message);
            
           }
            
            
        }
        fetchService()
    },[])
    console.log();
    
    return(
        //   <form className='form-servicesnew'>
        //             <div className='title-container-servicesnew'>
        //               <div className='infouser-container-servicenew'>
        //                 <h2>Service Name</h2>
        //                 <input
        //                   id='title-service'
        //                   placeholder="Enter the service name"
        //                   value={nameService}
        //                   onChange={(e) => setNameService(e.target.value)}
        //                   required />
        //               </div>
        //               <div className='infouser-container-servicenew'>
        //                 <h2>Email</h2>
        //                 <input
        //                   id='email-service'
        //                   placeholder="Enter the email contact"
        //                   value={emailService}
        //                   onChange={(e) => setEmailService(e.target.value)}
        //                   required />
        //               </div>
        //             </div>
        //             <div className='description-container-servicesnew'>
        //               <h2>Description</h2>
        //               <textarea placeholder='Enter the description of the service'
        //                 value={descriptionService}
        //                 onChange={(e) => setDescriptionService(e.target.value)}></textarea>
        //             </div>

        //             <div className='duration-price-location-servicesnew'>
        //               <div className='duration-servicenew'>
        //                 <h2>Duration</h2>
        //                 <input
        //                   id='duration-service'
        //                   value={durationService}
        //                   onChange={(e) => setDurationService(e.target.value)}
        //                   placeholder='Ex: 30'
        //                 />
        //               </div>
        //               <div className='price-servicenew'>
        //                 <h2>Price</h2>
        //                 <input
        //                   id='price-service'
        //                   value={priceService}
        //                   onChange={(e) => setPriceService(e.target.value)}
        //                   placeholder='Ex: 50'
        //                 />
        //               </div>
        //               <div className='location-servicenew'>
        //                 <h2>Location</h2>
        //                 <input
        //                   id='location-service'
        //                   value={locationService}
        //                   onChange={(e) => setLocationService(e.target.value)}
        //                   placeholder='Ex: City'
        //                 />
        //               </div>
        //             </div>
        //             <div className='date-time-stock-servicesnew'>
        //               <div className='location-servicenew'>
        //                 <h2>Date</h2>
        //                 <input
        //                   id='date-service'
        //                   value={dateService}
        //                   onChange={(e) => setDateService(e.target.value)}
        //                   placeholder='DD/MM/YYYY'
        //                 />
        //               </div>
        //               <div className='location-servicenew'>
        //                 <h2>Time</h2>
        //                 <input
        //                   id='time-service'
        //                   value={timeService}
        //                   onChange={(e) => setTimeService(e.target.value)}
        //                   placeholder='Ex: 18:00'
        //                 />
        //               </div>
        //               <div className='location-servicenew'>
        //                 <h2>Stock</h2>
        //                 <input
        //                   id='stock-service'
        //                   value={stockService}
        //                   onChange={(e) => setStockService(e.target.value)}
        //                   placeholder='Ex: 20'
        //                 />
        //               </div>
        //             </div>
        //             <div className='image-servicenew'>
        //               <h2>Image</h2>
        //               <input
        //                 id='image-service'
        //                 value={imageService}
        //                 onChange={(e) => setImageService(e.target.value)}
        //                 placeholder='Ex: https:www.envaselia.com/images_blog/que-son-los-bioplasticos.jpg,'
        //               />
        //             </div>
        //             <div className='container-button-servicenew'>
        //               <button type="button" className='button-servicesnew' onClick={createService}>Create</button>
        //             </div>
        //           </form>
        <></>
       
    )
}

export default ServiceEditCard