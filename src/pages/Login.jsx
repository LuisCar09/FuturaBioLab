import { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import { Link } from "react-router-dom"
import { GithubAuthProvider, signInWithEmailAndPassword, linkWithCredential,deleteUser,TwitterAuthProvider,GoogleAuthProvider, signInWithPopup ,signOut} from "firebase/auth"

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import Spinner from './Spinner.jsx'

import checkerFunctions from '../components/functions/checkFunctions.js'
import '../styles/Login.css'


const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider()

const Login = () => {
  
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userDoesNotExistMessage,setUserDoesNotExistMessage] = useState(false)
    const [userRegistereWithOtherProvider,setUserRegistereWithOtherProvider] = useState(null)
    const [isLoginFieldsCompleted, setIsLoginFieldsCompleted] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const singInUser = async () => {
        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
           
            setLoading(true)

            const user = userCredential.user;
            const token = await user.getIdToken();
            

            localStorage.setItem('authToken', token);
            localStorage.setItem('uid', user.uid);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

           

            const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/' + user.uid, {
                headers: { Authorization: `Bearer ${token}` },
            });
           

            setUser(response.data);
           
            
            !response.data ? console.log(false) : navigate('/profile');
        } catch (error) {
            console.error(error.message);
            setUserDoesNotExistMessage(true);
            setLoading(false)
        }
    };

    const singInWithGoogle = async () => {
        
        try {
            
            const logIn = await signInWithPopup(auth,provider)
            setLoading(true)
            
            const credential = logIn.user
            const token = credential.stsTokenManager.accessToken
            const existUser = await checkerFunctions.handleExistUser(credential.email)
            console.log(existUser);
            
            localStorage.setItem('authToken',token)
            localStorage.setItem('uid',credential.uid)

            if (!existUser){
  
                
                setUserDoesNotExistMessage(true)
                deleteUser(auth.currentUser)
            }else{
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                 
                 
                  const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/' + credential.uid, {
                      headers:{Authorization: `Bearer ${token}`},
                  }
    
                  )
                  console.log(response.data);
                 
                  setUser(response.data);
                   setLoading(false)
                 
                  !response.data ? null : navigate('/')
            }
        
            
            
            

        } catch (error) {
            console.log(error);
            
        }
    }
    const signInWithGitHub  = async () => {
        try {
            //Barb hacer esta parte. Login con github
            const result = await signInWithPopup(auth, gitHubProvider);
            
            console.log("Autenticado con GitHub:", result.user);
        } catch (error) {
           console.log(error);
           if (error.code === 'auth/account-exists-with-different-credential') {
                const userCredentials = error.customData
                console.log(userCredentials);
                
                setUserRegistereWithOtherProvider(userCredentials._tokenResponse.providerId)
           }
        }
      };
      
    useEffect(()=> {
        
        const checkEmail = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (userPassword.length >= 10 && emailRegex.test(userEmail)) {
                setIsLoginFieldsCompleted(true);
            } else {
                setIsLoginFieldsCompleted(false);
            }
            setUserDoesNotExistMessage(null)
        }
        checkEmail()
    },[userEmail, userPassword])
    useEffect(() => {
        //Aqui haremos el loading de login
        
        !user || user?.length < 1 ? console.log(false,'no existe data') : console.log(true,' existe data')
        

    },[user])
    
    useEffect (()=> {
        localStorage.clear()
        if (auth?.currentUser) signOut(auth)
    },[])
    
    return (
        <main className='main-login'>
            {loading ? (
                <div className="spinner-container">
                    <Spinner />
                </div>
            ) : (
                <div className="contact-container">
                    <h1>Log in to your account</h1>
                    <h4>Don't have an account? <Link to="/register">Sign Up </Link> </h4>
    
                    <form method="post" id="login-form" className="login-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            required 
                            placeholder="email" 
                            autoComplete='true'  
                            onChange={(event) => setUserEmail(event.target.value)} 
                            value={userEmail} 
                        />
    
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="**********" 
                            required 
                            autoComplete='true' 
                            onChange={(event) => setUserPassword(event.target.value)}  
                            value={userPassword} 
                        />
    
                        <div className="message-login">
                            {message && <div id="message">{message}</div>}
                            {userDoesNotExistMessage && (
                                <div id='message'>
                                    Email does not exist, go to <Link to='/register'>Register</Link>
                                </div>
                            )}
                            
                            {userRegistereWithOtherProvider && (
                                <div id='message'>
                                    {`Email already registered using ${userRegistereWithOtherProvider.split('.')[0]}`}
                                </div>
                            )}
                        </div>
                    </form>
    
                    <div className="providerAuth">
                        <div id="google" className="providers-logo" onClick={singInWithGoogle}>
                            <GoogleIcon />
                            <p>Sign up with Google</p>
                        </div>
                        <div id="github" className="providers-logo" onClick={signInWithGitHub}>
                            <GitHubIcon />
                            <p>Sign up with GitHub</p>
                        </div>
                        <div id="LinkedIn" className="providers-logo" onClick={() => alert('This feature is not available yet')}>
                            <LinkedInIcon />
                            <p>Sign up with LinkedIn</p>
                        </div>
                        <div id="x" className="providers-logo" onClick={() => alert('This feature is not available yet')}>
                            <XIcon />
                            <p>Sign up with X</p>
                        </div>
                    </div>
    
                    <button 
                        className={!isLoginFieldsCompleted ? "login-button" : "login-button login-button-active"} 
                        type="button" 
                        onClick={singInUser} 
                        disabled={!isLoginFieldsCompleted}
                    >
                        Login
                    </button>
                </div>
            )}
        </main>
    );
    
};

export default Login;
