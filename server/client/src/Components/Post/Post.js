import React, { useState, useEffect } from 'react';
import { func, string, array } from "prop-types";
import * as PostService from "../../api/PostService";


const getPosts = async () => {
}

function Post({ id,  body,  user }) {
  
  const [post, setPost] = useState([]);
  const [editedBody, setBody] = useState(body); 
  const [isEditing, setIsEditing] = useState(false);
  //this is where we left off
  let _post = PostService.getAllPosts();
  
  console.log("POST SERVICE RESPoNSE", post.data);
  useEffect(() => {
    getPosts();
  }, []);
  
  if (post.status === 200) {
    const revData = post.data;
    console.log(revData);
    setPost(revData);
    return (
      {revData}
      );
    }
    
    const handleEdit = async () => {
      console.log("FROM HANDLE EDIT");
      setIsEditing(!isEditing);
      if (isEditing) {
        let editedPost = {
          body: editedBody,
        };
        await PostService.update(id, editedPost);
        getPosts()
      }
    }
    const handleDelete = async () => {
      await PostService.remove(id);
      getPosts();
    };
    
    
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
