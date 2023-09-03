import React from 'react'

function Playlist (props) {
  const { name, onNameChange } = props

  const handleName = (e) => {
   onNameChange(e.target.value)
  }

  return (
    <div>
      <input value={name} onChange={handleName} />
      <button>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
