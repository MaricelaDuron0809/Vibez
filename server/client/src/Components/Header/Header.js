import React from 'react'
import logo from '../../images/logo.png'
import Logout from './Logout'
import ProfileImage from './ProfileImage'
import './styles.css'
//import ProfilePage from "../../pages/ProfilePage"


function Header({spotify}) {
    
    return (
        
        <div className="header">
           <img className="logo" src={logo} alt="website logo"/>
           {/* <ProfileImage spotify={spotify} /> */}
           <Logout />
           {/* <Profile Page /> */}
        </div>
    )
}

export default Header
