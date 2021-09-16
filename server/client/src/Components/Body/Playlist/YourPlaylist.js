
import React, { useState } from 'react'
import { useStateValue } from '../../../state/StateProvider';
import '../../styles.css'
<<<<<<< HEAD
import Post from '../../Comment/Post';
=======
import Comment from '../../Post/PostForm';
import * as UserService from "../../../api/UserService"
import { getTokenFromResponse } from '../../../api/Spotify';



>>>>>>> main



const YourPlaylist = ({ spotify }) => {

    const [{ playlists }, dispatch] = useStateValue();
    console.log(playlists);

   
<<<<<<< HEAD

    
    return (
      <div>
        <h1>
         
        </h1>
        <Post />
      </div>
    );

=======
    const posts = UserService.getPost();
    console.log(posts)
    
>>>>>>> main
    
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