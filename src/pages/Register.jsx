import { useEffect, useState } from "react"
import {auth} from '../../config/firebase.js'
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { getAuth, GoogleAuthProvider,signInWithRedirect,signInWithPopup } from "firebase/auth";
import UserDataRegister from "./UserDataRegister"
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import '../styles/Register.css'

const provider = new GoogleAuthProvider();

const Register = () => {
    const [showRequestData, setShowRequestData] = useState(false)
    const [userEmail,setUserEmail] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const [name,setName] = useState('')
    const [userName,setUserName] = useState(undefined)
    const [userLastName,setUserLastName] = useState('')
    const [userPhone,setUserPhone] = useState('')
    const [userBirthdate,setUserBirthdate] = useState('')
    const [userOffers,setUserOffers] = useState('')
    const [userPreferences,setUserPreferences] = useState('')
    const [userUid,setUserUid] = useState(null)
    const [error,setError] = useState('')
    const [logInWithThirdPartyProvider, setLogInWithThirdPartyProvider] = useState(false)
    const [showMessage,setShowMessage]= useState(false)
    const [showPasswordSection,setShowPasswordSection] = useState(false)
    const [showEmail,setShowEmail] = useState(true)

    const [hasNumber,setHasNumber] = useState(false)
    const [hasUpperCase,setHasUpperCase] = useState(false)
    const [hasSymbol,setHasSymbol] = useState(false)
    const [lengthGreaterThanTen,setLengthGreaterThanTen] =useState(false)

    const [emailCompleted, setEmailCompleted] = useState(false)
    const [passwordCompleted, setPasswordCompleted] = useState(false)

    const [allFieldsMarked,setAllFieldsMarked] = useState(false)

    const [togglePassword,setTogglePassword] = useState(false)

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
           setShowMessage(true)
            
        }
    }
    
    const handleExistUser = async () => {
        
        try {
            const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB  + 'users/useremail/' + userEmail)
            const data = response.data
        
            
            if (!data || Object.keys(data).length === 0) {
                console.log(auth.currentUser);
                
                setShowPasswordSection(true)
                setShowEmail(false)
            }else{
                setShowMessage(true)
               
                
            }    
        } catch (error) {
            console.error(error.message);
            
        }   
    }

    const handleBackToEmail = () => {
        setShowRequestData(false)
        
        setShowEmail(true)
    }
    
    const handleCreateUser = async(event) => {
    event.preventDefault()
    
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,userEmail,userPassword)  
        const user = userCredential.user 
        const token = await user.getIdToken()
        const userUid = user.uid
        
        localStorage.setItem('authToken',token)
        setUserUid(user.uid)

        
       } catch (error) {
        console.error({message:'Error creating user'})
        setError(error.message)
        }
    }
    const addUserToDb = async () => {
        
        const body = {name:name,userName:userName, lastName:userLastName,email:userEmail,password: userPassword, dateBirth: userBirthdate,uid: userUid}
        
        
        try {
            if (name && userName && userLastName && userEmail && userPassword && userBirthdate && userUid) {
                const createUser = await axios.post(import.meta.env.VITE_URL_API_FUTURA_BIOLAB  + 'users/newuser',body)
                
                !createUser.data.success ? null : navigate('/login')
            }else{
                setShowRequestData(true)
            }
        } catch (error) {
            console.log(error.message)
           
        }
        
        
    }
    const  checkPasswordRules = () => {
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        const upperCase = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
        const symbols = Array.from({ length: 15 }, (_, i) => String.fromCharCode(33 + i));
        
        
        
        setHasUpperCase(userPassword.split('').some(character => upperCase.includes(character)))
        setHasNumber(userPassword.split('').some(character => numbers.includes(Number(character))))
        setHasSymbol(userPassword.split('').some(character => symbols.includes(character))) 
        setLengthGreaterThanTen(userPassword.length >= 10)
        
    }
    const singInWithGoogle = async () => {
        
        
        
        try {
            const logIn = await signInWithPopup(auth,provider)
            const user = logIn.user;
            
            localStorage.setItem('uid',user.uid)
            
            const checkUserEmail = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/useremail/' + user.email)
            const data = checkUserEmail.data
           
            
            if(!data || Object.keys(data).length === 0){
                setName(user.displayName.split(' ')[0])
                setUserPassword(user.uid)
                setUserLastName(user.displayName.split(' ')[1])
                setUserEmail(user.email)
                setLogInWithThirdPartyProvider(true)
                setUserUid(user.uid)
                setShowRequestData(true)
            }else{
                setShowMessage(true)
            }
            
        } catch (error) {
            console.error(error.message);
            
        }
    }

    useEffect(()=>{
        checkPasswordRules()
    },[userPassword])

    useEffect(()=>{
        if(userUid) addUserToDb()
    },[userUid])

    
    
    useEffect(() => {
        const checedkEmail = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailCompleted(emailRegex.test(userEmail))
        }
        checedkEmail()
        
    },[userEmail])

    useEffect(() => {
        

      setPasswordCompleted(hasNumber && hasSymbol && hasUpperCase && lengthGreaterThanTen)
  
        
    },[lengthGreaterThanTen,hasUpperCase,hasNumber,hasSymbol,passwordCompleted])

    useEffect(() => {
        const allFields = name && userLastName && userBirthdate && userPhone && userName
        
        !allFields ? setAllFieldsMarked(false) : setAllFieldsMarked(true)
       },[name,userLastName,userBirthdate,userPhone,userName])
    


    return (
        <main className='main-container'>
            {!showRequestData ? (
                <div className="contact-container">
                <h1>Register</h1>
                
                <h4>Have an account? <a href="/login">Log in now</a> </h4>
               
                 <form  method="post" id="login-form" className="login-form"> 
                  
                  {showEmail && 
                    <>
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" placeholder="email" autoComplete="true" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} required  /> 
                    {showMessage &&  <p className="login-message" >The user is already exist go to Login</p> } 

                    <div className="separate-div">
                        <div className="separate-div-line"></div>
                        <div className="separate-div-text"><p>or</p></div>
                        <div className="separate-div-line"></div>
                    </div>

                    <div className="providerAuth">
                <div id="google" className="providers-logo" onClick={singInWithGoogle}>
                    <GoogleIcon />
                    <p>Sign up with Google</p>
                </div>
                <div id="github" className="providers-logo">
                    <GitHubIcon />
                    <p>Sign up with GitHub</p>
                </div>
                <div id="LinkedIn" className="providers-logo">
                    <LinkedInIcon />
                    <p>Sign up with LinkedIn</p>
                </div>
                <div id="x" className="providers-logo">
                    <XIcon />
                    <p>Sign up with X</p>
                </div>
                </div>

               
                
                    </>
                  }
                  {showPasswordSection && 
                    <>
                     <div className="password-container">
                        <label htmlFor="password">Password</label>
                        <input type={!togglePassword ? "password" : "text"} name="password" id="password" placeholder="**********" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} autoComplete='true' required  />
                        <div className="icon-password" onClick={() => setTogglePassword(!togglePassword)} >
                        {!togglePassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon /> }
                        </div>
                        
                        
                    </div>   

                        


         
                

                    <div className="password-contain">
                        <h4>Your password may contain:</h4>
                        <p className={!lengthGreaterThanTen ? "password-rules": "password-rules check" }>At least 10 characters </p>
                        <p className={!hasUpperCase ? "password-rules" : "password-rules check" }>At least one uppercase character </p>
                        <p className={!hasSymbol ? "password-rules" : "password-rules check" }>At least one special character </p>
                        <p className={!hasNumber ? "password-rules" : "password-rules check" } >At least one number </p>
                        
                    </div>
                    </>
                  }

                    {!showPasswordSection ?
                        <button type="button" className={!emailCompleted ? "button-signup-register" : "button-signup-register button-signup-active"}onClick={handleExistUser}>
                            Sign up
                        </button> 
                      : 
                        <button className={!passwordCompleted ? "button-signup-register" : "button-signup-register button-signup-active"} type="button"   onClick={() => {
                            if(hasNumber && hasSymbol && hasUpperCase && lengthGreaterThanTen){
                                setShowPasswordSection(false)
                                setShowRequestData(true)
                            }

                        }}>
                            Continue
                        </button> 
                    }                     
                </form>

                <div id="message">
                   
                </div>
            </div>
              
            )
            :
            <UserDataRegister setPhone = {setUserPhone} setUname={setUserName} setLastName={setUserLastName} setBirthdate={setUserBirthdate} setNameUser={setName} setOffers = {setUserOffers} setPreferences={setUserPreferences} functionCreateUser ={handleCreateUser} functionReturnEmail={handleBackToEmail} fieldsMarked={allFieldsMarked} nameUser={name} uLastName = {userLastName} goToDb = {addUserToDb} thirdPartyProvider={logInWithThirdPartyProvider} />  
            }
            
        </main>
    )
}

export default Register

