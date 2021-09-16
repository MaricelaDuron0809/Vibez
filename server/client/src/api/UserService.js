import BackEndCall from './BackEndCall';
import * as tokenService from "../utils/tokenService";

const create = (data, res) => {
    return BackEndCall.post('/register', data);
}
const login = (data) => {
    let token = tokenService.getToken();
    return BackEndCall.post('/login', data, token);
};

const getUser = () => {
    let user = tokenService.getUserFromToken();
    console.log("DECODED USER FROM GET USER FUNCTION IN USER SERVICE: ", user);
    return user;
}



<<<<<<< HEAD
export { create, login, getUser };
=======
const logout = () => {
    localStorage.removeItem("token");
  }


export { create, login, getUser, createPost, getPost, logout };
>>>>>>> main
