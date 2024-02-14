import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovies = 'ACTION'
const comedyMovies = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovies,
  )

  const comedyMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovies,
  )

  return (
    <div className="bg-container">
      <div className="img-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="home-img"
        />
      </div>
      <div className="content-cont">
        <h1 className="sub-headings">Action Movies</h1>
        <div className="slider-container">
          <MoviesSlider moviesList={actionMovieList} />
        </div>
        <h1 className="sub-headings">Comedy Movies</h1>
        <div className="slider-container">
          <MoviesSlider moviesList={comedyMovieList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
