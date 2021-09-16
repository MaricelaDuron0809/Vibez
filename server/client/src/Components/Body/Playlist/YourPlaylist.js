
import React, { useState } from 'react'
import { useStateValue } from '../../../state/StateProvider';
import '../../styles.css'
import Comment from '../../Comment/Comment';
import * as UserService from "../../../api/UserService"
import { getTokenFromResponse } from '../../../api/Spotify';






const YourPlaylist = ({ spotify }) => {

    const [{ playlists }, dispatch] = useStateValue();
    console.log(playlists);

   
    const posts = UserService.getPost();
    console.log(posts)
    
    
        return (
            <div>
                {/* {playlists.items[0].name} */}
                {/* <h1> */}
                  {/* {
                  posts.map((post) => {
                    <ul>{post}</ul>;
                  })
                  } */}
                {/* </h1> */}
            </div>
        )
    
}

    
export default YourPlaylist
    
    
    
    //             </div>
    
    //                 {data.map((item, idx)=>
    //                     <h3 key={idx}
    //                         value={item.title}>
//                             {item.title}
//                             </h3>
//                             )}
//         </div>
//     )
// }

                

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