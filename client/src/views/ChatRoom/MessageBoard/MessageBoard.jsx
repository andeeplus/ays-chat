import React, { useEffect, useRef } from 'react'
import { Box } from '@andeeplus/aplus-ui'
import Messages from '../Message'

const AlwaysScrollToBottom = () => {
  const elementRef = useRef()
  useEffect(() => {
    elementRef.current.scrollIntoView()
  })
  return <div ref={elementRef} />
}

const MessageBoard = ({ messages = [], username, ...props }) => {
  return (
    <Box
      pb="115px"
      column
      position="absolute"
      top="130px"
      css="list-style-type: none;"
      width="100%"
      justifyContent="flex-end"
      {...props}
    >
      <Box column overflowY="scroll">
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
