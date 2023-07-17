import NavBar from "./components/NavBar";
import MovieSlider from "./components/MovieSlider";
import { useEffect, useState } from "react";
import http from "./services/httpService";
import "./index.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await http.get(`/3/movie/now_playing`);
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <NavBar />
      <MovieSlider />
    </>
  );
}

export default App;
