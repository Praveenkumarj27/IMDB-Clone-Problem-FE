import { moviesStart, moviesSuccess, moviesFailure, currentMovieStart, currentMovieSuccess, currentMovieFailure } from './movieSlice';
import { publicRequest } from '../requestMethod';

export const fetchMovies = async (dispatch, text) => {
  dispatch(moviesStart());
  try {

    const res = await publicRequest.get(`https://imdb-clone-problem-be.vercel.app/movies?search=${text}`);
    dispatch(moviesSuccess(res.data.Search));
  } catch (err) {
    console.log("Error", err);
    dispatch(moviesFailure());
  }
}

export const fetchSingleMovie = async (dispatch, movieId) => {
  dispatch(currentMovieStart());
  try {
    const res = await publicRequest.get(`https://imdb-clone-problem-be.vercel.app/movie/${movieId}`);
    dispatch(currentMovieSuccess(res.data));
  } catch (err) {
    console.log("Error", err);
    dispatch(currentMovieFailure());
  }
}