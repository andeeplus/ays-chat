import React from 'react'
import { Box, Heading, Text } from '@andeeplus/aplus-ui'

const ChatHeader = ({ connectedUsers, roomId }) => {
  return (
    <Box column height={['100px']} bg="white">
      <Heading m={3}>Room: {roomId}</Heading>
      <Box column mx={3} alignItems="flex-start">
        <Text textSize="xs" mr={1}>
          Connected users:{' '}
        </Text>
        <Box>
          {connectedUsers.map((connected) => (
            <Box
              key={connected.socketId}
              px={1}
              my={1}
              mr={1}
              borderRadius="3px"
              bg="gray.7"
              width="fit-content"
            >
              <Text textSize="xs" textTransform="uppercase" color="white">
                {connected.username}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ChatHeader
