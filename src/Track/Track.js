import React from 'react'

import './Track.css'

function Track (props) {
  const { track, onAdd, onRemove, isRemoval } = props

  const addTrack = () => {
    onAdd(track)
  }

  const removeTrack = () => {
    onRemove(track)
  }

  return (
    <div>
      <p className='songName'>{props.track.name}</p>
      <p>{track.artist}</p>
      <p>{track.album}</p>
      {isRemoval === true ? (
        <button onClick={removeTrack}>Eliminar</button>
      ) : (
        <button onClick={addTrack}>Agregar</button>
      )}
    </div>
  )
}

export default Track
