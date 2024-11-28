
import { Link } from 'react-router-dom';
import { LinkedCamera } from '@mui/icons-material';
import '../styles/Services.css';

function Services() {
    const services = [
        {
            imgSrc: 'https://images.squarespace-cdn.com/content/v1/5b7d960e372b9653287cff63/1617444432552-N6PO7QW2R4HZ3PRXY3WI/Cursos_Bioplasticos3_800x600px.jpg',
            name: 'Service 1',
            price: '45 US$',
        },
        {
            imgSrc: 'https://images.squarespace-cdn.com/content/v1/5b7d960e372b9653287cff63/1617444432552-N6PO7QW2R4HZ3PRXY3WI/Cursos_Bioplasticos3_800x600px.jpg',
            name: 'Service 2',
            price: '50 US$',
        },
        {
            imgSrc: 'https://images.squarespace-cdn.com/content/v1/5b7d960e372b9653287cff63/1617444432552-N6PO7QW2R4HZ3PRXY3WI/Cursos_Bioplasticos3_800x600px.jpg',
            name: 'Service 3',
            price: '60 US$',
        },
        {
            imgSrc: 'https://images.squarespace-cdn.com/content/v1/5b7d960e372b9653287cff63/1617444432552-N6PO7QW2R4HZ3PRXY3WI/Cursos_Bioplasticos3_800x600px.jpg',
            name: 'Service 4',
            price: '70 US$',
        },
        {
            imgSrc: 'https://images.squarespace-cdn.com/content/v1/5b7d960e372b9653287cff63/1617444432552-N6PO7QW2R4HZ3PRXY3WI/Cursos_Bioplasticos3_800x600px.jpg',
            name: 'Service 5',
            price: '80 US$',
        },
        {
            imgSrc: 'https://images.squarespace-cdn.com/content/v1/5b7d960e372b9653287cff63/1617444432552-N6PO7QW2R4HZ3PRXY3WI/Cursos_Bioplasticos3_800x600px.jpg',
            name: 'Service 6',
            price: '90 US$',
        },
        {
            imgSrc: 'https://images.squarespace-cdn.com/content/v1/5b7d960e372b9653287cff63/1617444432552-N6PO7QW2R4HZ3PRXY3WI/Cursos_Bioplasticos3_800x600px.jpg',
            name: 'Service 7',
            price: '100 US$',
        },
        {
            imgSrc: 'https://images.squarespace-cdn.com/content/v1/5b7d960e372b9653287cff63/1617444432552-N6PO7QW2R4HZ3PRXY3WI/Cursos_Bioplasticos3_800x600px.jpg',
            name: 'Service 8',
            price: '110 US$',
        },
        {
            imgSrc: 'https://images.squarespace-cdn.com/content/v1/5b7d960e372b9653287cff63/1617444432552-N6PO7QW2R4HZ3PRXY3WI/Cursos_Bioplasticos3_800x600px.jpg',
            name: 'Service 9',
            price: '120 US$',
        },
    ];

    return (
        <main className='main-services'>
            <section className='section-services'>
                <div className='services-title'>
                <h1>Our Services</h1>
                <h2>All services</h2>

                </div>

                <div className='services-container'>
                    {services.map((service) => (
                        <div className='service-item' key={service.id}>
                            <img src={service.imgSrc} alt={service.name} />
                           <div className='servicetitle-services'> 
                            <h3>{service.name}</h3>
                            <p>{service.price}</p>
                            <Link to='/calendar'>
                              <button className='button-services'>Reserve now</button>
                            </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Services;
