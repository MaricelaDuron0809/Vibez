import React from 'react'
import Header from './Header/Header'
import Welcome from './Header/Welcome';
import PlaylistTitle from './Header/PlaylistTitle';
import YourPlaylist from './Body/Playlist/YourPlaylist';
import SongList from './Body/Playlist/SongList';
import SongDetail from './Body/Playlist/SongDetail';
import SongDetails from './Body/SongDetails';
import SearchResults from './Body/SearchResults';
import SearchDrop from './Body/SearchDrop';
import PopularPlaylist from './Body/PopularPlaylist';
import PlaylistCtr from './Body/Playlist/PlaylistCtr'
import Footer from './Footer/Footer';
import './styles.css'


const VibezPlayer = () => {

    return (
        <div className="home-ctr"> 
            <Header />


        <div className="body">

            <div className="sect-1">

                <Welcome />   
                <PlaylistCtr />
                <PlaylistTitle />
                <SongDetails />
                <SongDetails />
                <SongDetails />
                <SongDetails />
            </div>


            <div className="sect-2">
                <PopularPlaylist />
                <YourPlaylist />
            </div>



            </div>
        <div>
        </div>
    <Footer />
</div>

    )
};



export default VibezPlayer
