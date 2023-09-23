import Tracklist from '../Tracklist/Tracklist'

import './SearchResults.css'

function SearchResults (props) {
  const { searchResults, onAdd } = props

  return (
    <div className='searchResults'>
      <h2>Results</h2>
      <Tracklist tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  )
}

export default SearchResults
