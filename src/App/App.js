import React from 'react'
import { useState } from 'react'

import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

import './App.css'

const mockTrackList = [
  { id: 1, artist: 'artist1', name: 'song1', album: 'album1' },
  { id: 2, artist: 'artist2', name: 'song2', album: 'album2' },
  { id: 3, artist: 'artist3', name: 'song3', album: 'album3' }
]

function App () {
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('My Plylist')
  const [playlistTracks, setPlaylistTracks] = useState([])

  const handleSearch = searchTerm => {
    const results = mockTrackList.filter(track => {
      return track.name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    })
    setSearchResults(results)
  }

  const handleNameChange = newName => {
    setPlaylistName(newName)
  }

  const addTrack = track => {
    // Comprobamos que ningún track existe en la playlist
    if (!playlistTracks.some(existingTrack => existingTrack.id === track.id)) {
      // Actualiozamos la playlist con el nuevo track seleccionado
      const newPlaylistTracks = [...playlistTracks, track]
      setPlaylistTracks(newPlaylistTracks)
    }
  }

  const removeTrack = track => {
    // Actualizamos la playlist obviando el track seleccionado
    const updatedPlaylistTracks = playlistTracks.filter(
      existingTrack => existingTrack.id !== track.id
    )
    setPlaylistTracks(updatedPlaylistTracks)
  }

  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults searchResults={searchResults} onAdd={addTrack} />
      <Playlist
        name={playlistName}
        tracks={playlistTracks}
        onNameChange={handleNameChange}
        onRemove={removeTrack}
      />
    </div>
  )
}

export default App
