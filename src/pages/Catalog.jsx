import { useState, useEffect } from "react";
import Container from "../components/Container";
import Text from "../components/Text";
import { getMovies } from "../utils/api";
import MovieGrid from "../layout/MovieGrid";

function Catalog() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    getMovies("batman")
      .then((data) => setMovies(data))
      .catch((err) => {
        setError("No se pudieron cargar las peliculas.");
        console.error(err);
      });
  }, []);

  return (
    <Container as="main" className="catalog">

      <Text as="h2">Catálogo de Películas</Text>

      {error && <Text as="p" className="catalog__error">{error}</Text>}

      <MovieGrid movies={movies} />
    </Container>
  );
}

export default Catalog;
