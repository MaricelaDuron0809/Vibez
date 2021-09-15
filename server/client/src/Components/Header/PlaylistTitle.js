import React from 'react'
import editicon from '../../images/editicon.png'


const PlaylistTitle = () => {
    

    return (
        <div className="playlist-header">
            <div className="playlist-title">
                <input
                    type="text"
                    name="title"
                    placeholder="TITLE"
                />
            
            </div>
            <div className="playlist-edit-icon">
            <img className="edit-icon" src="" alt="edit icon" />
            </div>
        </div>
    )
}


export default PlaylistTitle
