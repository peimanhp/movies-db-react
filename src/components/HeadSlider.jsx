import React , {useState, useEffect} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function HeadSlider({ movies }) {    
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

    
    const handleShowMovieInfo = (movie) => {
      navigate(`/search/${movie.id}`, { replace: false });
  };  

  return (
    <Carousel fade dir="rtl">
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <button
            onClick={() => {
              handleShowMovieInfo(movie);
            }}
          >
            <LazyLoadImage
              text="First slide"
              className="head-slide"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              effect="blur"
              height={screenSize.width > 900 ? "600px" : null}
            />
          </button>
          <Carousel.Caption className="d-flex justify-content-center">
            <h3 className="fs-1 silde-title">
              {movie.original_title}
              {movie.release_date
                ? ` (${movie.release_date.slice(0, 4)})`
                : null}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeadSlider;
