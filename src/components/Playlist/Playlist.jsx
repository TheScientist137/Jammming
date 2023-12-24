/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from 'react'
import Tracklist from '../Tracklist/Tracklist'

function Playlist (props) {
  const { name, tracks, onNameChange, onRemove, onSave } = props

  const handleName = useCallback(
    e => {
      onNameChange(e.target.value)
    },
    [onNameChange]
  )

  return (
    <div className='sm w-50 px-4 ms-2 mb-3 d-flex flex-column overflow-scroll shadow-lg rounded-4'>
      <h2 className='p-1 mb-4 rounded text-info text-center'>Playlist</h2>
      <div className='w-100 mb-4 d-flex justify-content-center'>
        <input
          className='w-75 ps-3 py-1 me-4 border-info border-3 focus-ring focus-ring-light rounded-pill bg-transparent'
          value={name}
          onChange={handleName}
        />
        <a href='#' className='mt-1 link-info'>
          <svg
            onClick={onSave}
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='currentColor'
            class='bi bi-floppy2-fill'
            viewBox='0 0 16 16'
          >
            <path d='M12 2h-2v3h2V2Z' />
            <path d='M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2.914a1.5 1.5 0 0 0-.44-1.06L14.147.439A1.5 1.5 0 0 0 13.086 0H1.5ZM4 6a1 1 0 0 1-1-1V1h10v4a1 1 0 0 1-1 1H4ZM3 9h10a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1Z' />
          </svg>
        </a>
      </div>
      <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={true} />
    </div>
  )
}

export default Playlist
