import React, {useState} from 'react'
import { useStateValue } from '../../../state/StateProvider';
import './styles.css'
import { getTokenFromResponse } from "../../../api/Spotify";

const YourPlaylist = () => {

   const [selectedValue, setSelectedValue] = useState('');

    const data = [
        {value: 1, name: 'A'},
        {value: 2, name: 'B'},
        {value: 3, name: 'C'}
    ]
    
    return (
        <div className="your-playlist">
    
             <div>
                {data.map((item, idx)=>
                    <p key={idx}
                        value={item.value}>
                            {item.name}, {item.value}
                            </p>)}
            </div>
    
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