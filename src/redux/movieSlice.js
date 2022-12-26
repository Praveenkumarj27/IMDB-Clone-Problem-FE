import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: null,
    currentMovie: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    moviesStart: (state) => {
      state.isFetching = true;
    },
    moviesSuccess: (state, action) => {
      state.isFetching = false;
      state.movies = action.payload;
    },
    moviesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    currentMovieStart: (state) => {
      state.isFetching = true;
    },
    currentMovieSuccess: (state, action) => {
      state.isFetching = false;
      state.currentMovie = action.payload;
    },
    currentMovieFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
    clearMovies: (state) => {
      state.movies = [];
      state.currentMovie = {};
    }
  }
})

export const { moviesStart, moviesSuccess, moviesFailure, currentMovieStart, currentMovieSuccess, currentMovieFailure, clearMovies } = movieSlice.actions;
export default movieSlice.reducer;