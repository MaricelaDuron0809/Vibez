import React from 'react'
import { accessUrl } from '../api/Spotify'
function Redirect() {

    return (
       <a href={accessUrl} > LOGIN TO SPOTIFY </a>
    )
}

export default Redirect
