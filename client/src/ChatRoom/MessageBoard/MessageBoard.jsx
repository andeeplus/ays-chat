import React, { useEffect, useRef } from 'react'

import { Box, Text } from '@andeeplus/aplus-ui'
import styled from 'styled-components'

const Message = styled(Box)`
  width: 55%;
  word-break: break-word;
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
  return message.ownedByCurrentUser || message.username === username
}

const AlwaysScrollToBottom = () => {
  const elementRef = useRef()
  useEffect(() => {
    elementRef.current.scrollIntoView()
  })
  return <div ref={elementRef} />
}

const MessageBoard = ({ messages, username, ...props }) => {
  return (
    <Box
      column
      css="list-style-type: none;"
      margin={0}
      mt={5}
      p={3}
      width="100%"
      height="calc(100vh - 240px)"
      overflow="scroll"
      borderTop="1px solid"
      borderColor="gray.2"
      {...props}
    >
      {messages.map((message, i) => (
        <Message
          alignSelf={isSameUser(message, username) ? 'flex-end' : 'flex-start'}
          justifyContent={
            isSameUser(message, username) ? 'flex-end' : 'flex-start'
          }
          key={i}
          bg={isSameUser(message, username) ? 'gray.1' : 'yellow.0'}
          borderRadius="3px"
          mb={3}
        >
          <Box column>
            <Box
              display={checkPrevMessageSameUser(messages, i) ? 'none' : 'flex'}
              alignSelf={
                isSameUser(message, username) ? 'flex-end' : 'flex-start'
              }
              px={1}
              my={1}
              borderRadius="3px"
              bg="gray.4"
              width="fit-content"
            >
              <Text textSize="xs" color="white" textTransform="uppercase">
                {message.username}
              </Text>
            </Box>
            <Text
              textAlign={isSameUser(message, username) ? 'end' : 'start'}
              textSize="sm"
            >
              {message.body}
            </Text>
          </Box>
        </Message>
      ))}
      <AlwaysScrollToBottom />
    </Box>
  )
}

export default MessageBoard
