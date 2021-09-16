import React from 'react'
import * as PostService from "../../api/PostService"

const posts = PostService.getAllPosts()

const listPosts = () => {
    return <li>{posts}</li>
}

const ShowPost = async () => {





    return (
        <div>
            
        </div>
    )
}

export default ShowPost
