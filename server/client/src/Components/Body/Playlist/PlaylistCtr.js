import React, {useState, useEffect} from 'react'
import SongList from './SongList';
import SongDetail from './SongDetail';
import SearchDrop from '../SearchDrop';
import { Credentials } from '../../../api/Credentials';
import '../../styles.css'
import axios from 'axios'


const PlaylistCtr = () => {

    const spotify = Credentials();  

  
    const [token, setToken] = useState('');  
    const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
    const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
    const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
    const [trackDetail, setTrackDetail] = useState(null);
  
    useEffect(() => {
  
      axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      .then(tokenResponse => {      
        setToken(tokenResponse.data.access_token);
  
        axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        })
        .then (genreResponse => {        
          setGenres({
            selectedGenre: genres.selectedGenre,
            listOfGenresFromAPI: genreResponse.data.categories.items
          })
        });
        
      });
  
    }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]); 
  
    const genreChanged = val => {
      setGenres({
        selectedGenre: val, 
        listOfGenresFromAPI: genres.listOfGenresFromAPI
      });
  
      axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
      })
      .then(playlistResponse => {
        setPlaylist({
          selectedPlaylist: playlist.selectedPlaylist,
          listOfPlaylistFromAPI: playlistResponse.data.playlists.items
        })
      });
  
      console.log(val);
    }
  
    const playlistChanged = val => {
      console.log(val);
      setPlaylist({
        selectedPlaylist: val,
        listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
      });
    }
  
    const buttonClicked = e => {
      e.preventDefault();
  
      axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
        method: 'GET',
        headers: {
          'Authorization' : 'Bearer ' + token
        }
      })
      .then(tracksResponse => {
        setTracks({
          selectedTrack: tracks.selectedTrack,
          listOfTracksFromAPI: tracksResponse.data.items
        })
      });
    }
  
    const listboxClicked = val => {
  
      const currentTracks = [...tracks.listOfTracksFromAPI];
  
      const trackInfo = currentTracks.filter(t => t.track.id === val);
  
      setTrackDetail(trackInfo[0].track);
  
  
  
    };
  

    return (
        <div>
          <h3> Search By Genre & Discover</h3> 
          <h3>New Playlists</h3>
      <form onSubmit={buttonClicked}>        
          <SearchDrop label="Genre :" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
          <SearchDrop options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
          <div className="search">
            <button type='submit' className="">
              Search
            </button>
          </div>
          <div className="search-results">

            <div className="search-song-list">
            <SongList items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />

            </div>
            <div>
            {trackDetail && <SongDetail {...trackDetail} /> }
            </div>
          </div>        
      </form>
    </div>
    
    )
}

export default PlaylistCtr
