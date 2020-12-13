import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@andeeplus/aplus-ui'
import useChat from '../../hooks/useChat'
import MessageInput from './MessageInput'
import MessageBoard from './MessageBoard'
import ChatHeader from './ChatHeader'
import {
  actualRoomSelector,
  usernameSelector,
} from '../../store/modules/user/selectors'
import { actions } from '../../store/modules/user/reducer'
import { useParams } from 'react-router-dom'

const ChatRoom = (props) => {
  const dispatch = useDispatch()
  const { roomId } = useParams()
  const setActualRoom = (actualRoom) =>
    dispatch(actions.setActualRoom({ actualRoom }))
  const actualRoom = useSelector(actualRoomSelector)
  const username = useSelector(usernameSelector)

  const {
    messages,
    sendMessage,
    topic,
    requestSetTopic,
    connectedUsers,
  } = useChat(roomId, username)

  useEffect(() => {
    if (!actualRoom && props.match?.params?.roomId) {
      setActualRoom({
        name: roomId,
        slug: roomId,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId])

  return (
    <Box column height="100%">
      <ChatHeader
        topic={topic}
        requestSetTopic={requestSetTopic}
        messages={messages}
        connectedUsers={connectedUsers}
        sendMessage={sendMessage}
        actualRoom={roomId}
      />
      <MessageBoard messages={messages} username={username} />
      <MessageInput sendMessage={sendMessage} actualRoom={roomId} />
    </Box>
  )
}

export default ChatRoom
