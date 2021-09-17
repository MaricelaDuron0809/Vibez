import BackEndCall from "./BackEndCall";
import * as tokenService from '../utils/tokenService'

const getAllPosts = () => {
    console.log('GET ALL POSTS');
    let user = tokenService.getUserFromToken();
    return BackEndCall.get('/auth/profile', user)
}

const createPost = (data) => {
  console.log("CREATE COMMENT", data);

  return BackEndCall.post("/auth/profile", data);
};

const getPost = (id) => {
  console.log("GET COMMENT");
  let user = tokenService.getUserFromToken();
  return BackEndCall.get(`/auth/profile/${id}`, user);
};


const remove = (id) => {
  return BackEndCall.delete(`/auth/profile/${id}`);
};

const update = (id, data) => {
  return BackEndCall.put(`/auth/profile/${id}`, data);
};

export { getAllPosts, createPost, getPost, remove, update }