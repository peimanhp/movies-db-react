import React from 'react'

function MovieInfo({ selectedMovie}) {
  return (
    <div
      className="movie-info-container"
      // style={{
      //   backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`,
      // }}
    >
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
        <p>Summary: {selectedMovie.overview}</p>
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