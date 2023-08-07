import { useEffect, useState } from "react";
import http from "../services/httpService";
import MovieSlider from "../components/MovieSlider";
import HeadSlider from "../components/HeadSlider";
import MovieInfo from "../components/MovieInfo";
import Spinner from "react-bootstrap/Spinner";
import MyModal from "../components/MyModal";
import ModalOnLoadPage from "../components/ModalOnLoadPage";

const Home = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [todaySeries, setTodaySeries] = useState([]);
  const [showMovieInfo, setShowMoviesInfo] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({}); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModalOnLoad, setShowModalOnLoad] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {

      const returningUser = localStorage.getItem("seenPopUp");
      setShowModalOnLoad(!returningUser);
      
      try {
        setLoading(true);
        const nowPlaying = await http.get(`/3/movie/now_playing`);
        setNowPlayingMovies(nowPlaying.data.results);

        const upcoming = await http.get(`/3/movie/upcoming`);
        setUpcomingMovies(upcoming.data.results);

        const airingToday = await http.get(`3/tv/airing_today`);
        setTodaySeries(airingToday.data.results);

        const popular = await http.get(`/3/movie/popular`);
        setPopularMovies(popular.data.results);        

        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <main className="home-wrapper">
        {error && <h1>{error}</h1>}
        <HeadSlider movies={nowPlayingMovies} />
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="warning" />
          </div>
        ) : (
          <MovieSlider
            title={"فیلم های روی پرده"}
            movies={nowPlayingMovies}
            showMovieInfo={showMovieInfo}
            setShowMoviesInfo={setShowMoviesInfo}
            setSelectedMovie={setSelectedMovie}
            selectedMovie={selectedMovie}
          />
        )}
        {showMovieInfo && nowPlayingMovies.includes(selectedMovie) ? (
          <MovieInfo selectedMovie={selectedMovie} />
        ) : null}
        <MovieSlider
          title={"به زودی"}
          movies={upcomingMovies}
          showMovieInfo={showMovieInfo}
          setShowMoviesInfo={setShowMoviesInfo}
          setSelectedMovie={setSelectedMovie}
          selectedMovie={selectedMovie}
        />
        {showMovieInfo && upcomingMovies.includes(selectedMovie) ? (
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
      </main>
      <MyModal
        modalTitle={"Attention"}
        showModal={showModalOnLoad}
        setShowModal={setShowModalOnLoad}
        modalForm={<ModalOnLoadPage setShowModal={setShowModalOnLoad}/>}
      />
    </>
  );
};

export default Home;
