import React, { useEffect, useState }  from 'react'
import Header from './Header/Header'
import Welcome from './Header/Welcome';
import YourPlaylist from './Body/Playlist/YourPlaylist';
import PopularPlaylist from './Body/PopularPlaylist';
import PlaylistCtr from '../Components/Body/Playlist/PlaylistCtr'
import PostForm from './Post/PostForm'
import PostHeader from './Post/PostHeader'
import Post from './Post/Post'
import { getUser } from "../api/UserService";
import * as  PostService from '../api/PostService'
import Footer from './Footer/Footer';
import './styles.css'
// import Likes from '../Components/LikeButton/Like'



const VibezPlayer = () => {
    const [posts, setPosts] = useState([]);
    const [user] = useState(getUser);

    async function fetchPosts() {
        let res = await PostService.getAll();
        console.log("POST SERVICE RESPONSE: ", res.data);
        if (res.status === 200) {
            setPosts(res.data.data);
        }
    }

    useEffect(() => {
        console.log("USER: ", user);
        fetchPosts();
    }, []); 

    return (
        <div className="home-ctr"> 
            <Header />


        <div className="body">

            <div className="sect-1">

                <Welcome />   
                {/* <Likes /> */}
                <PlaylistCtr />
        
            </div>


            <div className="sect-2">
                <PostHeader />
                <div className="post-form-ctr">
                <PostForm user={user} getPostsAgain={() => fetchPosts()} />
                {posts.map((post) => {
                    // console.log("WHICH DATA AM I USING: ", post);
                    return (
                        <Post
                            user={user}
                            author={post.author}
                            body={post.body}
                            title={post.title}
                            postComments={post.comments}
                            key={post._id}
                            id={post._id}
                            getPostsAgain={() => fetchPosts()}
                        />
                    );
                })}
               </div>
            </div>



            </div>

</div>

    )
};



export default VibezPlayer
