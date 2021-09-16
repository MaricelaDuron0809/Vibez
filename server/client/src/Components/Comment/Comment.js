import React, { useState } from 'react'
import * as UserService from "../../api/UserService";

const user = UserService.getUser()

function Comment() {
    const [body, setBody] = useState('')

    const handleSubmit = async () => {
        const res = await user;
        if (res.data) {
              const token = res.data.token;
              console.log("FROM COMMENT FORM: ", token);
            setBody('')
        } else {
            alert('STOP, ERROR --- YOU CANT DO THAT')
        }

    }
    return (
      <div>
        <input
          type="text"
          className="comment-form"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <button onClick={handleSubmit}>LOGIN</button>
      </div>
    );
}

export default Comment
