import React, { useEffect, useRef } from 'react'
import { Box } from '@andeeplus/aplus-ui'
import Messages from '../Message'
import useViewport from '../../../hooks/useViewPort'

const AlwaysScrollToBottom = () => {
  const elementRef = useRef()
  useEffect(() => {
    elementRef.current.scrollIntoView()
  })
  return <Box ref={elementRef} />
}

const MessageBoard = ({ messages = [], username, ...props }) => {
  const { vh } = useViewport()
  const height = `${vh - 73 - 130}px`

  return (
    <Box
      display="block"
      position="relative"
      top="130px"
      css="list-style-type: none;"
      width="100%"
      justifyContent="flex-end"
      {...props}
    >
      <Box column width="100%" height={height} justifyContent="flex-end">
        <Box overflow="scroll" column>
          {messages.map((message, i) => (
            <Messages
              height="fit-content"
              flexShrink={0}
              key={i}
              messages={messages}
              message={message}
              username={username}
              index={i}
              pb={messages.length === i + 1 && '32px'}
            />
          ))}
          <AlwaysScrollToBottom />
        </Box>
      </Box>
    </Box>
  )
}

export default MessageBoard
