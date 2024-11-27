import { useState } from "react"
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
    const [userName,setUserName] = useState('')
    const [userLastName,setUserLastName] = useState('')
    const [userPhone,setUserPhone] = useState('')
    const [userBirthdate,setUserBirthdate] = useState('')
    const handleForm = (event) => {
        event.preventDefault()
        setShowRequestData(true)
    }
    console.log(userPhone);
    
    const handleInputChange = (event,inputName) => {

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
                    <input type="email" name="email" id="email" required placeholder="email" autoComplete="true" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="**********" required autoComplete='true' />

                    <button type="submit">Register</button>

                    <button type="button">Back</button>
                </form>

                <div id="message">

                </div>
            </div>
              
            )
            :
            <UserDataRegister setPhone = {setUserPhone} />  
            }
        </main>
    )
}

export default Register
