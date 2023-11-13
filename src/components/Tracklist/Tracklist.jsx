import Track from '../Track/Track'

function Tracklist (props) {
  const { tracks, onAdd, onRemove, isRemoval } = props
  return (
    <div className='force-overflow'>
      {tracks.map(track => {
        return (
          <div key={track.id}>
            <Track
              key={track.id}
              track={track}
              onAdd={onAdd}
              onRemove={onRemove}
              isRemoval={isRemoval}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Tracklist
