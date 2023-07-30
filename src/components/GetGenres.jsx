import React, {useEffect, useState} from "react";
import http from "../services/httpService";
import { Link } from "react-router-dom";

function GetGenres({movie}) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await http.get(`/3/genre/movie/list`);
        setGenres(response.data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="d-flex">
      <b>Genres:</b>
      {genres.map((genre) =>
        movie.genre_ids.map((g) =>
          genre.id === g ? (
            <Link
              key={genre.id}
              to={`/genres/${genre.name}`}
              className="mx-1 link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              {genre.name}
            </Link>
          ) : null
        )
      )}
    </div>
  );
}

export default GetGenres;
