import React from 'react'
import { useState, useCallback } from 'react'

import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

import './App.css'

function App () {
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('My Plylist')
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [loading, setLoading] = useState(false)

  const search = useCallback(term => {
    Spotify.search(term).then(result => setSearchResults(result))
  }, [])

  const addTrack = useCallback(
    track => {
      // Si el track ya existe en la playlist se quita de los resultados de busqueda
      if (
        !playlistTracks.some(existingTrack => existingTrack.id === track.id)
      ) {
        // Actualiozamos la playlist con el nuevo track seleccionado
        const newPlaylistTracks = [...playlistTracks, track]
        setPlaylistTracks(newPlaylistTracks)
      }
    },
    [playlistTracks]
  )

  const removeTrack = useCallback(
    track => {
      // Actualizamos la playlist obviando el track seleccionado
      const updatedPlaylistTracks = playlistTracks.filter(
        existingTrack => existingTrack.id !== track.id
      )
      setPlaylistTracks(updatedPlaylistTracks)
    },
    [playlistTracks]
  )

  const handleNameChange = useCallback(newName => {
    setPlaylistName(newName)
  }, [])

  const savePlaylistToSpotify = useCallback(() => {
    setLoading(true)

    const trackUris = playlistTracks.map(track => track.uri)
    
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist')
      setPlaylistTracks([])
      setLoading(false)
    })
  }, [playlistName, playlistTracks])

  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar onSearch={search} />
      <div className='results-playlist'>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          name={playlistName}
          tracks={playlistTracks}
          onNameChange={handleNameChange}
          onRemove={removeTrack}
          onSave={savePlaylistToSpotify}
        />
        {loading && <LoadingScreen />}
      </div>
    </div>
  )
}

export default App
