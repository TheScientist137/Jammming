import React, { useCallback } from 'react'

function SearchBar (props) {
  const { onSearch, searchTerm, onTermChange } = props

  const handleTermChange = useCallback(e => {
    onTermChange(e.target.value)
  }, [onTermChange])

  const handleSearch = useCallback(() => {
    onSearch(searchTerm)
  }, [onSearch, searchTerm])

  const handleKeypress = useCallback(e => {
    if (e.key === 'Enter') {
      handleSearch() // Activa la búsqueda al presionar "Enter"
    }
  }, [handleSearch])

  return (
    <div className='searchBar'>
      <input
        type='text'
        placeholder='Enter a song, artist or album'
        value={searchTerm}
        onChange={handleTermChange}
        onKeyDown={handleKeypress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
