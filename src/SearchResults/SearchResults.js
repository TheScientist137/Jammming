import Tracklist from '../Tracklist/Tracklist'

function SearchResults (props) {

 return (
  <div>
   <h2>Results</h2>
   <Tracklist results={props.results} />
  </div>
 )
}

export default SearchResults
