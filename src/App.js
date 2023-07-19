import { useEffect, useState } from "react";
import http from "./services/httpService";
import NavBar from "./components/NavBar";
import MovieSlider from "./components/MovieSlider";
import MovieInfo from "./components/MovieInfo";
import "./index.css";

function App() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [showMovieInfo, setShowMoviesInfo] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await http.get(`/3/movie/now_playing`);
        setNowPlayingMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNowPlayingMovies();
  }, []);

  return (
    <>
      <NavBar />
      <MovieSlider
        title={"فیلم های در حال اکران"}
        movies={nowPlayingMovies}
        showMovieInfo={showMovieInfo}
        setShowMoviesInfo={setShowMoviesInfo}
        setSelectedMovie={setSelectedMovie}
        selectedMovie={selectedMovie}
      />
      {showMovieInfo ? <MovieInfo selectedMovie={selectedMovie} /> : null}
    </>
  );
}

export default App;
