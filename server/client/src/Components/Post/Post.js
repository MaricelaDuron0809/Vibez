import React, { useState, useEffect } from 'react';
//import { useForm } from '../../hooks/useForm'
// import PostForm from './PostForm'
import { func, string, array } from "prop-types";
import * as PostService from "../../api/PostService";
import ShowPost from "./ShowPost"

function Post({ id,  body,  user }) {
      const [post, setPost] = useState([]);
      const [isEditing, setIsEditing] = useState(false);
      const [editedBody, setBody] = useState(body); 
      
      async function fetchPosts(id) {
        let res = await PostService.getAllPosts(id);
        console.log("POST SERVICE RESPNSE", res.data)
        if (res.status === 200) {
          setPost(res.data.data.reverse());
        }
      }

      const handleEdit = async () => {
        console.log("FROM HANDLE EDIT");
        setIsEditing(!isEditing);
        if (isEditing) {
          let editedPost = {
            body: editedBody,
          };
          await PostService.update(id, editedPost);
          fetchPosts()
        }
      }
       const handleDelete = async () => {
         await PostService.remove(id);
         fetchPosts();
       };


       useEffect(() => {
         fetchPosts();
       }, []);

        return (
        <div className="comment">
            <span className="entry">
                {!isEditing && <span> {body}</span>}
                {isEditing && (
                    <input
                        onChange={(e) => setBody(e.target.value)}
                        value={editedBody}
                        type="text"
                        name="body"
                        placeholder="BODY GOES HERE"
                    />
                )}
            </span>
            <span className="comment-buttons">
                <button onClick={handleEdit}>
                    {isEditing ? "SUBMIT" : "EDIT"}
                </button>
                <button onClick={handleDelete}>DELETE</button>
            </span>
        </div>
    );
};


Post.propTypes = {
  id: string.isRequired,
  body: string.isRequired,
  commentId: string.isRequired,
  getPostsAgain: func,
};

Post.defaultProps = {
  comment: string.isRequired, 
}

export default Post
