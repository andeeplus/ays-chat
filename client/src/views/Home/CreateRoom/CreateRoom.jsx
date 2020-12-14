import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Button,
  InputField,
  Box,
  InputLabel,
  Icon,
  Text,
} from '@andeeplus/aplus-ui'
import { useSelector, useDispatch } from 'react-redux'
import { usernameSelector } from '../../../store/modules/user/selectors'
import { actions } from '../../../store/modules/user/reducer'

const CreateRoom = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const username = useSelector(usernameSelector)
  const [newRoom, setNewRoom] = useState()
  const [newUsername, setNewUsername] = useState(username)
  const setUsername = (username) => dispatch(actions.setUsername({ username }))
  const setActualRoom = (actualRoom) =>
    dispatch(actions.setActualRoom({ actualRoom }))

  const handleRoomNameChange = (event) => {
    setNewRoom(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value)
  }

  const pushToNewRoom = (href) => history.push(href)

  const saveDataAndRedirect = () => {
    const room = encodeURI(newRoom)
    setUsername(newUsername)
    setActualRoom(room)
    pushToNewRoom(room)
  }

  const handleOnKeyDownRoom = (e) => {
    if (e.key === 'Enter' && username) saveDataAndRedirect()
  }

  const handleOnKeyDownUsername = (e) => {
    if (e.key === 'Enter') saveDataAndRedirect()
  }

  return (
    <Box
      px={[2, 3]}
      py={3}
      bg="white"
      width={1}
      border="1px solid"
      borderColor="gray.2"
      borderRadius="3px"
      alignItems="flex-end"
      justifyContent="space-between"
      {...props}
    >
      <Box>
        <Box mr={[1, 3]} column>
          <InputLabel>Room</InputLabel>
          <InputField
            type="text"
            placeholder="Room"
            defaultValue={newRoom}
            boxSizing="border-box"
            onChange={handleRoomNameChange}
            onKeyDown={handleOnKeyDownRoom}
          />
        </Box>
        <Box mx={[1, 2]} column>
          <InputLabel>Username</InputLabel>
          <InputField
            type="text"
            placeholder="Username"
            defaultValue={newUsername}
            boxSizing="border-box"
            onChange={handleUsernameChange}
            onKeyDown={handleOnKeyDownUsername}
          />
        </Box>
      </Box>
      <Button
        m={2}
        mb="2px"
        minWidth={['40px', 'auto']}
        disabled={!newUsername || !newRoom}
        onClick={saveDataAndRedirect}
        alignItems="center"
      >
        <Icon icon="plusSign" size={10} mr={[0, 2]} fill="white" />
        <Text textSize="sm" display={['none', 'block']}>
          Create Room
        </Text>
      </Button>
    </Box>
  )
}

export default CreateRoom
