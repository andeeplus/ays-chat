import { Box } from '@andeeplus/aplus-ui'
import styled from 'styled-components'

const Layout = styled(Box)``
const Header = styled(Box).attrs({as: 'header'})``
const Content = styled(Box).attrs({as: 'section'})``
const Footer = styled(Box).attrs({as: 'footer'})``

Layout.defaultProps = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: ['-webkit-fill-available', '100vh'],
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
