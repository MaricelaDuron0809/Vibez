
import React, {useState} from 'react'
import './styles.css'



const YourPlaylist = () => {

   const [selectedValue, setSelectedValue] = useState('');

    const data = [
        {title: "Song Title 1", artist: 'Artist Name 1'},
        {title: "Song Title 2", artist: 'Artist Name 2'},
        {title: "Song Title 3", artist: 'Artist Name 3'}
    ]
    
    return (
        <div className="your-playlist">
    
                {data.map((item, idx)=>
                    <h3 key={idx}
                        value={item.title}>
                            {item.title}
                            </h3>
                            )}
        </div>
    )
}

export default YourPlaylist

                

{/* <div className="your-play-header">
    <h2>Your Playlist</h2>
    </div>
    
    <div className="your-playlist-row">
    <div className="your-playlist-ctr">
    <div className="your-album-art"><img className="your-album-img" src={demo4}/>
    </div>
    <div className="your-playlist-title">
        <h3>Playlist Title</h3>
        </div>
    </div>    

    <div className="your-playlist-ctr">
    <div className="your-album-art"><img className="your-album-img" src={demo4}/>
    </div>
    <div className="your-playlist-title">
        <h3>Playlist Title</h3>
        </div>
    </div>    

    <div className="your-playlist-ctr">
    <div className="your-album-art"><img className="your-album-img" src={demo4}/>
    </div>
    <div className="your-playlist-title">
        <h3>Playlist Title</h3>
        </div>
        </div>
    </div>     */}