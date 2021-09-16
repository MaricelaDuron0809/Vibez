import React from 'react'
import logo from '../../images/logo.png'
import Logout from './Logout'
import ProfileImage from './ProfileImage'
import './styles.css'


function Header({spotify}) {
    
    return (
        
        <div className="header">
           <img className="logo" src={logo} alt="website logo"/>
           <ProfileImage spotify={spotify} />
           <Logout />
        </div>
    )
}

export default Header
