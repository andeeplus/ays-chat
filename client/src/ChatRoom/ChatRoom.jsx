import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useChat from '../useChat'
import { Box } from '@andeeplus/aplus-ui'
import MessageInput from './MessageInput'
import MessageBoard from './MessageBoard'
import ChatHeader from './ChatHeader'
import {
  actualRoomSelector,
  usernameSelector,
} from '../store/modules/user/selectors'
import { actions } from '../store/modules/user/reducer'

const ChatRoom = (props) => {
  const dispatch = useDispatch()
  const setUsername = (username) => dispatch(actions.setUsername({ username }))
  const setActualRoom = (actualRoom) =>
    dispatch(actions.setActualRoom({ actualRoom }))
  const actualRoom = useSelector(actualRoomSelector)
  const storedUsername = useSelector(usernameSelector)

  const username = props.location.search.split('?username=')[1]
  const { messages, sendMessage, connectedUsers } = useChat(
    props.match.params.roomId,
    username,
  )

  useEffect(() => {
    if (!actualRoom && props.match?.params?.roomId) {
      setActualRoom(props.match.params.roomId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.roomId])

  useEffect(() => {
    if (!storedUsername) {
      setUsername(username)
    }
  }, [username])

  return (
    <Box column>
      <ChatHeader
        messages={messages}
        connectedUsers={connectedUsers}
        roomId={props.match.params.roomId}
      />
      <MessageBoard messages={messages} username={username} />
      <MessageInput sendMessage={sendMessage} />
    </Box>
  )
}

export default ChatRoom
