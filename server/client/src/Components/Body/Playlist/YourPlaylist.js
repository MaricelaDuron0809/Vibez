import React from 'react'
import { useStateValue } from '../../../state/StateProvider';
import '../../styles.css'
import PlaylistItem from './PlaylistItem';
//import Comment from '../../Comment'

function YourPlaylist () {

    const [{ playlists }, dispatch] = useStateValue();
    console.log(playlists);

    return (
        <div className="your-playlist">
            {playlists?.items?.map(
                function(plist, index){ 
                    return <PlaylistItem option={playlists.name}  />
                }
            )
            }
      {/* ))}; */}
      {/*render comment component*/}
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