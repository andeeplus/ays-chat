import React from 'react'
import { Box, Icon, Text } from '@andeeplus/aplus-ui'

const ConnectedUsers = ({ connectedUsers }) => {
  return (
    <Box
      bg="white"
      p={2}
      px={3}
      shadow="small"
      flexWrap="wrap"
      width="100%"
      height="48px"
      justifyContent="space-between"
    >
      <Box>
        {connectedUsers.map((connected, i) => (
          <Box
            maxHeight="32px"
            key={connected.username + i}
            alignItems="center"
            border="1px solid"
            borderColor="gray.2"
            borderRadius="3px"
            px={1}
            mr={1}
          >
            <Box
              bg="green.4"
              height="8px"
              width="8px"
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
      <Icon icon="people" mr={2} />
    </Box>
  )
}

export default ConnectedUsers
