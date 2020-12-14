import React from 'react'
import { Box, Text, Heading } from '@andeeplus/aplus-ui'

const EmptyRoomsView = () => {
  return (
    <Box
      column
      borderRadius="3px"
      m={[3, 4, 8]}
      p={[3, 4, 8]}
      bg="gray.0"
      justifyContent="center"
      alignItems="center"
    >
      <Heading mb={3}>Welcome!</Heading>
      <Text textSize="lg" textAlign="center">
        Seems you don't have any room saved, Create one!*
      </Text>
      <Text textAlign="center" textSize="xs" mt={6}>
        *This chat do not make use of any database. Once all the user get out of
        the room the conversation will be destroyed.
        <br />
        Rooms are saved in your browser storage until you choose to clean it up.
        it.
      </Text>
    </Box>
  )
}

export default EmptyRoomsView
