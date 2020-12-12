import styled from 'styled-components'
import { Box, Text } from '@andeeplus/aplus-ui'

const Message = styled(Box)`
  word-break: break-word;
  transition: all 0.5s ease;
  &:hover {
    .icon {
      opacity: 1;
    }
  }
`

Message.defaultProps = {
  p: 1,
  width: '55%',
  borderRadius: '3px',
  mb: 3,
  mt: 3,
  mx: 2,
}

const Timestamp = styled(Text)``

Timestamp.defaultProps = {
  fontSize: '10px',
  color: 'gray.4',
  textTransform: 'uppercase',
  mb: 1,
  mt: 2,
  mx: 3,
}

export { Message, Timestamp }
