import React from 'react'
import GetGenres from './GetGenres';

function MovieInfo({ selectedMovie, genres }) {
  
  return (
    <div className="movie-info-container">
      <div className="movie-details">
        <h2>
          {selectedMovie.title || selectedMovie.name}{" "}
          {selectedMovie.release_date
            ? ` (${selectedMovie.release_date.slice(0, 4)})`
            : null}
        </h2>
        <h3>
          Rating: {selectedMovie.vote_average} ({selectedMovie.vote_count}{" "}
          votes)
        </h3>
        <GetGenres movie={selectedMovie} />
        <p className="mt-2">
          <b>Summary:</b> {selectedMovie.overview}
        </p>
      </div>
      <img
        className="backdrop-image"
        src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
        alt={selectedMovie.title || selectedMovie.name}
      />
    </div>
  );
}

export default MovieInfo