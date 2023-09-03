import React from 'react';
import { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import './App.css';

const mockTrackList = [
  {id: 1, artist: 'artist1', name: 'cancion1', album: 'album1'},
  {id: 2, artist: 'artist2', name: 'cancion2', album: 'album2'},
  {id: 3, artist: 'artist3', name: 'cancion3', album: 'album3'}
]

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [playlistName, setPlaylistName] = useState('My Plylist')
  const [playlistTracks, setPlaylistTracks] = useState([])

  const handleSearch = (searchTerm) => {
    const results = mockTrackList.filter((track) => {
      return track.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })
    setSearchResults(results)
  }

  const handleNameChange = (newName) => {
    setPlaylistName(newName)
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
      <Playlist name={playlistName} onNameChange={handleNameChange} />
    </div>
  );
}

export default App;
