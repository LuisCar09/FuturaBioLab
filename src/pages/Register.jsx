import { useState } from "react"
import {auth} from '../../config/firebase.js'
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import UserDataRegister from "./UserDataRegister"
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import '../styles/Register.css'

const Register = () => {
    const [showRequestData, setShowRequestData] = useState(false)
    const [userEmail,setUserEmail] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const [name,setName] = useState('')
    const [userName,setUserName] = useState('')
    const [userLastName,setUserLastName] = useState('')
    const [userPhone,setUserPhone] = useState('')
    const [userBirthdate,setUserBirthdate] = useState('')
    const [userOffers,setUserOffers] = useState('')
    const [userPreferences,setUserPreferences] = useState('')
    const [userUid,setUserUid] = useState(null)
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const handleForm = async (event) => {
        event.preventDefault()
        
        
       try {
            
           const userCredential = await createUserWithEmailAndPassword(auth,userEmail,userPassword)
           
           
            const user = userCredential.user
            
            
            const token = await user.getIdToken()
           
            
            localStorage.setItem('authToken',token)
            setUserUid(user.uid)
            setShowRequestData(true)
            
        } catch (error) {
            if(error.message === 'auth/email-already-in-use') 
            setError(error.message)
            navigate('/login')
            
        }
    }
    
    
    const handleCreateUser = async(event) => {
    event.preventDefault()
    
    try {
        const body = {name:name,userName:userName, lastName:userLastName,email:userEmail,password: userPassword, dateBirth: userBirthdate, uid:userUid}
        console.log(body);
        
        const createUser = await axios.post('http://localhost:8080/users/newuser',body)
        console.log(createUser.data.success);
        !createUser.data.success ? null : navigate('/login')
        
       } catch (error) {
        console.error({message:'Error creating user'})
        setError(error.message)
        }
    }
    return (
        <main className='main-container'>
            {!showRequestData ? (
                <div className="contact-container">
                <h1>Register</h1>
                <h3>Have an account? <a href="/login">Log in now</a> </h3>
                <div className="providerAuth">
                <div id="google" className="providers-logo">
                    <GoogleIcon />
                </div>
                <div id="github" className="providers-logo">
                    <GitHubIcon />
                </div>
                <div id="facebook" className="providers-logo">
                    <FacebookIcon />
                </div>
                <div id="facebook" className="providers-logo">
                    <XIcon />
                </div>
                </div>

                <form onSubmit={handleForm} method="post" id="login-form" className="login-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" autoComplete="true" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} required  />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="**********" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} autoComplete='true' required  />

                    <button type="submit">Register</button>

                    <button type="button">Back</button>
                </form>

                <div id="message">

                </div>
            </div>
              
            )
            :
            <UserDataRegister setPhone = {setUserPhone} setUname={setUserName} setLastName={setUserLastName} setBirthdate={setUserBirthdate} setNameUser={setName} setOffers = {setUserOffers} setPreferences={setUserPreferences} functionCreateUser = {handleCreateUser} />  
            }
        </main>
    )
}

export default Register

