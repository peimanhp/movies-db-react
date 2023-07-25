import { useEffect, useState } from "react";
import http from "../services/httpService";
import MovieSlider from "../components/MovieSlider";
import MovieInfo from "../components/MovieInfo";

const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [todaySeries, setTodaySeries] = useState([]);
  const [showMovieInfo, setShowMoviesInfo] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const nowPlaying = await http.get(`/3/movie/now_playing`);
        setNowPlayingMovies(nowPlaying.data.results);

        const airingToday = await http.get(`3/tv/airing_today`);
        setTodaySeries(airingToday.data.results);

        const popular = await http.get(`/3/movie/popular`);
        setPopularMovies(popular.data.results);
      } catch (error) {
        setError(error.message)
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {error && <h1>{error}</h1>}
      <MovieSlider
        title={"فیلم های در حال اکران"}
        movies={nowPlayingMovies}
        showMovieInfo={showMovieInfo}
        setShowMoviesInfo={setShowMoviesInfo}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
      />
      {showMovieInfo && nowPlayingMovies.includes(selectedMovie) ? (
        <MovieInfo selectedMovie={selectedMovie} />
      ) : null}
      <MovieSlider
        title={"سریالهای پخش امروز"}
        movies={todaySeries}
        showMovieInfo={showMovieInfo}
        setShowMoviesInfo={setShowMoviesInfo}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
      />
      {showMovieInfo && todaySeries.includes(selectedMovie) ? (
        <MovieInfo selectedMovie={selectedMovie} />
      ) : null}
      <MovieSlider
        title={"فیلم های محبوب"}
        movies={popularMovies}
        showMovieInfo={showMovieInfo}
        setShowMoviesInfo={setShowMoviesInfo}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
      />
      {showMovieInfo && popularMovies.includes(selectedMovie) ? (
        <MovieInfo selectedMovie={selectedMovie} />
      ) : null}
    </>
  );
};

export default Home;
