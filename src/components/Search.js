import React, { useRef, useState, useCallback } from "react";
import { fetchMovies } from "../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { clearMovies } from "../redux/movieSlice";
const Search = () => {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movieSlice);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 800);
    };
  };

  const handleChange = (e) => {
    setText(e.target.value);
    fetchMovies(dispatch, e.target.value);
  };

  const optimisedFunction = useCallback(debounce(handleChange), []);

  const clear = () => {
    dispatch(clearMovies());
    setText("");
    inputRef.current.value = "";
  };
  return (
    <div className="container">
      <div className="col-lg-6">
      <div className="jumbotron mt-10">
          <form>
            <input
              className="form-control"
              ref={inputRef}
              type="text"
              name="text"
              placeholder="Start typing to search for movies"
              onChange={optimisedFunction}
              style={{marginTop:"30px",marginLeft:"250px"}}
            />
          </form>
          <div className="col-lg-6">
          {movies?.length > 0 && (
            <button className="btn btn-primary clear-btn" onClick={clear}
            style={{marginLeft:"235px"}}>
              Clear
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Search;
