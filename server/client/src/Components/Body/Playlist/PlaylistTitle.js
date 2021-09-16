import { PlaylistAddSharp } from '@material-ui/icons'
import React from 'react'

const PlaylistTitle = ( { option }) => {

return (
    <div className="playlist-title">
        <h4>{option}</h4>

    </div>
)

}

export default PlaylistTitle


// {playlists.items[0].name}