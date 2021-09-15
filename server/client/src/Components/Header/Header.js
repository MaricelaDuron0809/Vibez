import React from 'react'
import logo from '../../images/logo.png'
import Logout from './Logout'
import ProfileImage from './ProfileImage'
import './styles.css'


function Header() {
    
    return (
        
        <div className="header">
           <img className="logo" src={logo} alt="website logo"/>
           <ProfileImage />
           <Logout />
        </div>
    )
}

export default Header
