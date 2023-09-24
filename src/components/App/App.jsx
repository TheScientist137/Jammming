import React, { useEffect } from 'react'
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
  const [searchTerm, setSearchTerm] = useState('')

  const search = useCallback(
    term => {
      setSearchTerm(term)
      Spotify.search(term).then(result => {
        setSearchResults(result)

        // Actualiza los datos de busqueda en el almacenamiento local del navegador
        localStorage.setItem('searchResults', JSON.stringify(searchResults))
      })
    },
    [searchResults]
  )

  const addTrack = useCallback(
    track => {
      // Si el track ya existe en la playlist se quita de los resultados de busqueda
      if (
        !playlistTracks.some(existingTrack => existingTrack.id === track.id)
      ) {
        // Actualiozamos la playlist con el nuevo track seleccionado
        const newPlaylistTracks = [...playlistTracks, track]
        setPlaylistTracks(newPlaylistTracks)

        // Actualizamos los datos de la playlist en el almacenamiento local del navegador
        localStorage.setItem('playlist', JSON.stringify(newPlaylistTracks))
      }
    },
    [playlistTracks]
  )

  const removeTrack = useCallback(
    track => {
      // Filtra las canciones excluyendo la que vamos a eliminar
      const updatedPlaylistTracks = playlistTracks.filter(
        existingTrack => existingTrack.id !== track.id
      )
      // Actualiza el estado local de la playlist con la cancion eliminada
      setPlaylistTracks(updatedPlaylistTracks)

      // Actualizamos los datos de la playlist en el almacenamiento local del navegador
      localStorage.setItem('playlist', JSON.stringify(updatedPlaylistTracks))
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

  // Efecto para cargar datos desde el almacenamiento local cuando se monta el componente
  useEffect(() => {
    const cachedPlaylist = JSON.parse(localStorage.getItem('playlist'))
    if (cachedPlaylist) {
      console.log(cachedPlaylist)
      setPlaylistTracks(cachedPlaylist)
    }

    const cachedSearchResults = JSON.parse(
      localStorage.getItem('searchResults')
    )
    if (cachedSearchResults) {
      console.log(cachedSearchResults)
      setSearchResults(cachedSearchResults)
    }
  }, [])

  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar
        onSearch={search}
        searchTerm={searchTerm}
        onTermChange={setSearchTerm}
      />
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
