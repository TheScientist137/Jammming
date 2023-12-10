import Tracklist from '../Tracklist/Tracklist'

function SearchResults (props) {
  const { searchResults, onAdd } = props

  return (
    <div className='mh-50 w-50 px-4 me-2 mb-3 overflow-scroll shadow-lg rounded-4'>
      <h2 className='p-1 mb-4 rounded text-info text-center'>Results</h2>
      <Tracklist tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  )
}

export default SearchResults
