import { Box } from '@andeeplus/aplus-ui'
import styled from 'styled-components'

const Layout = styled(Box)``
const Header = styled(Box)``
const Content = styled(Box)``
const Footer = styled(Box)``

Layout.defaultProps = {
  display: 'grid',
  height: '100vh',
  maxHeight: '100vh',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr auto',
}

Header.defaultProps = {
  gridColumn: 1,
  gridRow: 1,
}

Content.defaultProps = {
  gridColumn: 1,
  gridRow: 2,
  overflowY: "scroll"
}

Footer.defaultProps = {
  gridColumn: 1,
  gridRow: 3,
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout
