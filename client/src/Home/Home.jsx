import React from 'react'
import { Box } from '@andeeplus/aplus-ui'
import LoginBox from './LoginBox'

const Home = () => {
  return (
    <Box
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <LoginBox />
    </Box>
  )
}

export default Home
