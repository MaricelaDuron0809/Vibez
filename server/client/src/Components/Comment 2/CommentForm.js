import React, {useState} from "react";



const CommentForm = ({ id, getCommentsAgain, getPostsAgain, user }) => {

  const [body, setBody] = useState("");

  const handleSubmit = async () => {
      let newComment = { author: user._id, body, id };
      // console.log(newComment);
      // const res = await PostService.createComment(id, newComment);

      // if (res.status === 201) {
      //     setBody("");
      //     getCommentsAgain(id);
      //     getPostsAgain();
      // } else {
      //     alert("Server Error");
      // }
  };


  return (
    <div className="comment-form-inputs">
    <input
        onChange={(e) => setBody(e.target.value)}
        value={body}
        type="text"
        name="body"
        placeholder="COMMENT HERE"
    />
    <button onClick={handleSubmit}>Add Comment +</button>
</div>
  );
};

// export default CommentForm










// import {
//   MDBRow,
//   MDBCard,
//   MDBCardBody,
//   MDBIcon,
//   MDBCol,
//   MDBCardImage,
//   MDBInput,
// } from "mdbreact";

// const CommentForm = () => {
//   return (
//     <MDBRow>
//       <MDBCol md="6" lg="4">
//         <MDBCard news className="my-5">
//           <MDBCardBody>
//             <div className="content">
//               <div className="right-side-meta">14 h</div>
//               <img
//                 src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg"
//                 alt=""
//                 className="rounded-circle avatar-img z-depth-1-half"
//               />
//               Kate
//             </div>
//           </MDBCardBody>
//           <MDBCardImage
//             top
//             src="https://mdbootstrap.com/img/Photos/Others/girl1.jpg"
//             alt=""
//           />
//           <MDBCardBody>
//             <div className="social-meta">
//               <p>Another great adventure! </p>
//               <span>
//                 <MDBIcon far icon="heart" />
//                 25 likes
//               </span>
//               <p>
//                 <MDBIcon icon="comment" />
//                 13 comments
//               </p>
//             </div>
//             <hr />
//             <MDBInput far icon="heart" hint="Add Comment..." />
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   );
// };

// // export default CommentForm;