import React, { useState, useEffect } from 'react';
//import { useForm } from '../../hooks/useForm'
// import PostForm from './PostForm'
import PropTypes from "prop-types";
import * as PostService from "../../api/PostService";

const Post = () => {
    
   const [ Post, setPost ] = useState([])


    const makePost = () => {
      console.log("Post: ", Post)
      PostService.createPost({Post})
      setPost('')
    }

    useEffect(() => {
      //createPost()
    }, [])

    return (
      <div className="post-form-ctr">
      <div className="form-field-ctr">
        <h3>Create A Post about Your </h3>
        <h3>New Vibez Playlist!</h3>
        <form>
          <label htmlFor="Post-input"></label>
          <input
            className="post-input"
            type="text"
            id="Post-input"
            name="body"
            value={Post}
            onChange={(e) => setPost(e.target.value)}
          />
          <button type="button" onClick={makePost}>
            Post
          </button>
        </form>
        {/* <PostForm user={user} body={body} /> */}
        </div>
      </div>
    );
}

Post.defaultProps = {
  buttonText: 'Post',
}



export default Post
