import React, { useEffect, useRef } from 'react'
import { Box, Icon, Button } from '@andeeplus/aplus-ui'
import ResizableTextarea from '../../components/ResizableTextArea'

const WriteMessage = ({ sendMessage, actualRoom, ...props }) => {
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
      p={3}
      css="textarea{resize:none}"
      width="100%"
      alignItems="flex-end"
      borderTop="1px solid"
      borderColor="gray.2"
      {...props}
    >
      <ResizableTextarea
        p={2}
        ref={textArea}
        boxSizing="border-box"
        value={newMessage}
        onChange={handleNewMessageChange}
        onKeyDown={handleOnKeyDown}
        placeholder={`Message #${actualRoom}`}
        fontSize="16px"
        maxWidth="calc(100% - 40px)"
      />
      <Button
        position="fixed"
        right={0}
        minWidth="40px"
        m={2}
        width="40px"
        disabled={!newMessage}
        mainColor="gray.7"
        onClick={handleSendMessage}
      >
        <Icon size={24} icon="arrowRight" fill={newMessage && 'white'} />
      </Button>
    </Box>
  )
}

export default WriteMessage
