import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import http from '../services/httpService';

function Movie() {

    const params = useParams();
    const [movie, setMovie] = useState({})
    const [error, setError] = useState(null)
    
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await http.get(`3/movie/${params.id}`);
          setMovie(response.data);
          
        } catch (error) {
          setError(error.message);
        }
      };

      fetchMovies();
    }, []);


    return (      
      <div className="movie-page" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`}}>
        <div className="movie-page-details">
          <h2>
            {movie.title || movie.name}{" "}
            {movie.release_date
              ? ` (${movie.release_date.slice(0, 4)})`
              : null}
          </h2>
          <h3>
            Rating: {movie.vote_average} ({movie.vote_count}{" "}
            votes)
          </h3>
          <p>Summary: {movie.overview}</p>
        </div>        
      </div>
    );
}

export default Movie