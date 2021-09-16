import React, { useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { setToken } from "../../utils/tokenService";
import * as UserService from "../../api/UserService";
import { accessUrl, authEndpoint } from "../../api/Spotify";
import { Link } from 'react-router-dom';


const SignupForm = () => {
     const history = useHistory();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [name, setName] = useState("");
     
     const newUser = {
       name,
       email, 
       password,
     };

     const handleSubmit = async () => {
       const res = await UserService.create(newUser);
       if (res.data) {
           const token = res.data.token;
          console.log("FROM REGISTERED login: ",  token);
           setToken(token);
           setName('')
           setEmail("");
           setPassword("");
           window.location = accessUrl;
       } else {
         alert("Server Error");
       }
     };

    return (
      
        <div className="signup-form-ctr">
             <input 
                placeholder='name'
                className="input-fields"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            <input 
                 placeholder="email"
                 className="input-fields"
                 onChange={(e) => setEmail(e.target.value)}
                 type="email"
                 value={email}
                />
            <input
                placeholder="password"
                className="input-fields"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className="signup-button" onClick={handleSubmit}>SIGN UP</button>
            <p>Already have an account? <Link to="/auth/login">Sign In</Link> </p>
        </div>
      
    )
}

export default SignupForm
