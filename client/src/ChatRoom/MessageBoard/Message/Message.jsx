import React, { memo, useEffect, useRef } from 'react'
import { Box, Icon, Text } from '@andeeplus/aplus-ui'
import { Message, Timestamp } from './style'
import {
  isSameUser,
  getDisplayTimestampDisplay,
  checkPrevMessageSameUser,
} from '../../utils'

const Messages = memo(({ message, username, messages, index }) => {
  const messageToRead = useRef()
  const sameUser = isSameUser(message, username)

  useEffect(() => {
    messageToRead.current = new SpeechSynthesisUtterance()
  }, [])

  const readMessage = (msg) => {
    messageToRead.current.text = msg
    window.speechSynthesis.speak(messageToRead.current)
  }

  return (
    <Box column width="100%">
      <Timestamp
        textAlign={sameUser ? 'end' : 'start'}
        display={getDisplayTimestampDisplay(messages, index)}
      >
        {message.timestamp}
      </Timestamp>
      <Message
        alignSelf={sameUser ? 'flex-end' : 'flex-start'}
        justifyContent={sameUser ? 'flex-end' : 'flex-start'}
        bg={sameUser ? 'gray.1' : 'yellow.0'}
      >
        <Box column width="100%">
          <Box
            justifyContent="space-between"
            flexDirection={sameUser ? 'row' : 'row-reverse'}
          >
            <Icon
              className="icon"
              icon="microphone"
              fill="gray.2"
              opacity={0}
              size={16}
              onClick={() => readMessage(message.body)}
            />
            <Box
              display={
                checkPrevMessageSameUser(messages, index) ? 'none' : 'flex'
              }
              alignSelf={sameUser ? 'flex-end' : 'flex-start'}
              px={1}
              my={1}
              borderRadius="3px"
              bg="gray.4"
              width="fit-content"
            >
              <Text
                mx={2}
                textSize="xs"
                color="white"
                textTransform="uppercase"
              >
                {message.username}
              </Text>
            </Box>
          </Box>
          <Text textAlign={sameUser ? 'end' : 'start'} textSize="sm">
            {message.body}
          </Text>
        </Box>
      </Message>
    </Box>
  )
})

export default Messages
