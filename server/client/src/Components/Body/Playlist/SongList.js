import React from 'react';

const SongList = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }    

    return (
        
            <div >
                {
                    props.items.map((item, idx) => 
                    <button key={idx}
                        onClick={clicked}
                        className="search-song-list"
                        id={item.track.id}>
                            
                            {item.track.name}
                    </button>)
                }
            </div>
        
        

    );
}

export default SongList;