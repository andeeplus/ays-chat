import React, { useEffect, useRef } from 'react'
import { Box } from '@andeeplus/aplus-ui'
import Messages from './Message'

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
      width="100%"
      height="calc(100vh - 240px)"
      borderTop="1px solid"
      borderColor="gray.2"
      {...props}
    >
      <Box width="100%" column overflowY="scroll">
        {messages.map((message, i) => (
          <Messages
            key={i}
            messages={messages}
            message={message}
            username={username}
            index={i}
          />
        ))}
      </Box>
      <AlwaysScrollToBottom />
    </Box>
  )
}

export default MessageBoard
