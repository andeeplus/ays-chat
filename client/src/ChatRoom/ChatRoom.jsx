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
import Layout from './Layout'

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
    <Layout>
      <Layout.Header>
        <ChatHeader
          messages={messages}
          connectedUsers={connectedUsers}
          sendMessage={sendMessage}
          actualRoom={props.match.params.roomId}
        />
      </Layout.Header>
      <Layout.Content column justifyContent="flex-end">
        <MessageBoard messages={messages} username={username} />
      </Layout.Content>
      <Layout.Footer>
        <MessageInput
          sendMessage={sendMessage}
          actualRoom={props.match.params.roomId}
        />
      </Layout.Footer>
    </Layout>
  )
}

export default ChatRoom
