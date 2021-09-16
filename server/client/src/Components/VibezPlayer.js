import React from 'react'
import Header from './Header/Header'
import Welcome from './Header/Welcome';
import YourPlaylist from './Body/Playlist/YourPlaylist';
import PopularPlaylist from './Body/PopularPlaylist';
import PlaylistCtr from '../Components/Body/Playlist/PlaylistCtr'
import PostForm from './Post/PostForm'
import Post from './Post/Post'
import Comment from './Comment 2/index'
import Footer from './Footer/Footer';
import './styles.css'



const VibezPlayer = ({ spotify }) => {

    return (
        <div className="home-ctr"> 
            <Header />


        <div className="body">

            <div className="sect-1">

                <Welcome />   
                <PlaylistCtr />
        
            </div>


            <div className="sect-2">
                <PopularPlaylist />
                <PostForm />
                <Post />
                <Comment />
            </div>



            </div>
        <div>
        </div>
    <Footer />
</div>

    )
};



export default VibezPlayer
