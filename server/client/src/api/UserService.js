import BackEndCall from './BackEndCall';
import * as tokenService from "../utils/tokenService";

const create = (data, res) => {
    return BackEndCall.post('/auth/register', data);
}

const login = (data) => {
    let token = tokenService.getToken();
    return BackEndCall.post('auth/login', data, token);
};

const getUser = () => {
    let user = tokenService.getUserFromToken();
    console.log("DECODED USER FROM GET USER FUNCTION IN USER SERVICE: ", user);
    return user;
}

const logout = () => {
    localStorage.removeItem("token");
  }

//   const hitMe = () => {
//      return BackEndCall.post('/auth/profile')
//   }


export { create, login, getUser, logout };
