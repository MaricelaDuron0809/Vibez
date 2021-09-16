import React, { useState, useEffect } from 'react';
//import { useForm } from '../../hooks/useForm'
// import PostForm from './PostForm'
import PropTypes from "prop-types";
import * as PostService from "../../api/PostService";
import ShowPost from "./ShowPost"
import Comment from "./Comment"

function Post({ id, getPostAgain, title, author, body, postComments, user }) {
    const [editedBody, setBody] = useState(body);
    const [comments, setComments] = useState([]);
     const [isEditing, setIsEditing] = useState(false);

    const handleEdit = async () => {
      console.log('Editing Post')
      setIsEditing(!isEditing);
      if (isEditing) {
        let editedPost = {
          comment: comments,
        }
        // await PostService.update(id, editedPost)
        getPostAgain();
      }
    }

    // const handleDelete = async () => {
    //   await PostService.remove(id);
    //   getPostAgain();
    // }

    const fetchComments = async () => {
      let res = await PostService.getAllPosts(id);
      if (res.status === 200) {
        setComments(res.data)
      }
    }
       useEffect(() => {
        fetchComments(id);
    }, []);

    return (
      <Comment />
    )
}

export default Post;