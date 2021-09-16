import BackEndCall from "./BackEndCall";
import * as tokenService from '../utils/tokenService'

const getAllPosts = () => {
    console.log('GET ALL POSTS');
    return BackEndCall.get('/auth/profile')
}

const createPost = (data) => {
  console.log("CREATE COMMENT");
  return BackEndCall.post("/auth/profile", data);
};

const getPost = (id) => {
  console.log("GET COMMENT");
  let user = tokenService.getUserFromToken();
  return BackEndCall.get(`/auth/profile/${id}`, user);
};

export { getAllPosts, createPost, getPost }