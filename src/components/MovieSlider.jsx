import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 992 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 992, min: 768 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 768, min: 576 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 4,
  },
};

const MovieSlider = (props) => {
 
  return (
    <Carousel responsive={responsive}>
      {props.movies.map((m) => (
        <div key={m.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
            alt={m.title}
          />
          {m.title}
        </div>
      ))}
    </Carousel>
  );
};

export default MovieSlider;
