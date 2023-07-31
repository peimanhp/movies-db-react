import React , {useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
// import http from "../services/httpService";

function HeadSlider({ movies }) {
    // const [moviesBanner, setMoviesBanner] = useState([]);
    const navigate = useNavigate();


//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//          const paths = movies.map((movie) => `/3/movie/${movie.id}/images`);
//           const backdrops = []
//         for (const path of paths) {
//             const result = await http.get(path)
//             backdrops.push(result.data)
//         }  
//         setMoviesBanner(backdrops);       
        
//     } catch (error) {
//         console.log(error);
//     }
// };
// fetchImages();
//   }, []);
    
    const handleShowMovieInfo = (movie) => {
      navigate(`/search/${movie.id}`, { replace: false });
    };


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 992 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 992, min: 783 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 783, min: 483 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 483, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel rtl={true} itemClass={"header-banner"} responsive={responsive}>
      {movies.map((movie) => (
        <button
          onClick={() => {
            handleShowMovieInfo(movie);
          }}
          key={movie.id}
        >
          <LazyLoadImage
            className="posters"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}                 
            alt={movie.title}
            effect="blur"
          />
          {movie.original_title || movie.original_name}
          {movie.release_date ? ` (${movie.release_date.slice(0, 4)})` : null}
        </button>
      ))}
    </Carousel>
  );
}

export default HeadSlider;
