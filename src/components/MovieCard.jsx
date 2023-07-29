import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Card } from 'react-bootstrap';

function MovieCard({movie}) {

    const navigate = useNavigate();

    const handleShowMovieInfo = (movie) => {
      navigate(`/search/${movie.id}`, { replace: false });
    };

  return (
    <button
      onClick={() => handleShowMovieInfo(movie)}
      className="border-0"
    >
      <Card className="mb-4 bg-dark">
        <Card.Img
          as={LazyLoadImage}
          variant="top"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
        <Card.Body className="text-bg-dark">
          <Card.Title className="text-bg-dark fs-6">
            {movie.original_title || movie.original_name}
            {movie.release_date
              ? ` (${movie.release_date.slice(0, 4)})`
              : null}
          </Card.Title>
        </Card.Body>
      </Card>
    </button>
  );
}

export default MovieCard