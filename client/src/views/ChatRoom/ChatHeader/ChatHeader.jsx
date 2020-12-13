import { useEffect, useState } from 'react'
import { Box, Button, Icon, InputField } from '@andeeplus/aplus-ui'
import { useSelector } from 'react-redux'
import { actualRoomSelector } from '../../../store/modules/user/selectors'
import { useHistory } from 'react-router-dom'
import ConnectedUsers from './ConnectedUser'
import { InnerChatHeader, HeadingWithEllipsis } from './styles'
import CopyUrl from './CopyUrl'
import TopicLine from './TopicLine'

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

  const handleOnKeyDownTopic = (e) => {
    if (e.key === 'Enter') requestSetTopicAndCloseTab()
  }

  const handleTopicChange = (event) => {
    setNewTopic(event.target.value)
  }

  return (
    <InnerChatHeader {...props}>
      <Box alignItems="center">
        <Button m={3} mr={0} minWidth="40px" width="40px" onClick={goToHome}>
          <Icon icon="back" size={16} fill="white" />
        </Button>
        <Box width="100%" column p={3}>
          <Box width="calc(100% - 60px)">
            <HeadingWithEllipsis title={roomName}>
              {decodeURIComponent(roomName)}
            </HeadingWithEllipsis>
            <CopyUrl roomId={actualRoom} />
          </Box>
          <TopicLine topic={topic} toggleTopicBar={toggleTopicBar} />
        </Box>
      </Box>
      <ConnectedUsers connectedUsers={connectedUsers} />
      {showTopicBar && (
        <Box p={2} alignItems="center" bg="white" shadow="small" width="100%">
          <InputField
            type="text"
            placeholder="Set new topic..."
            boxSizing="border-box"
            defaultValue={topic}
            onChange={handleTopicChange}
            onKeyDown={handleOnKeyDownTopic}
          />
          <Button m={3} onClick={requestSetTopicAndCloseTab}>
            <Icon icon="plusSign" size={10} mr={2} fill="white" />
            Topic
          </Button>
        </Box>
      )}
    </InnerChatHeader>
  )
}

export default ChatHeader
