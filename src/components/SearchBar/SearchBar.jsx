import React, { useCallback } from 'react'

function SearchBar (props) {
  const { onSearch, searchTerm, onTermChange } = props

  const handleTermChange = useCallback(
    e => {
      onTermChange(e.target.value)
    },
    [onTermChange]
  )

  const handleSearch = useCallback(() => {
    onSearch(searchTerm)
  }, [onSearch, searchTerm])

  const handleKeypress = useCallback(
    e => {
      if (e.key === 'Enter') {
        handleSearch() // Activa la búsqueda al presionar "Enter"
      }
    },
    [handleSearch]
  )

  return (
    <div className='my-4 d-flex flex-column justify-content-center align-items-center'>
      <input
        className='w-50 mb-4 form-control border-info'
        type='text'
        placeholder='Enter a song, artist, or album'
        value={searchTerm}
        onChange={handleTermChange}
        onKeyDown={handleKeypress}
      />
      <button
        type='button'
        className='btn btn-primary border-info text-uppercase px-5 py-2 rounded-pill'
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
