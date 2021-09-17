import BackEndCall from "./BackEndCall";
import * as tokenService from '../utils/tokenService'

const getAll = () => {
  return BackEndCall.get("/posts");
};

const get = (id) => {
  return BackEndCall.get(`/posts/${id}`);
};

const getAllComments = (id) => {
  return BackEndCall.get(`/posts/${id}/comments`);
}

const create = (data) => {
  return BackEndCall.post("/posts", data);
};

const createComment = (id, data) => {
  return BackEndCall.post(`/posts/${id}/comment`, data);
}

const update = (id, data) => {
  return BackEndCall.put(`/posts/${id}`, data);
};

const updateComment = (id, commentId, data) => {
  return BackEndCall.put(`/posts/${id}/comment/${commentId}`, data);
}

const remove = (id) => {
  return BackEndCall.delete(`/posts/${id}`);
};

const removeComment = (id, commentId) => {
  return BackEndCall.delete(`/posts/${id}/comment/${commentId}`);
}

// You can only export default when there's one thing to export
export { getAll, get, getAllComments, create, createComment, update, updateComment, remove, removeComment };