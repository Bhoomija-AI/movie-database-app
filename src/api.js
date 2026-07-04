const API_KEY = "csb_v1_qjV6mHwst-bwKHHqAWTu1uJB9MJRjEf8-i_D66-VSaY";

export const getPopularMoviesURL =
  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export const topRatedMoviesURL =
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

export const upcomingMoviesURL =
  `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

export const searchMoviesURL =
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;