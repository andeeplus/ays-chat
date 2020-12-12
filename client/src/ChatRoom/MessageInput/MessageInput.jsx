import React, { useEffect, useRef } from 'react'
import { Box, TextArea, Icon, Button } from '@andeeplus/aplus-ui'
import ResizableTextarea from '../../components/ResizableTextArea'

const WriteMessage = ({ sendMessage }) => {
  const [newMessage, setNewMessage] = React.useState('')
  const textArea = useRef()

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleSendMessage = () => {
    sendMessage(newMessage)
    setNewMessage('')
  }

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  useEffect(() => {
    if (textArea.current) {
      textArea.current.focus()
    }
  }, [])

  return (
    <Box
      minHeight="60px"
      p={3}
      css="textarea{resize:none}"
      position="fixed"
      bottom={0}
      width="-webkit-fill-available"
      bg="white"
    >
      <ResizableTextarea
        p={2}
        ref={textArea}
        boxSizing="border-box"
        value={newMessage}
        onChange={handleNewMessageChange}
        onKeyDown={handleOnKeyDown}
        placeholder="Write message..."
        fontSize="16px"
      />
      <Button
        minWidth="40px"
        width="40px"
        disabled={!newMessage}
        m={2}
        mainColor="gray.3"
        onClick={handleSendMessage}
      >
        <Icon size={24} icon="arrowRight" fill={newMessage && 'white'} />
      </Button>
    </Box>
  )
}

export default WriteMessage
