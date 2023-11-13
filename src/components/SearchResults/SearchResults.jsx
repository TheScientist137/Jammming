import Tracklist from '../Tracklist/Tracklist'

function SearchResults (props) {
  const { searchResults, onAdd } = props

  return (
    <div className='mh-50 w-50 p-4 me-2 overflow-scroll border border-info'>
      <h2>Results</h2>
      <Tracklist tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  )
}

export default SearchResults
