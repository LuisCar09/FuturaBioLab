import { Link } from "react-router-dom"
import { useState } from "react"
const ServiceCard = ({ id, image, title, price,uid }) => {
    const [showOverlay, setShowOverlay] = useState(false)
    console.log(uid);
    
    return (
        <div className='service-item' key={id}>
            <Link to={`/services/${id}`} className={!showOverlay ? 'link-to-project ' : 'link-to-project overlay'} onMouseEnter={() => setShowOverlay(!showOverlay)} onMouseLeave={() => setShowOverlay(!showOverlay)} >
                <img src={image} alt={title} />
                
            </Link>
            <div className='servicetitle-services'>
                <h3>{title}</h3>
                <p>{price}</p>
                <Link to={`/services/${id}`}>
                    <button className='button-services'>Reserve now</button>
                </Link>
            </div>
        </div>
    )
}
export default ServiceCard