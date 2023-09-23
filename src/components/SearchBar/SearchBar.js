import React, { useCallback, useState } from 'react'

import './SearchBar.css'

function SearchBar (props) {
  const { onSearch } = props
  const [term, setTerm] = useState('')

  const handleTermChange = useCallback(e => {
    setTerm(e.target.value)
  }, [])

  const handleSearch = useCallback(() => {
    // Llama a la función de búsqueda pasando el término como argumento
    onSearch(term)
  }, [onSearch, term])

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
        value={term}
        onChange={handleTermChange}
        onKeyDown={handleKeypress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
