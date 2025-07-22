import Container from "../components/Container";
import Text from "../components/Text";
import { useNavigate } from "react-router";

function Home() {


  const navigate = useNavigate()

  const handleGoToCatalog = () => {
    navigate("/catalog")
  }


  return (
    <Container as="main" className="home">
      <div className="home__content">

        <Text as="h1">
          Bienvenido a CineStream
        </Text>

        <Text as="p" >
          Descubrí miles de películas. Buscá, explorá y conocé más detalles
          sobre tus títulos favoritos.
        </Text>

        <button className="home__button" onClick={handleGoToCatalog}>
          Explorar catálogo
        </button>
      </div>
    </Container>
  );
}

export default Home;
