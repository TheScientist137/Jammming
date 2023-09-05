import Tracklist from '../Tracklist/Tracklist'

function SearchResults (props) {
  const { searchResults, onAdd } = props

  return (
    <div>
      <h2>Results</h2>
      <Tracklist tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  )
}

export default SearchResults
