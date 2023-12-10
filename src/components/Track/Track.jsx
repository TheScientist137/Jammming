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
    <div className='container w-100 mb-4 d-flex flex-column justify-content-center'>
      <div className='ms-2 d-flex flex-column'>
        <h4 className='fs-5'>{props.track.name}</h4>
        <p className='mb-0 fw-normal text-info'>
          {track.artist} | {track.album}
        </p>
      </div>
      <div className='w-100 pb-4 d-flex align-items-center justify-content-between border-bottom border-info'>
        {track.preview_url ? (
          <audio className='mt-2 w-75 rounded-pill bg-info' controls>
            <source src={track.preview_url} type='audio/mpeg' />
          </audio>
        ) : (
          <p className='mt-4 fw-bold'>Your browser does not support the audio element.</p>
        )}
        {isRemoval === true ? (
          <button
            className='ms-4 mt-2 btn btn-outline-info border-3 rounded-pill fs-5'
            onClick={removeTrack}
          >
            Remove
          </button>
        ) : (
          <button
            className='ms-4 mt-2 btn btn-outline-info border-3 rounded-pill fs-5 '
            onClick={addTrack}
          >
            Add
          </button>
        )}
      </div>
    </div>
  )
}

export default Track
