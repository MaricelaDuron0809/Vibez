import React, { useState } from 'react';
import { func } from "prop-types";
import * as PostService from "../../api/PostService";
import '../styles.css'

const PostForm = ({ getPostsAgain, user }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
      let newPost = { title, author: user._id, body };
      const res = await PostService.create(newPost);

      if (res.status === 201) {
          setTitle("");
          setBody("");
          getPostsAgain();
      } else {
          alert("Server Error");
      }
  };

  if (!user) {
      return <div />;
  }
  return (
      <div className="post-form-ctr">

      <div className="title-ctr">
        
          <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              name="title"
              placeholder="ADD A NEW POST"
              className="title"
              />
              </div>
          <p>
               {user.name}
          </p>
          

          <input
              onChange={(e) => setBody(e.target.value)}
              value={body}
              type="text"
              name="body"
              placeholder="SHARE YOUR COMMENTS"
              className="post-input"
          />
          <button onClick={handleSubmit}>Add Post +</button>
      </div>
  );
};

PostForm.propTypes = {
  getPostsAgain: func,
};

export default PostForm;

