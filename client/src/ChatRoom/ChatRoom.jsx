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
    <Box maxHeight="100vh">
      <Box
        width="100vw"
        display="grid"
        gridTemplateColumns="1fr"
        gridTemplateRows="auto 1fr auto"
        gridTemplateAreas="'header' 'main' 'footer'"
      >
        <ChatHeader
          gridArea="header"
          messages={messages}
          connectedUsers={connectedUsers}
          roomId={props.match.params.roomId}
          borderBottom="1px solid"
          borderColor="gray.2"
        />
        <Box
          p={2}
          gridArea="main"
          height="calc(100vh - 224px);"
          overflow="auto"
        >
          <MessageBoard
            column
            css="list-style-type: none;"
            width="100%"
            messages={messages}
            username={username}
          />
        </Box>
        <MessageInput gridArea="footer" sendMessage={sendMessage} />
      </Box>
    </Box>
  )
}

export default ChatRoom
