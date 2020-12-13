import { Box, Icon, Text } from '@andeeplus/aplus-ui'

const TopicLine = ({ toggleTopicBar, topic }) => {
  return (
    <Box cursor="pointer" onClick={toggleTopicBar} alignItems="center">
      {topic ? (
        <Text textSize="sm">{topic}</Text>
      ) : (
        <Text textSize="sm">Set Topic</Text>
      )}
      <Box alignItems="center" ml={2}>
        <Icon icon="pencil" size={12} fill="gray.4" />
      </Box>
    </Box>
  )
}

export default TopicLine
