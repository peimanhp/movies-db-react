import NavBar from "./components/NavBar";
import MovieSlider from "./components/MovieSlider";
import { useEffect, useState } from "react";
import http from "./services/httpService";
import "./index.css";

function App() {
  const [nowPlayingmovies, setNowPlayingMovies] = useState([]);

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
      <MovieSlider title={'فیلم های در حال اکران'} movies={nowPlayingmovies} />
    </>
  );
}

export default App;
