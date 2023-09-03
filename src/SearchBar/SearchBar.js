import React, { useState } from 'react'

function SearchBar (props) {
  const { onSearch } = props
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onSearch(searchTerm)
    }
  }

  const handleSearchClick = () => {
    onSearch(searchTerm)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Enter a song, artist or album'
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  )
}

export default SearchBar
