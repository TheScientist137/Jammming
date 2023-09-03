import Track from '../Track/Track'

function Tracklist (props) {
  return (
    <div>
      {props.results.map(track => {
        return (
          <div>
            <li key={track.id}>
              <Track track={track} />
            </li>
          </div>
        )
      })}
    </div>
  )
}

export default Tracklist
