import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import VibezPlayer from '../Components/VibezPlayer'
import ProfilePage from "../pages/ProfilePage";

const Routes = () => (
  <Switch>
    <Route exact path="/auth/register" component={SignupPage} />
    <Route exact path="/auth/login" component={LoginPage} />
    <Route exact path="/auth/auth/" component={VibezPlayer} />
    01
    <Route exact path="/auth/auth/profile/" component={ProfilePage} />
  </Switch>
);

export default Routes;