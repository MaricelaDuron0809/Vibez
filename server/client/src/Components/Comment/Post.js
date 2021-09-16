import React, { useState, useEffect } from 'react';
//import { useForm } from '../../hooks/useForm'
// import PostForm from './PostForm'
import PropTypes from "prop-types";
import * as PostService from "../../api/PostService";
import ShowPost from "./ShowPost"

const Post = () => {
    
   const [ post, setPost ] = useState([])


    const makePost = () => {
      console.log("Post: ", post)
      PostService.getAllPosts();
      setPost('')
    }

    useEffect(() => {
      //createPost()
    }, [])

    return (
      <div>
        <ShowPost />
          <label htmlFor="Post-input"></label>
          <input
            type="text"
            id="Post-input"
            name="body"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <button type="button" onClick={makePost}>
            Post
          </button>
        
        {/* <PostForm user={user} body={body} /> */}
      </div>
    );
}

export default Post
