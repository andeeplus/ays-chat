import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Box, Icon, Text } from '@andeeplus/aplus-ui'

const Message = styled(Box)`
  width: 55%;
  word-break: break-word;
  transition: all 0.5s ease;
  &:hover {
    .icon {
      opacity: 1;
    }
  }
`

Message.defaultProps = {
  p: 1,
  width: '55%',
  borderRadius: '3px',
}

const checkPrevMessageSameUser = (messages, i) => {
  return messages[i - 1] && messages[i - 1].username === messages[i].username
}

const isSameUser = (message, username) => {
  console.log(
    message,
    message.ownedByCurrentUser || message.username === username,
  )
  return message.ownedByCurrentUser || message.username === username
}

const getDisplayTimestamp = (messages, i) => {
  if (messages[i - 1]) {
    const [prevH, prevM, prevS] = messages[i - 1].timestamp.split(':')
    const [h, m, s] = messages[i - 1].timestamp.split(':')
    const isSameMinute = prevH === h && prevM === m
    console.log(prevH, h, prevM, m, isSameMinute)
    return isSameMinute ? 'none' : 'block'
  }
  return 'block'
}

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
    <>
      <Text
        textAlign={sameUser ? 'end' : 'start'}
        display={getDisplayTimestamp(messages, index)}
        fontSize="10px"
        color="gray.4"
        textTransform="uppercase"
        mb={1}
        mt={2}
        mx={3}
      >
        {message.timestamp}
      </Text>
      <Message
        alignSelf={sameUser ? 'flex-end' : 'flex-start'}
        justifyContent={sameUser ? 'flex-end' : 'flex-start'}
        bg={sameUser ? 'gray.1' : 'yellow.0'}
        borderRadius="3px"
        mb={3}
        mx={3}
        mb={2}
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
    </>
  )
})

export default Messages
