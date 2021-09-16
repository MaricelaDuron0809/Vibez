import React from 'react';

const SongDetail = ({album, artists, name}) => {

    return (
        <div className="song-details-ctr">
            <div>
                <img 
                    className="search-album-image"
                    src={album.images[0].url}
                    alt={name}>                    
                </img>
            </div>
            <div>
                <label htmlFor={name}>
                    {name}
                </label>
            </div>
            <div>
                <label htmlFor={artists[0].name}>
                    {artists[0].name}
                </label>
            </div>
        </div>
    );
}

export default SongDetail;