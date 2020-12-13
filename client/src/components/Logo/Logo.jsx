import { Icon, Heading, Box } from '@andeeplus/aplus-ui'

const Logo = (props) => (
  <Box {...props}>
    <Icon icon="shareNetwork" />
    <Heading textStyle="semibold" m={3}>
      Open Chat
    </Heading>
  </Box>
)

export default Logo
