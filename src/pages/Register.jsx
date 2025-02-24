import { useEffect, useState } from "react"
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
    
    const [showMessage,setShowMessage]= useState(false)
    const [showPasswordSection,setShowPasswordSection] = useState(false)
    const [showEmail,setShowEmail] = useState(true)
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
    
    const handleExistUser = async () => {
        console.log(userEmail);
        try {
            const response = await axios.get('http://localhost:8080/' + 'users/useremail/' + userEmail)
            const data = response.data
            
            if (!data) {
                setShowPasswordSection(true)
                setShowEmail(false)
            }else{
                setShowMessage(true)
               
                
            }
            
            
            
            
        } catch (error) {
            console.log(error.message);
            
        }
        
        
    }

    const handleBackToEmail = () => {
        setShowRequestData(false)
        
        setShowEmail(true)
    }
    
    const handleCreateUser = async(event) => {
    event.preventDefault()
    
    try {
        const body = {name:name,userName:userName, lastName:userLastName,email:userEmail,password: userPassword, dateBirth: userBirthdate, uid:userUid}
        
        const createUser = await axios.post(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/newuser',body)
        
        !createUser.data.success ? null : navigate('/login')
        
       } catch (error) {
        console.error({message:'Error creating user'})
        setError(error.message)
        }
    }
    
    const  checkPasswordRules = () => {
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        const upperCase = ['A','B']
        const lowerCase = ['a','b']
        const symbols = ['!','/', '@']
                
        const hasUppercase = userPassword.split('').some(character => upperCase.includes(character))
        const hasNumber = userPassword.split('').some(character => numbers.includes(Number(character)))
        const hasSymbol = userPassword.split('').some(character => symbols.includes(character))
        const lengthGreaterThanTen = userPassword.length > 10
        
        console.log(`Upper : ${hasUppercase}`);
        console.log(`Number : ${hasNumber}`);
        console.log(`Symbol : ${hasSymbol}`);
        console.log(`length : ${lengthGreaterThanTen}`);

        
    }
    useEffect(()=>{
        checkPasswordRules()
    },[userPassword])
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


                 <form  method="post" id="login-form" className="login-form"> 
                  
                  {showEmail && 
                    <>
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" placeholder="email" autoComplete="true" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} required  /> 
                    {showMessage &&  <p>The user is already exist</p> } 
                    </>
                  }
                  {showPasswordSection && 
                    <>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="**********" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} autoComplete='true' required  />

                    <div className="password-contain">
                        <h4>Your password may contain:</h4>
                        <p className="password-rules">At least 10 characters </p>
                        <p className="password-rules">At least one uppercase character </p>
                        <p className="password-rules">At least one special character </p>
                        <p className="password-rules check" >At least one number </p>
                        
                    </div>
                    </>
                  }

                    {!showPasswordSection ?
                        <button type="button" onClick={handleExistUser}>
                            Sign up
                        </button> 
                      : 
                        <button type="button" onClick={() => {
                            setShowPasswordSection(false)
                            setShowRequestData(true)

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
            <UserDataRegister setPhone = {setUserPhone} setUname={setUserName} setLastName={setUserLastName} setBirthdate={setUserBirthdate} setNameUser={setName} setOffers = {setUserOffers} setPreferences={setUserPreferences} functionCreateUser = {handleCreateUser} functionReturnEmail = {handleBackToEmail} />  
            }
        </main>
    )
}

export default Register

