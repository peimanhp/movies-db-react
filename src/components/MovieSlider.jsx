import React from "react";
import Carousel from "react-multi-carousel";
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
    items: 7,
    slidesToSlide: 7,
  },
  tablet: {
    breakpoint: { max: 783, min: 483 },
    items: 4,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 483, min: 0 },
    items: 3,
    slidesToSlide: 3,
  },
};

const MovieSlider = (props) => {
 
  return (
    <div className="movie-slider">
      <h1 className="slider-title">{props.title}</h1>
      <Carousel rtl={true} itemClass={"movie-cards"} responsive={responsive}>
        {props.movies.map((m) => (
          <div key={m.id}>
            <img
              className="posters"
              src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
              alt={m.title}
            />
            {m.title}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
