import React, {useEffect, useState} from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
// import SomePage from '../src/pages/SomePage'
import HomePage from '../src/pages/HomePage'
import 'font-awesome/css/font-awesome.min.css'

import { userStateLayerValue } from './state/StateProvider';



function App() {
  // const [token, setToken] = useState(null);
  // const [{user}, dispatch] = userStateLayerValue();

  // useEffect(() => {
  //   const hash = getTokenFromUrl();
  //   window.location.hash = "";
  //   const _token = hash.access.token;

  //   if (token) {
  //     setToken(_token);
  //     spotify.setAccessToken(_token);

  //     spotify.getMe().then((user) => {
  //       dispatch ({
  //         type: "SET_USER",
  //         user: user,
  //       })
  //     })
  //   }
  //     console.log("I have a token", token)
  // })



  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/auth/register' component={SignupPage} />
          <Route exact path='/auth/login' component={LoginPage} />
          <Route exact path='/auth' component={HomePage} />
          {/* <Route exact path='/auth/test' component={SomePage} /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;
