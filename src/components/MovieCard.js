function MovieCard({movie}) {
  return (
    <div className="card">
      {/* TEST CASE: image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      {/* TEST CASE: title */}
      <p>{movie.title}</p>

      {/* TEST CASE: vote_average */}
      <p>{movie.vote_average}</p>

      {/* TEST CASE: View Details button */}
      <button>View Details</button>
    </div>
  )
}

export default MovieCard
