import React from 'react'
import Header from './Header/Header'
import Welcome from './Header/Welcome';
import PlaylistTitle from './Header/PlaylistTitle';
import YourPlaylist from './Body/Playlist/YourPlaylist';
import SongDetails from './Body/SongDetails';
import SearchResults from './Body/SearchResults';
import Search from './Body/Search';
import PopularPlaylist from './Body/PopularPlaylist';
import Footer from './Footer/Footer';
import './styles.css'
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function VibezPlayer({ spotify }) {
    return (
        <div className="home-ctr"> 
        <Header spotify={spotify} />
        <div className="body">
            <div className="sect-1">
                <Welcome />
                {/* <CreatePlaylist /> */}
                <Search />
                <SearchResults />
                <PlaylistTitle />
                <SongDetails />
                <SongDetails />
                <SongDetails />
                <SongDetails />
            </div>
            <div className="sect-2">
                <PopularPlaylist />
                <YourPlaylist spotify={spotify} />
            </div>
            </div>
        <div>
            </div>
                <Footer />
    </div>
    )
}

export default VibezPlayer
