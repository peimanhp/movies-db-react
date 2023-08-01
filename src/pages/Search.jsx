import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import http from "../services/httpService";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MovieCard from "../components/MovieCard";
import { BsSearch } from "react-icons/bs";

function Search() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = async (e) => {
    navigate("/search", { replace: true });

    const searchValue = e.target.value;
    try {
      const searchResponse = await http.get(
        `3/search/multi?query=${searchValue}`
      );
      setSearchResults(searchResponse.data.results);
    } catch (error) {
      setSearchError(error.message);
    }
  };

  return (
    <>
      <Container className="search-page position-relative">
        {searchError && <h1>{searchError}</h1>}
        <Form dir="rtl" className="d-flex gap-2 mb-5">
          <Form.Control
            onChange={handleSearch}
            type="search"
            placeholder="جستجوی فیلم، سریال و سلبریتی ها"
            aria-label="Search"
            autoFocus
          />
          <Button variant="outline-warning">جستجو</Button>
        </Form>
        {searchResults.length === 0 ? (
          <BsSearch
            size="1.8em"
            fill="#222"
            className="magnifier my-auto mx-auto position-absolute top-50 start-50"
          />
        ) : (
          <Row xs={2} md={4} lg={5}>
            {searchResults.map((movie) => (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default Search;
