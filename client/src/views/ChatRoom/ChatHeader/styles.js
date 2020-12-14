import { Box, Heading } from '@andeeplus/aplus-ui'
import styled from 'styled-components'

const InnerChatHeader = styled(Box)``

InnerChatHeader.defaultProps = {
  zIndex: 99,
  bg: 'white',
  position: 'fixed',
  top: 0,
  width: '100%',
  borderBottom: '1px solid',
  borderColor: 'gray.2',
  zIndex:1,
  column: true,
}

const HeadingWithEllipsis = styled(Heading)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export { InnerChatHeader, HeadingWithEllipsis }
