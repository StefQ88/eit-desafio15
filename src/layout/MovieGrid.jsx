import { Link } from "react-router-dom";
import Box from "../components/Box";

import Card from "../components/Card";

function MovieGrid({ movies }) {
  return (
    <Box className="movie-grid grid">
      {movies.map((movie) => (
        <Box
          key={movie.imdbID}
          className="movie-grid__item col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12"
        >
          <Link to={`/movie/${movie.imdbID}`}>
            <Card
              title={movie.Title}
              year={movie.Year}
              image={movie.Poster}
              type={movie.Type}
            />
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default MovieGrid;
