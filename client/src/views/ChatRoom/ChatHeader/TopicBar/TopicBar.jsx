import { useState } from 'react'
import { Box, Button, Text, Icon, InputField } from '@andeeplus/aplus-ui'

const TopicBar = ({ topic, newTopic, setNewTopic, onSubmit, ...props }) => {
  const handleOnKeyDownTopic = (e) => {
    if (e.key === 'Enter') onSubmit()
  }

  const handleTopicChange = (event) => {
    setNewTopic(event.target.value.trimStart())
  }

  return (
    <Box
      p={2}
      alignItems="center"
      bg="white"
      shadow="small"
      width="100%"
      borderTop="1px solid"
      borderTopColor="gray.2"
      {...props}
    >
      <InputField
        type="text"
        placeholder="Set new topic..."
        boxSizing="border-box"
        defaultValue={topic}
        onChange={handleTopicChange}
        onKeyDown={handleOnKeyDownTopic}
      />
      <Button
        m={2}
        minWidth={['40px', 'auto']}
        disabled={!newTopic}
        onClick={onSubmit}
      >
        <Icon icon="plusSign" size={10} mr={[0, 2]} fill="white" />
        <Text display={['none', 'block']}>Topic</Text>
      </Button>
    </Box>
  )
}

export default TopicBar
