import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../services/httpService";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [similar, setSimilar] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleShowMovieInfo = (movie) => {
    console.log("clicked");
    navigate(`/search/${movie.id}`, { replace: false });
  };

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
          <p>Summary: {movie.overview}</p>
        </div>
        <h2 className="bg-dark p-2 text-center rounded-4">Similar Movies</h2>
        <Row xs={2} md={3} lg={6}>
          {Object.entries(similar)
            .slice(0, 6)
            .map((similarMovie) => (
              <Col key={similarMovie[1].id}>
                <button
                  onClick={() => handleShowMovieInfo(similarMovie[1])}
                  className="border-0"
                >
                  <Card className="mb-4 bg-dark">
                    <Card.Img
                      as={LazyLoadImage}
                      variant="top"
                      src={`https://image.tmdb.org/t/p/original${similarMovie[1].poster_path}`}
                    />
                    <Card.Body className="text-bg-dark">
                      <Card.Title className="text-bg-dark fs-6">
                        {similarMovie[1].original_title ||
                          similarMovie[1].original_name}
                        {similarMovie[1].release_date
                          ? ` (${similarMovie[1].release_date.slice(0, 4)})`
                          : null}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </button>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movie;
