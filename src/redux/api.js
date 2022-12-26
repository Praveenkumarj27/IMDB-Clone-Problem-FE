import { moviesStart, moviesSuccess, moviesFailure, currentMovieStart, currentMovieSuccess, currentMovieFailure } from './movieSlice';
import { publicRequest } from '../requestMethod';

export const fetchMovies = async (dispatch, text) => {
  dispatch(moviesStart());
  try {

    // const res = await publicRequest.get(`/results?search=sherlock`);
    const res = await publicRequest.get(`http://localhost:8000/movies?search=${text}`);
    dispatch(moviesSuccess(res.data.Search));
  } catch (err) {
    console.log("Error", err);
    dispatch(moviesFailure());
  }
}

export const fetchSingleMovie = async (dispatch, movieId) => {
  dispatch(currentMovieStart());
  try {
    const res = await publicRequest.get(`http://localhost:9000/movie/${movieId}`);
    dispatch(currentMovieSuccess(res.data));
  } catch (err) {
    console.log("Error", err);
    dispatch(currentMovieFailure());
  }
}