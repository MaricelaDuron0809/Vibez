import React from 'react'
import logo from '../../images/logo.png'
import Logout from './Logout'
import ProfileImage from './ProfileImage'
import './styles.css'
//import ProfilePage from "../../pages/ProfilePage"


function Header() {
    
    return (
        
        <div className="header">
            
                <div className="user">
                <h4>User Name</h4>
                </div>

                <div className="logo">
           <img className="logo" src={logo} alt="website logo"/>
           </div>
           {/* <ProfileImage spotify={spotify} /> */}
           <Logout />
           {/* <Profile Page /> */}
        </div>
    )
}

export default Header
