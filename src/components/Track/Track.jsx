import React, { useCallback } from 'react'

function Track (props) {
  const { track, onAdd, onRemove, isRemoval } = props

  const addTrack = useCallback(() => {
    onAdd(track)
    console.log(track)
  }, [onAdd, track])

  const removeTrack = useCallback(() => {
    onRemove(track)
  }, [onRemove, track])

  return (
    <div>
      <p className='songName'>{props.track.name}</p>
      <p>{track.artist}</p>
      <p>{track.album}</p>
      {isRemoval === true ? (
        <button onClick={removeTrack}>-</button>
      ) : (
        <button onClick={addTrack}>+</button>
      )}
      {track.preview_url && (
        <audio className='audio' controls>
          <source src={track.preview_url} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  )
}

export default Track
