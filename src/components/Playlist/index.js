import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const Playlist = prop => {
  const {playlistDetails, deletePlaylist} = prop
  const {id, imageUrl, name, genre, duration} = playlistDetails

  const onDeletePlaylist = () => {
    deletePlaylist(id)
  }

  return (
    <li className="playlist-list">
      <div className="playlist-card">
        <img src={imageUrl} alt="track" className="playlist-image" />
        <div className="playlist-name">
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="playlist-card">
        <p>{duration}</p>
        <button
          type="button"
          className="button-icon"
          onClick={onDeletePlaylist}
          testId="delete"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default Playlist
