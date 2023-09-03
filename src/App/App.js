import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;
