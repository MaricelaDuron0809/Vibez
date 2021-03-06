import React, { useState, useEffect } from 'react';
import { func, string, array } from "prop-types";
import * as PostService from "../../api/PostService";
import Comment from '../Comment/Comment'
import CommentForm from '../Comment/CommentForm'
import '../styles.css'
import editicon from '../../images/editicon.png'
import trashicon from '../../images/trashicon.png'



function Post({ id, getPostsAgain, title, author, body, postComments, user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setTitle] = useState(title);
  const [editedAuthor, setAuthor] = useState(author.lastName);
  const [editedBody, setBody] = useState(body);
  const [comments, setComments] = useState([]);

  const handleEdit = async () => {
      console.log("handleedit");
      setIsEditing(!isEditing);
      //meaning submit is showing
      if (isEditing) {
          let editedPost = {
              title: editedTitle,
              author: editedAuthor,
              body: editedBody,
          };
          await PostService.update(id, editedPost);
          getPostsAgain();
      }
  };

  const handleDelete = async () => {
      await PostService.remove(id);
      getPostsAgain();
  };

  async function fetchComments(id) {
      let res = await PostService.getAllComments(id);
      if (res.status === 200) {
          setComments(res.data.data);
      }
  }

  useEffect(() => {
      fetchComments(id);
  }, []);

  return (
      <div className="flex-post">
          <div className="title-ctr">
          <div className="title">
              {!isEditing && <h1>{title}</h1>}
              {isEditing && (
                  <input
                      onChange={(e) => setTitle(e.target.value)}
                      value={editedTitle}
                      type="text"
                      name="title"
                      placeholder="New Post Title"
                  />
              )}
              <div className="button-ctr">
                  <button className="edit" onClick={handleEdit}><img className="edit" src={editicon} alt="edit button"/>
                      {isEditing ? "SUBMIT" : "EDIT"}
                  </button>
                  <button className="delete" onClick={handleDelete}><img className="edit" src={trashicon} alt="trash button"/></button>
                  </div>
              </div>
          </div>
          <p>by {author.lastName}</p>
          <div>
              {!isEditing && <p className="post-body">{body}</p>}
              {isEditing && (
                  <input
                      onChange={(e) => setBody(e.target.value)}
                      value={editedBody}
                      type="text"
                      name="body"
                      placeholder="Share your comments"
                  />
              )}
          </div>
          {/* <div className="dopeness">
              <Dopeness />
          </div> */}
          <div>
              <h3>Comments</h3>
              {comments.map((comment) => {
                  // console.log("WHICH DATA AM I USING: ", comment);
                  return (
                      <Comment
                          author={comment.author}
                          body={comment.body}
                          key={comment._id}
                          commentId={comment._id}
                          id={id}
                          getCommentsAgain={(id) => fetchComments(id)}
                      />
                  );
              })}
          </div>
          <CommentForm
              id={id}
              user={user}
              getPostsAgain={() => getPostsAgain()}
              getCommentsAgain={(id) => fetchComments(id)}
          />
      </div>
  );
}

Post.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  author: string.isRequired,
  body: string.isRequired,
  postComments: array,
  getPostsAgain: func,
};

Post.defaultProps = {
  author: "Marianne Williamson",
};

export default Post;
