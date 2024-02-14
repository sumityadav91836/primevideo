import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        model
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        }
        position="top right"
        className="popup-container"
      >
        {close => (
          <div className="model-container">
            <IoMdClose
              size={20}
              color="#231f20"
              onClick={() => close()}
              data-testid="close button"
              className="close-button"
            />
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
