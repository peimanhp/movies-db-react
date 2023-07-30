import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import { Row } from "react-bootstrap";
import {Col} from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";
import http from "../services/httpService";

function Genres() {

    const[movies, setMovies]= useState([])
    const params = useParams();
    
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const reponse = await http.get(
            `/3/discover/movie?with_genres=${params.name}`
          );
          setMovies(reponse.data.results);
        } catch (error) {
          console.log(error);
        }
      };

      fetchMovies();
    }, [params.name]);

  return (
    <Container className="mt-5">
      <Row xs={2} md={4} lg={5}>
        {movies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Genres;
