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

const MessageBoard = ({ messages, username, ...props }) => {
  return (
    <Box width="100%" {...props}>
      {messages.map((message, i) => (
        <Messages
          key={i}
          messages={messages}
          message={message}
          username={username}
          index={i}
        />
      ))}
      <AlwaysScrollToBottom />
    </Box>
  )
}

export default MessageBoard
