import Track from '../Track/Track'

function Tracklist (props) {
  const { tracks, onAdd, onRemove, isRemoval } = props
  return (
    <div className='force-overflow w-100'>
      {tracks.map(track => {
        return (
          <Track
            key={track.id}
            track={track}
            onAdd={onAdd}
            onRemove={onRemove}
            isRemoval={isRemoval}
          />
        )
      })}
    </div>
  )
}

export default Tracklist
