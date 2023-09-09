import React from 'react'
import Tracklist from '../Tracklist/Tracklist'

function Playlist (props) {
  const { name, tracks, onNameChange, onRemove, onSave } = props

  const handleName = (e) => {
   onNameChange(e.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleName} />
      <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={true}  />
      <button onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
