import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../services/httpService";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [similar, setSimilar] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await http.get(`3/movie/${params.id}`);
        setMovie(response.data);

        const similarResponse = await http.get(`3/movie/${params.id}/similar`);
        setSimilar(similarResponse.data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, [params.id]);
  
  return (
    <div
      className="movie-page"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
      }}
    >
      <Container>
        <br />
        <div className="movie-page-details p-5 rounded-4 mb-5">
          <h2>
            {movie.title || movie.name}{" "}
            {movie.release_date ? ` (${movie.release_date.slice(0, 4)})` : null}
          </h2>
          <h3>
            Rating: {movie.vote_average} ({movie.vote_count} votes)
          </h3>
          <p>
            <b>Summary:</b> {movie.overview}
          </p>
        </div>
        <h2 className="bg-dark p-2 text-center rounded-4">عناوین مشابه</h2>
        <Row xs={2} md={3} lg={6}>
          {similar.slice(0, 6).map((similarMovie) => (
            <Col key={similarMovie.id}>
              <MovieCard movie={similarMovie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movie;
