import { useState,useEffect } from "react";
import { auth } from "../../config/firebase";
import { Link } from "react-router-dom"
import {signInWithEmailAndPassword} from 'firebase/auth'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

import '../styles/Login.css'


const Login = () => {
    const [userEmail,setUserEmail] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const [message,setMessage]= useState('')
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const singInUser = async () =>{
       
        try {
            const userCredential = await signInWithEmailAndPassword(auth,userEmail,userPassword)
            const user = userCredential.user
            const token = await user.getIdToken()

        
            localStorage.setItem('authToken',token)
            
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

            
            const response = await axios.get('http://localhost:8080/users/' + user.uid, {
                headers:{Authorization: `Bearer ${token}`},
            } )
            
            setUser(response.data)
            
            !response.data ? null : navigate('/profile') 
              

        } catch (error) {
            console.error(error.message);
            setMessage('The user does not exist, please go to Register') //Un div or algo lo dejo a tu creatividad.
            
        }
    }

    useEffect(()=> {

    },[])
    
    return (
        <main className='main-container'>
             <div className="contact-container">
            <h1>Log in to your account</h1>
            <h3>Don't have an account? <Link to="/register">Sign Up </Link> </h3>
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
                <div id="twitterX" className="providers-logo">
                    <XIcon />
                </div>
            </div>
            <form  method="post" id="login-form"  className="login-form">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required placeholder="email" autoComplete='true'  onChange={(event) => setUserEmail(event.target.value) } value={userEmail} />
        
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="**********" required autoComplete='true' onChange={(event) => setUserPassword(event.target.value) }  value={userPassword} />
        
                <div className="message-login">
                {message && <div id="message" >{message}</div>}
                </div>
                <button id="login" className="login" type="button" onClick={singInUser} >Login</button>
                <button id="back" type="button"  >Back</button>
        
            </form>
           
        </div>
        </main>
            
        
    )
}

export default Login