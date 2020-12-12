import { Box } from '@andeeplus/aplus-ui'
import styled from 'styled-components'

const Layout = styled(Box)``
const Header = styled(Box).attrs({ as: 'header' })``
const Content = styled(Box).attrs({ as: 'section' })``
const Footer = styled(Box).attrs({ as: 'footer' })``

const commonProps = {
  position: 'absolute',
  width: '100%',
}

Layout.defaultProps = {
  top: 0,
  height: '100%'
}

Header.defaultProps = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  height: '130px',
  ...commonProps,
}

Content.defaultProps = {
  position: 'absolute',
  height: 'calc(100% - 230px)',
  top: '130px',
  bottom: '100px',
  overflow: 'hidden',
  overflowY: 'scroll',
  ...commonProps,
}

Footer.defaultProps = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  minHeight: '100px',
  ...commonProps,
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout
