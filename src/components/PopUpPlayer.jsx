import React from "react";
import { Player } from "video-react";

const PopUpPlayer = () => {
  return (
    <div>
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://storage.googleapis.com/apt-cubist-307713.appspot.com/crm/videos/p61pgb8dgeas4oacj3mek9u09eirf67m?video_id=undefined"
      />
    </div>
  );
};

export default PopUpPlayer;
