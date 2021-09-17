import React from 'react'
import * as PostService from "../../api/PostService"

const posts = PostService.getAllPosts()

function ListPosts() {
    console.log("the posts", posts)
    return <li>{posts}</li>;
}

function List() {

  const listItems = posts.map((post) => (
    <ListPosts key={post.id} value={post} />
  ));

  return (
    <div>
      <h2>React Map Example</h2>
      <ul> {listItems} </ul>
    </div>
  );
} 

export default ListPosts
