import { Box, Text } from '@andeeplus/aplus-ui'
import styled from 'styled-components'

const InnerFooter = styled(Box)`
  transition: all 0.5s ease;
`

InnerFooter.defaultProps = {
  width: 1,
  bottom: 0,
  position: 'fixed',
  zIndex: 'menu',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  shadow: 'small',
  bg: 'white',
}

const Footer = () => {
  return (
    <InnerFooter>
      <Text
        textSize="xs"
        cursor="pointer"
        behaviour="link.cta"
        href="https://github.com/andeeplus"
        title="@andeeplus - github"
      >
        made by <strong>andeeplus</strong>
      </Text>
    </InnerFooter>
  )
}

export default Footer
