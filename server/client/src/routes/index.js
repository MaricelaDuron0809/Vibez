import React from "react";
import { Switch, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import VibezPlayer from '../Components/VibezPlayer'
import ProfilePage from "../pages/ProfilePage";

const Routes = () => (
  <Switch>
    <Route exact path="/auth/register" render={(props) => <SignupPage {...props} />}
    />
    <Route exact path="/auth/login" render={(props) => <LoginPage {...props} />}
    />
    <Route exact path="/auth/auth/" render={(props) => <VibezPlayer {...props} />}
    />
    <Route exact path="/auth/auth/profile/" render={(props) => <ProfilePage {...props} />}
    />
  </Switch>
);

export default Routes;