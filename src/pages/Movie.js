import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleMovie } from '../redux/api'
import Spinner from '../components/Spinner';

const Movie = () => {
  const { isFetching, currentMovie } = useSelector(state => state.movieSlice);
  const dispatch = useDispatch();
  console.log("currentMovie ", currentMovie);
  useEffect(() => {
    const query = window.location.pathname.substring(7);
    fetchSingleMovie(dispatch, query);
  }, []);

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <div class="container" style={{ marginTop: "100px" }}>
      <div class="row flex movie-img">
        <div class="col-lg-4 col-sm-6">
          <div class="thumbnail img-responsive movie-img">
            {currentMovie && <img src={currentMovie?.Poster != "N/A" ? currentMovie.Poster : "/fallback_movie_img.jpeg"} alt="" />}
          </div>
        </div>
        <div class="col-lg-8 col-sm-6">
          <div class="movie_data">
            <h3>{currentMovie?.Title}</h3>
            <p>Runtime: {currentMovie?.Runtime}</p>
            <p>Genre: {currentMovie?.Genre}</p>
            <p>IMDB Rating: {currentMovie?.imdbRating}</p>
            <p>IMDB Votes: {currentMovie?.imdbVotes}</p>
            <p>Actors: {currentMovie?.Actors}</p>
            <p>Plot: {currentMovie?.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
