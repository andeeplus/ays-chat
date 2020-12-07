import React from 'react'
import useChat from '../useChat'
import { Box } from '@andeeplus/aplus-ui'
import MessageInput from './MessageInput'
import MessageBoard from './MessageBoard'
import ChatHeader from './ChatHeader'

const ChatRoom = (props) => {
  const { roomId } = props.match.params
  const username = props.location.search.split('?username=')[1]
  const { messages, sendMessage, connectedUsers } = useChat(roomId, username)

  return (
    <Box column maxHeight="100vh">
      <ChatHeader connectedUsers={connectedUsers} roomId={roomId} />
      <MessageBoard messages={messages} username={username} />
      <MessageInput sendMessage={sendMessage} />
    </Box>
  )
}

export default ChatRoom
