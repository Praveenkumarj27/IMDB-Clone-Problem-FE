
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from '../components/Spinner'
const Movies = () => {
  const { movies, isFetching } = useSelector(state => state.movieSlice);

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <div className="container search_results">
      <div className="row flex">
        {movies?.map((movie) => {
          return (
            <>
              <div className="col-lg-4 col-sm-6">
                <div className="thumbnail img-responsive">
                  <Link key={movie?.imdbID} className="searched_images" to={`/movie/${movie?.imdbID}`}>
                    <img src={movie?.Poster != "N/A" ? movie.Poster : "/fallback_movie_img.jpeg"} alt="movie-image" />
                    <div className="caption">
                      <h4>{movie?.Title}</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Movies;
