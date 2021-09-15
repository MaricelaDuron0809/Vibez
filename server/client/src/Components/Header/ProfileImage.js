import React from 'react'
import demoprofile from '../../images/demoprofile.png'
import { useStateValue } from '../../state/StateProvider';

function ProfileImage() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="profile-image">
            <img 
                src={demoprofile}
                // src={user?.images[0]?.url} 
                alt="user profile image"
                className="profile-avatar" 
                />
            
        {/* <h4>{user?.display_name}</h4> */}
            
        </div>
    )
}

export default ProfileImage
