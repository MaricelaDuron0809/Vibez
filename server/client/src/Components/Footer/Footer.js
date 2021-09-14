import React from 'react'
import './styles.css'
import playbutton from '../../images/playbutton.png'
import repeat from '../../images/repeat.png'
import shuffle from '../../images/shuffle.png'
import forward_right from '../../images/forward_right.png'
import forward_left from '../../images/forward_left.png'

function Footer () {
    return (
        <div className= "footer-ctr">
        `<div className= "footer-left">
            <img 
            className="player-art"
            src="" 
            alt="" 
            />
                <div className= "footer-songDetails">
                    <h5>Test Song Title</h5>
                    <p>Artist Name</p>
                </div>
            </div>

        `<div className= "footer-center"> 
            <img src ={shuffle} atl="player shuffle button" />
            <img src ={forward_left} atl="player skip back button" />
            <img src ={playbutton} className="player-play-button" atl="player play button" />
            <img src ={forward_right} atl="player skip forward button" />
            <img src ={repeat} atl="player repeat button" />
                       
            </div>

            
        <div className= "footer-right">
            <p>Volume Controls</p>  
        </div>
        
        </div>

    )
}

export default Footer 
