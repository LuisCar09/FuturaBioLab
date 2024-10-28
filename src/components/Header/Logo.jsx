import React from 'react'
import logo from '../../assets/logo.png'
import '../../styles/Logo.css'
const Logo= () => {
    return(
        <div className='logo'>
            <a href='/'>
                <img src={logo}></img>
            </a>
        </div>
    )
}
export default Logo