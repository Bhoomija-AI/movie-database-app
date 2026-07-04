import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = "csb_v1_qjV6mHwst-bwKHHqAWTu1uJB9MJRjEf8-i_D66-VSaY";

function Search({ query }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
      )
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    }
  }, [query]);

  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Search;