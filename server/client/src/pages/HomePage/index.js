import React from "react";
import VibezPlayer from "../../Components/VibezPlayer";
import SpotifyWebApi from 'spotify-web-api-js';


const spotify  = new SpotifyWebApi();

const HomePage = () => {

return (
    <VibezPlayer />
    )
}

export default HomePage;