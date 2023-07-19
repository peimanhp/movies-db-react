import React from 'react'

function MovieInfo({ selectedMovie}) {
  return (
    <div
      className="movie-info-container"
      // style={{
      //   backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`,
      // }}
    >
      <div className='movie-info-texts'>
        <div className="movie-details">
          <h2>{selectedMovie.title}</h2>
          <br />
          <h3>
            Rating: {selectedMovie.vote_average} ({selectedMovie.vote_count}{" "}
            votes)
          </h3>
          <br />
          <p>Summary: {selectedMovie.overview}</p>
        </div>
      </div>
      <img className='backdrop-image' src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}/>
    </div>
  );
}

export default MovieInfo