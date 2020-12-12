import React from 'react'
import { Box, Heading, Text } from '@andeeplus/aplus-ui'
import { useSelector } from 'react-redux'
import { actualRoomSelector } from '../../store/modules/user/selectors'

const ChatHeader = ({ connectedUsers, ...props }) => {
  const actualRoom = useSelector(actualRoomSelector)
  return (
    <Box
      p={3}
      zIndex={1}
      bg="white"
      position="sticky"
      top={0}
      width="100%"
      height="115px"
      borderBottom="1px solid"
      borderColor="gray.2"
      column
      {...props}
    >
      <Heading>Room: {actualRoom}</Heading>
      <Box column alignItems="flex-start" minHeight="54px">
        <Text textSize="xs" mr={1}>
          Connected users:
        </Text>
        <Box>
          {connectedUsers.map((connected) => (
            <Box
              key={connected.socketId}
              px={1}
              my={1}
              mr={1}
              borderRadius="3px"
              width="fit-content"
              alignItems="center"
              border="1px solid"
              borderColor="gray.7"
            >
              <Box
                bg="green.4"
                p={1}
                borderRadius="50%"
                border="1px solid"
                borderColor="green.6"
              />
              <Text textSize="xs" textTransform="uppercase" px={1} py={1}>
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
