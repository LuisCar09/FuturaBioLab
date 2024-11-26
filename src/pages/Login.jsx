import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
const Login = () => {
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
                <div id="facebook" className="providers-logo">
                    <XIcon />
                </div>
            </div>
            <form  method="post" id="login-form"  className="login-form">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required placeholder="email" autoComplete='true'/>
        
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="**********" required autoComplete='true' />
        
                
                <button id="login" className="login" type="button">Login</button>
                <button id="back" type="button">Back</button>
        
            </form>
            <div id="message"></div>
        </div>
        </main>
            
        
    )
}

export default Login