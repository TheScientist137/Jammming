import React from "react";

function Track (props) {
 return (
  <div>
   <p>{props.track.name}</p>
   <p>{props.track.artist}</p>
   <p>{props.track.album}</p>
  </div>
 )
}

export default Track 