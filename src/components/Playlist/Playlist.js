import React, { useCallback } from 'react'
import Tracklist from '../Tracklist/Tracklist'

import './Playlist.css'

function Playlist (props) {
  const { name, tracks, onNameChange, onRemove, onSave } = props

  const handleName = useCallback((e) => {
   onNameChange(e.target.value)
  }, [onNameChange])

  return (
    <div className='playlist'>
      <input value={name} onChange={handleName} />
      <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={true}  />
      <button onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
