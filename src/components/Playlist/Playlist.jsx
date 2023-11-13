import React, { useCallback } from 'react'
import Tracklist from '../Tracklist/Tracklist'

function Playlist (props) {
  const { name, tracks, onNameChange, onRemove, onSave } = props

  const handleName = useCallback((e) => {
   onNameChange(e.target.value)
  }, [onNameChange])

  return (
    <div className='w-50 p-4 ms-2  border border-info'>
      <input value={name} onChange={handleName} />
      <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={true}  />
      <button onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
