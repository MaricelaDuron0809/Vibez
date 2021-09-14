import React from 'react'
import logo from '../images/logo.png'
import Welcome from './Header/Welcome';
import PlaylistTitle from './Header/PlaylistTitle';
import YourPlaylist from './Body/YourPlaylist';
import SongDetails from './Body/SongDetails';
import SearchResults from './Body/SearchResults';
import Search from './Body/Search';
import PopularPlaylist from './Body/PopularPlaylist';
import './styles.css'

function VibezPlayer({ spotify }) {
    return (
        <div className="home-ctr"> 
        <div className="header">
           <img className="logo" src={logo} alt="website logo"/>  
        </div>
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
                <YourPlaylist />
            </div>
            </div>
        <div className="play-footer">
                Where player was
            </div>
    </div>
    )
}

export default VibezPlayer
