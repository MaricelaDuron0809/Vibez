import React from 'react'
import logo from '../../images/logo.png'
import Logout from './Logout'


function Header() {
    return (
        <div className="header">
           <img className="logo" src={logo} alt="website logo"/>
           <Logout />
        </div>
    )
}

export default Header
