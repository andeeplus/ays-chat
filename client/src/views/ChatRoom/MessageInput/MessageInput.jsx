import React, { useEffect, useRef } from 'react'
import { Box, Icon, Button } from '@andeeplus/aplus-ui'
import ResizableTextarea from '../../../components/ResizableTextArea'
import useDeviceDetect from '../../../hooks/useDeviceDetect'

const WriteMessage = ({ sendMessage, actualRoom, ...props }) => {
  const [newMessage, setNewMessage] = React.useState('')
  const { isMobile } = useDeviceDetect()
  const textArea = useRef()

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleSendMessage = () => {
    sendMessage(newMessage)
    setNewMessage('')
  }

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter' && newMessage.trim() !== '') {
      handleSendMessage()
    }
  }

  useEffect(() => {
    if (textArea.current && !isMobile) {
      textArea.current.focus()
    }
  }, [isMobile])

  return (
    <Box
      p={3}
      zIndex={1}
      bg="white"
      position="fixed"
      bottom={0}
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
        minWidth="40px"
        ml={2}
        width="40px"
        disabled={!newMessage}
        onClick={handleSendMessage}
      >
        <Icon size={20} icon="arrowRight" fill={newMessage && 'white'} />
      </Button>
    </Box>
  )
}

export default WriteMessage
