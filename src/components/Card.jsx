
import Box from './Box'
import Text from './Text'

function Card({
    image,
    title,
    year,
    type,

}) {
  return (
    <Box className="card">

        <Box as="img" src={image} alt={title} className="card__image"/>

        <Box className="card__content">
            <Text as="h3" className="card__title">{title}</Text>

            <Text as="p" className="card__year">{year}</Text>
            <Text as="p" className="card__type">{type}</Text>

        </Box>

    </Box>
  )
}

export default Card