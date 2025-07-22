import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getMovieById } from "../utils/api";
import Container from "../components/Container";
import Box from "../components/Box";
import Text from "../components/Text";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  //  se ejecuta cuando el componente se monta o cambia el ID
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieById(id);
        setMovie(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie(); // función cuando se monta el componente
  }, [id]); // se ejecuta si cambia el id

  if (loading) {
    return <Box className="movie-detail__status">Cargando película...</Box>;
  }

  if (error) {
    return <Box className="movie-detail__status">Error: {error}</Box>;
  }

  return (
    <Container as="main" className="movie-detail">
      <Box className="movie-detail__content">
        <Box
          as="img"
          src={movie.Poster}
          alt="póster"
          className="movie-detail__poster"
        />
        <Box className="movie-detail__info">
          <Text as="p"><strong>Año:</strong> {movie.Year}</Text>
          <Text as="p"><strong>Estreno:</strong> {movie.Released}</Text>
          <Text as="p"><strong>Duración:</strong> {movie.Runtime}</Text>
          <Text as="p"><strong>Género:</strong> {movie.Genre}</Text>
          <Text as="p"><strong>Director:</strong> {movie.Director}</Text>
          <Text as="p"><strong>Escritor:</strong> {movie.Writer}</Text>
          <Text as="p"><strong>Actores:</strong> {movie.Actors}</Text>
          <Text as="p"><strong>Idioma:</strong> {movie.Language}</Text>
          <Text as="p"><strong>País:</strong> {movie.Country}</Text>
          <Text as="p"><strong>Clasificación:</strong> {movie.Rated}</Text>
          <Text as="p"><strong>Premios:</strong> {movie.Awards}</Text>
          <Text as="p"><strong>Taquilla:</strong> {movie.BoxOffice}</Text>
          <Text as="p"><strong>IMDb:</strong> {movie.imdbRating} / 10</Text>
          <Text as="p"><strong>Metascore:</strong> {movie.Metascore}</Text>
          <Text as="p"><strong>Tipo:</strong> {movie.Type}</Text>
          <Text as="p"><strong>Sinopsis:</strong> {movie.Plot}</Text>
        </Box>
      </Box>
      <button onClick={() => navigate(-1)} className="movie-detail__back">
        Volver al catálogo
      </button>
    </Container>
  );
};

export default MovieDetail;
