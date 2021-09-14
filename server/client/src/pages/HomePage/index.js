import React, { useEffect, useState } from "react";
import VibezPlayer from "../../Components/VibezPlayer";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "../../state/StateProvider";
import { getTokenFromResponse } from "../../api/Spotify";


const spotify = new SpotifyWebApi();

function HomePage() {
     const [user, token, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
        
        dispatch({
            type: "SET_TOKEN",
            token: _token
        });
        spotify.setAccessToken(_token);
        spotify.getMe().then((user) => {
            dispatch({
                type: "SET_USER",
                user: user,
            })
        });

    //   spotify.getPlaylist("cb4e46622559403d9acdba7144bf4831").then((response) =>
    //     dispatch({
    //       type: "SET_DISCOVER_WEEKLY",
    //       discover_weekly: response
    //     })
    //   );

    //   spotify.getMyTopArtists().then((response) =>
    //     dispatch({
    //       type: "SET_TOP_ARTISTS",
    //       top_artists: response
    //     })
    //   );

    //   dispatch({
    //     type: "SET_SPOTIFY",
    //     spotify: spotify
    //   });

    //   spotify.getMe().then((user) => {
    //     dispatch({
    //       type: "SET_USER",
    //       user
    //     });
    //   });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists
        });
      });
    }
  }, []);

  return (
    <div>
    <VibezPlayer spotify={spotify} />
    </div>
    )
}

export default HomePage;