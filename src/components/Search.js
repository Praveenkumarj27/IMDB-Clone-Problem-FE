import React, { useRef, useState, useCallback } from 'react'
import { fetchMovies } from '../redux/api';
import { useDispatch, useSelector } from 'react-redux'
import { clearMovies } from '../redux/movieSlice'
const Search = () => {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();


  const { movies } = useSelector(state => state.movieSlice);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 800)
    }
  }

  const handleChange = (e) => {
    setText(e.target.value);
    fetchMovies(dispatch, e.target.value);
  }

  const optimisedFunction = useCallback(debounce(handleChange), []);

  const clear = () => {
    dispatch(clearMovies());
    setText("");
    inputRef.current.value = "";
  }
  return (
    <div className="container">
      <div className="jumbotron">

        <form>
          <input className="form-control" ref={inputRef} type="text" name="text" placeholder="Start typing to search for movies" onChange={optimisedFunction} />
        </form>
        {movies?.length > 0 &&
          <button className="btn btn-primary clear-btn" onClick={clear}>Clear</button>
        }
      </div>
    </div>
  )
}

export default Search;
