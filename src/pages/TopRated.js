import {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'
import {topRatedMoviesURL} from '../api'

function TopRated() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(topRatedMoviesURL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, [])

  return (
    <div>
      <h2>Top Rated</h2>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default TopRated
