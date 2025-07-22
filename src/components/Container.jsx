
import Box from './Box'

function Container({className = "", ...props}) {
  return (
    <Box {...props} className = {className} />
  )
}

export default Container