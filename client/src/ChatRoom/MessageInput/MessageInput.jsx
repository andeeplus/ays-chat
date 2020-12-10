import React from 'react'
import { Box, TextArea, ActionButton } from '@andeeplus/aplus-ui'

const WriteMessage = ({ sendMessage }) => {
  const [newMessage, setNewMessage] = React.useState('')

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleSendMessage = () => {
    sendMessage(newMessage)
    setNewMessage('')
  }

  return (
    <Box
      height="80px"
      m={3}
      css="textarea{resize:none}"
      position="fixed"
      bottom={0}
      width="-webkit-fill-available"
    >
      <TextArea
        p={2}
        boxSizing="border-box"
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        fontSize="16px"
      />
      <ActionButton
        type="arrowRight"
        size={20}
        position="absolute"
        disabled={!newMessage}
        bottom={0}
        right={0}
        m={2}
        onClick={handleSendMessage}
      >
        Send
      </ActionButton>
    </Box>
  )
}

export default WriteMessage
