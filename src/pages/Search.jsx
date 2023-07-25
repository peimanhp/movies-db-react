import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import http from "../services/httpService";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
      <Container>
        {searchError && <h1>{searchError}</h1>}
        <Form dir="rtl" className="d-flex gap-2 mb-5">
          <Form.Control
            onChange={handleSearch}
            type="search"
            placeholder="جستجو"
            aria-label="Search"
            autoFocus
          />
          <Button variant="outline-warning">جستجو</Button>
        </Form>

        <Row xs={2} md={4} lg={6}>
          {searchResults.map((movie) => (
            <Col>
              <Card key={movie.id} className="mb-4">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>
                    {movie.original_title || movie.original_name}
                    {movie.release_date
                      ? ` (${movie.release_date.slice(0, 4)})`
                      : null}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Search;
