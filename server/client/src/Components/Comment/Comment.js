import React, { useState, useEffect } from 'react';
//import { useForm } from '../../hooks/useForm'
// import PostForm from './PostForm'
import PropTypes from "prop-types";
import * as UserService from "../../api/UserService";

const Post = () => {
    
   const [ Post, setPost ] = useState([])


    const makePost = () => {
      console.log("Post: ", Post)
      UserService.createPost({Post})
      setPost('')
    }

    useEffect(() => {
      //createPost()
    }, [])

    return (
      <div>
      
          <label htmlFor="Post-input"></label>
          <input
            type="text"
            id="Post-input"
            name="body"
            value={Post}
            onChange={(e) => setPost(e.target.value)}
          />
          <button type="button" onClick={makePost}>
            Post
          </button>
        
        {/* <PostForm user={user} body={body} /> */}
      </div>
    );
}

Post.defaultProps = {
  buttonText: 'Post',
}



export default Post
