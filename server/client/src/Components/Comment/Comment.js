import React, { useState, useEffect } from 'react';
//import { useForm } from '../../hooks/useForm'
// import CommentForm from './CommentForm'
import PropTypes from "prop-types";
import * as UserService from "../../api/UserService";

const Comment = () => {
    
   const [ comment, setComment ] = useState([])
   const user = UserService.getUser()

    function createComment() {
      setComment(UserService.createComment());
    }

    useEffect(() => {
      console.log("COMMENT: ", comment)
      createComment()
    }, [])

    return (
      <div>
        <label htmlFor="comment-input"></label>
        <input
          type="text"
          id="comment-input"
          name="body"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="button" onClick={createComment}>
          comment
        </button>
        {/* <CommentForm user={user} body={body} /> */}
      </div>
    );
}

Comment.defaultProps = {
  buttonText: 'Comment',
}

Comment.propTypes = {
  buttonText: PropTypes.string,
  onSubmitComment: PropTypes.func.isRequired,
}

export default Comment
