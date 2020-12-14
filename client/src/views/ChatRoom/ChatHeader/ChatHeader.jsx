import { useState } from 'react'
import { Box, Button, Icon } from '@andeeplus/aplus-ui'
import { useSelector } from 'react-redux'
import { actualRoomSelector } from '../../../store/modules/user/selectors'
import { useHistory } from 'react-router-dom'
import ConnectedUsers from './ConnectedUser'
import { InnerChatHeader, HeadingWithEllipsis } from './styles'
import CopyUrl from './CopyUrl'
import TopicLine from './TopicLine'
import TopicBar from './TopicBar'

const ChatHeader = ({ connectedUsers, topic, requestSetTopic, ...props }) => {
  const actualRoom = useSelector(actualRoomSelector)
  const [showTopicBar, setShowTopicBar] = useState(false)
  const [newTopic, setNewTopic] = useState()
  let history = useHistory()
  const goToHome = () => history.push('/')

  const toggleTopicBar = () => setShowTopicBar((show) => !show)

  const roomName = decodeURIComponent(actualRoom)

  const requestSetTopicAndCloseTab = () => {
    if (newTopic) requestSetTopic({ topic: newTopic })
    toggleTopicBar()
  }

  return (
    <>
      <InnerChatHeader {...props}>
        <Box
          height="80px"
          alignItems="center"
          borderBottom="1px solid"
          borderBottomColor="gray.2"
        >
          <Button mx={3} mr={0} minWidth="40px" width="40px" onClick={goToHome}>
            <Icon icon="back" size={16} fill="white" />
          </Button>
          <Box width="100%" column p={3}>
            <Box>
              <Box width="calc(100% - 30px)">
                <HeadingWithEllipsis title={roomName} textSize={['sm', 'md']}>
                  {decodeURIComponent(roomName)}
                </HeadingWithEllipsis>
              </Box>
              <CopyUrl roomId={actualRoom} />
            </Box>
            <TopicLine topic={topic} toggleTopicBar={toggleTopicBar} />
          </Box>
        </Box>
        <ConnectedUsers connectedUsers={connectedUsers} />
        {showTopicBar && (
          <TopicBar
            topic={topic}
            newTopic={newTopic}
            setNewTopic={setNewTopic}
            onSubmit={requestSetTopicAndCloseTab}
          />
        )}
      </InnerChatHeader>
    </>
  )
}

export default ChatHeader
