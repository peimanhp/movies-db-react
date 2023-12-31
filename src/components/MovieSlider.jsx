import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 992 },
    items: 9,
    slidesToSlide: 9,
  },
  desktop: {
    breakpoint: { max: 992, min: 783 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 783, min: 390 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 390, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const MovieSlider = (props) => {
  const srcollRef = useRef(null);

  const handleScroll = () => {
    srcollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleShowMovieInfo = (movie) => {
    if (movie === props.selectedMovie)
      props.setShowMoviesInfo(!props.showMovieInfo);
    else props.setShowMoviesInfo(true);
    props.setSelectedMovie(movie);
  };

  return (
    <div ref={srcollRef} className="m-5">
      <h1 className="slider-title">{props.title}</h1>
      <Carousel
        rtl={true}
        itemClass={"movie-cards"}
        responsive={responsive}
        centerMode={true}
      >
        {props.movies.map((movie) => (
          <button
            onClick={() => {
              handleScroll();
              handleShowMovieInfo(movie);
            }}
            key={movie.id}
          >
            <LazyLoadImage
              className="posters"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              effect="blur"
            />
            {movie.original_title || movie.original_name}
            {movie.release_date ? ` (${movie.release_date.slice(0, 4)})` : null}
          </button>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
