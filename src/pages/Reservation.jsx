import { useContext, useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import '../styles/Reservation.css';
import axios from 'axios';

const Reservation = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const {id} = useParams()
    const token = localStorage.getItem('authToken')
    const [service,setService] = useState('')
    const [userName,setUserName] = useState('')
    const [userEmail,setUserEmail] = useState('')
    const [userPhone,setUserPhone] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [_id,set_id] =useState('')
    const {user} = useContext(UserContext)
    const {name,email} = user[0]

    

    const [message,setMessage] = useState('')
    const [addedToCard,setAddedToCar] = useState(false)

    const [FieldsCompletes,setFieldsCompletes] = useState(false)
    // FALTA QUE AL HACER CLICK ME GUARDE EN EL LOCALHOST LO QUE SE HA COMPRADO Y LUEHO EL PAGO

    
  
    const handlerAddToCar = () => {
        
        const existAddProduct = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []


        const body = {
            uidOwner : service.uid,            
            uidBuyer: localStorage.getItem('authToken'),
            price: service.price,
            serviceid : id,
            name:service.name
        }
        const isReapeated = existAddProduct.findIndex(item => item.serviceid  === body.serviceid)
       
        
        isReapeated === -1 ? existAddProduct.push(body) : setMessage('Service already in the cart')
        
        
        
        localStorage.setItem('items',JSON.stringify(existAddProduct))
        setAddedToCar(!addedToCard)
        setTimeout(() => {
            setMessage('')
        },2000)
        
        
        
        
    }
    useEffect(() => {
        const fetchService = async () => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            const service = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}services/${id}` ,{
                headers:{Authorization: `Bearer ${token}`}
                
            })
            
            setService(service.data);
            

            if(service.data.uid){
                set_id(service.data.uid)
            }else {
                console.error("Uid not found");
            }
            
        }
        fetchService()
    },[id,token])
    
   
    const isFieldsCompletes = userName !== '' && userEmail !== ''
   
    useEffect(() => {

        setFieldsCompletes(userName && userEmail)
    },[userName,userEmail])
    
   
    

    return (
        <main className='main-formreservation'>
            <section className='section-formreservation'>
                <aside className='details-formreservation'>
                    <h2>Service details</h2>
                </aside>

                <div className='form-formreservation-children'>
                    <form className='form-formreservation'>
                        <div className='name-formreservation'>
                            <div className='name-email-formresservation'>
                                <label htmlFor='name-input' className='label-formreservation'>
                                    Name*
                                </label>
                                <input 
                                    id='name-input'
                                    type='text'
                                    value={user[0].name}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />                     
                            </div>
                            <div className='name-email-formresservation'>
                                <label htmlFor='email-input' className='label-formreservation'>
                                    Email*
                                </label>
                                <input 
                                    id='email-input'
                                    type='email'
                                    value={user[0].email}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    required
                                />

                            </div>
                        </div>

                        <div className='phone-formreservation'>
                            <label htmlFor='phone-input' className='label-formreservation'>
                                Phone number
                            </label>
                            <input 
                                id='phone-input'
                                type='text'
                                value={userPhone || ''}
                                onChange={(e) => setUserPhone(e.target.value)}
                                required
                            />
                            <p>Add a message</p>
                            <textarea 
                            className='textarea-formreservation'
                            value={userDescription || ''}
                            onChange={(e) => setUserDescription(e.target.value)}
                            ></textarea>
                        </div>

                        
                    
                    {!isFieldsCompletes && <h4>Please fill in both fields before adding to cart</h4>}
                    </form>

                    <div className='data-formreservation'>
                        <div className='data-formreservation-details'>
                            <h3>Reservation details</h3>
                            <p>Service name: {service.name} </p>
                            <p>Date: {service.date} </p> 
                            <p>Time: {service.hour} min </p>
                            <p>Duration: {service.duration} min </p>
                        </div>
                        <h3>Payment details</h3>
                        <div className='price-formreservation'>
                            <p className='price'>Total</p>
                            <p className='amount'>{service.price} €</p>
                        </div>
                        <div className='buttons-formreservation'>
                            <div className='message-container'>{!message ? '' : message }</div>
                            <button className= {addedToCard ? 'addbutton-formreservation showaddbutton-formreservation':'addbutton-formreservation'} onClick={handlerAddToCar}
                            disabled={!isFieldsCompletes}>Add to cart</button>
                            <Link to={'/mycart'}><button className= {!addedToCard ? 'addbutton-formreservation showaddbutton-formreservation':'addbutton-formreservation'}>Checkout</button></Link>
                            <Link to={'/services'}>
                                <button   className='addbutton-formreservation' >Continue shopping</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                
            </section>
        </main>
    );
}

export default Reservation;
