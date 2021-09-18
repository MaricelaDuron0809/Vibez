import React, { Component } from 'react'
import { logout } from '../../api/UserService'
import { Redirect } from 'react-router-dom';


export default class Logout extends Component {
    state = {
        navigate: false
    }

    handleLogout() {
        logout();
        this.setState({
            navigate: true
        })
    }
    render() {
        const { navigate } = this.state;

        if (navigate) {
            return <Redirect to="/auth/login" push={true} />;
        }
        return <button className="logout-button" onClick={() => this.handleLogout()}>LOGOUT</button>
    }
}