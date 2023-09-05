import React from 'react'
import Tracklist from '../Tracklist/Tracklist'

function Playlist (props) {
  const { name, tracks, onNameChange, onRemove } = props

  const handleName = (e) => {
   onNameChange(e.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleName} />
      <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={true}  />
      <button>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
