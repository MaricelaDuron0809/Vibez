import React, {useEffect, useState} from 'react'
import { BrowserRouter } from "react-router-dom"
import './App.css';
import VibezPlayer from './Components/VibezPlayer'
import { useStateValue } from './state/StateProvider';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from "./api/Spotify";
import Routes from '../src/routes/'

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
      <BrowserRouter>
        <Routes />         
    </BrowserRouter>
  );
}

export default App;