import { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import { Link } from "react-router-dom";
import { getRedirectResult, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, TwitterAuthProvider } from "firebase/auth";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

import '../styles/Login.css';

const provider = new GoogleAuthProvider();
const providerTwitter = new TwitterAuthProvider();

const Login = () => {
    localStorage.clear();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoginFieldsCompleted, setIsLoginFieldsCompleted] = useState(false);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const singInUser = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
            const user = userCredential.user;
            const token = await user.getIdToken();

            localStorage.setItem('authToken', token);
            localStorage.setItem('uid', user.uid);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/' + user.uid, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUser(response.data);
            !response.data ? null : navigate('/');
        } catch (error) {
            console.error(error.message);
            setMessage('The user does not exist, please go to Register');
        }
    };

    const singInWithGoogle = async () => {
        try {
            const logIn = await signInWithPopup(auth, provider);
            const credential = logIn.user;
            const token = credential.stsTokenManager.accessToken;

            localStorage.setItem('authToken', token);
            localStorage.setItem('uid', credential.uid);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/' + credential.uid, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUser(response.data);
            !response.data ? null : navigate('/');
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    };

   

    

    useEffect(() => {
        const checkEmail = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (userPassword.length >= 10 && emailRegex.test(userEmail)) {
                setIsLoginFieldsCompleted(true);
            } else {
                setIsLoginFieldsCompleted(false);
            }
            setMessage(null);
        };
        checkEmail();
    }, [userEmail, userPassword]);

    return (
        <main className='main-login'>
            <div className="contact-container">
                <h1>Log in to your account</h1>
                <h4>Don't have an account? <Link to="/register">Sign Up </Link> </h4>

                <form method="post" id="login-form" className="login-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required placeholder="email" autoComplete='true' onChange={(event) => setUserEmail(event.target.value)} value={userEmail} />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="**********" required autoComplete='true' onChange={(event) => setUserPassword(event.target.value)} value={userPassword} />

                    <div className="message-login">
                        {message && <div id="message">{message}</div>}
                    </div>
                </form>
                <div className="providerAuth">
                    <div id="google" className="providers-logo" onClick={singInWithGoogle}>
                        <GoogleIcon />
                        <p>Sign up with Google</p>
                    </div>
                    <div id="github" className="providers-logo" onClick={() => alert('This feature is not available yet')}>
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

                <button className={!isLoginFieldsCompleted ? "login-button" : "login-button login-button-active"} type="button" onClick={singInUser} disabled={!isLoginFieldsCompleted}>Login</button>
            </div>
        </main>
    );
};

export default Login;
