import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../styles/Setting.css';


function SettingsProfile() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext)
    const [_id,setId]  = useState('')
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [userEmail,setUserEmail] = useState('')
    const [userName,setUserName] = useState('')
    const [userPhone,setUserPhone] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const uid = localStorage.getItem('uid')
    const authToken = localStorage.getItem('authToken')
    
    
    
    const updateUser = async (event) => {
        event.preventDefault()
        try {
            const body = {
                name,
                lastName,
                email:userEmail,
                userName,
                phone: !userPhone ? '' : userPhone  ,
                description: !userDescription ? '' : userDescription
            }
            await axios.put(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}users/${_id}`,body )
            
        } catch (error) {
            console.log(error.message);
            
        }
        
    }

    useEffect(() =>{
        
        const fetchUserData = async () =>{
           try {
            axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`
            const userDataResponse = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}users/${uid}`,{
                headers:{Authorization:`Bearer ${authToken}`}
            })
            const userData = userDataResponse.data
            setName(userData[0].name)
            setLastName(userData[0].lastName)
            setUserName(userData[0].userName)
            setUserEmail(userData[0].email)
            setUserPhone(userData[0].phone)
            setUserDescription(userData[0].description)
            setId(userData[0]._id)
           } catch (error) {
            console.log(error.message);
            
           }
            
        }
        fetchUserData()
    },[])

  
    
    return (
        <main className='main-settingsprofile'>
            <section className='section-settingsprofile'>
                <aside className='asidetop-settingsprofile'>
                    <h1>Account settings</h1>
                    <div className='navigationbar-settingsprofile'>
                        <a href='#' className='myaccount-settingsprofile'>My Account</a>
                        <a href='#' className='myaccount-settingsprofile'>My Wallet</a>
                        <a href='#' className='settings-settingsprofile'>Settings</a>
                    </div>
                </aside>
                <aside className='asidebottom-settingsprofile'>
                    <div className='account-container-settingsprofile'>
                        <div className='accounttitle-settingsprofile'>
                            <h2>Account</h2>
                            <p>Edit your personal information</p>
                        </div>
                        <div className='accountbuttons-settingsprofile'>
                            <button className='cancelbutton-settingsprofile'>
                                Cancel
                            </button>
                            <button className='updatebutton-settingsprofile'>
                                Update information
                            </button>
                        </div>
                    </div>

                    <div className='info-container-settingsprofile'>
                        <h3>Information to display</h3>
                        <p>This information will be visible to all users of this site</p>
                    </div>
                    <form className='form-settingsprofile'>
                        <div className='name-container-settingsprofile'>
                            <div className='name-settingsprofile'>
                                <label htmlFor='input-name' className='label-settingsprofile'>Usename*</label>
                                <input
                                    id='input-name'
                                    type='text'
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                    />
                                    
                            </div>
                            <div className='name-settingsprofile'>
                                <label htmlFor='input-nickcname' className='label-settingsprofile'>Email</label>
                                <input
                                    id='input-nickcname'
                                    type='email'
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    required />
                            </div>
                        </div>

                        <div className='personalinfo-title-settingsprofile'>
                            <h3>Personal information</h3>
                            <p>Update your personal information</p>
                        </div>
                        <div className='personalinfo-input-settingsprofile'>
                            <div className='input--container-settingsprofile'>
                                <label className='label-settingsprofile'>Name</label>
                                <div className='input-name-settingsprofile'>
                                    <input id='input-name' 
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    
                                    required
                                    />

                                </div>
                            </div>
                            <div className='input--container-settingsprofile'>
                                <label className='label-settingsprofile'>Lastname</label>
                                <div className='input-name-settingsprofile'>
                                    <input id='input-lastname' 
                                    type='text' 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required

                                    />

                                </div>
                            </div>
                        </div>
                        <div className='input--container-settingsprofile'>
                            <label className='label-settingsprofile'>Phone number</label>
                            <div className='input-name-settingsprofile'>
                                <input id='input-phone' 
                                type='text' 
                                value={userPhone}
                                onChange={(e) => setUserPhone(e.target.value)}
                                required  
                                />

                            </div>
                        </div>
                        <div className='input--container-settingsprofile'>
                            <label className='label-settingsprofile'>Description</label>
                            <div className='input-name-settingsprofile'>
                                <input id='input-description' 
                                type='text' 
                                value={userDescription}
                                onChange={(e) => setUserDescription(e.target.value)}
                                required
                                />

                            </div>
                        </div>

                        <div className='accountbuttons-bottom-settingsprofile'>
                            <button className='cancelbutton-settingsprofile'>
                                Cancel
                            </button>
                            <button className='updatebutton-settingsprofile' onClick={updateUser} type='submit' >
                                Update information
                            </button>
                        </div>
                    </form>
                </aside>
            </section>
        </main>
    );
}

export default SettingsProfile;



