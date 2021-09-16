import React, { useEffect, useState } from "react";
import VibezPlayer from "../../Components/VibezPlayer";
import SpotifyWebApi from "spotify-web-api-js";
function ProfilePage({ spotify }) {
  return (
    <div>
      <VibezPlayer spotify={spotify} />
    </div>
  );
}
export default ProfilePage;
