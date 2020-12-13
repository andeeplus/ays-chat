import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  InputLabel,
  Box,
  InputField,
  Button,
  Heading,
  Text,
} from '@andeeplus/aplus-ui'
import { actions } from '../../store/modules/user/reducer'
import Logo from '../../components/Logo'

const RegisterNewUser = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { roomId } = useParams()
  const { search } = useLocation()
  const invitedby = search.split('?by=')[1]
  const [newUsername, setNewUsername] = useState()
  const setUsername = (username) => dispatch(actions.setUsername({ username }))
  const setActualRoom = (actualRoom) =>
    dispatch(actions.setActualRoom({ actualRoom }))

  const saveDataAndRedirect = () => {
    const room = encodeURI(roomId)
    setUsername(newUsername)
    setActualRoom(room)
    history.push(`/${roomId}`)
  }

  const handleOnKeyDownUsername = (e) => {
    if (e.key === 'Enter') saveDataAndRedirect()
  }

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value)
  }

  return (
    <Box
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      column
    >
      <Box m={5} alignItems="center" column>
        <Heading mb={1}>{invitedby}</Heading>
        <Heading textSize="sm" textStyle="semibold" mb={3}>
          invited you to this group
        </Heading>
        <Text>Fill your name and get in!</Text>
      </Box>
      <Box alignItems="center" my={2} column>
        <InputLabel m={0} textAlign="center">
          Room
        </InputLabel>
        <InputField
          type="text"
          placeholder="Room"
          defaultValue={roomId}
          disabled
          boxSizing="border-box"
          textAlign="center"
        />
      </Box>
      <Box alignItems="center" my={2} column>
        <InputLabel m={0} textAlign="center">
          Username
        </InputLabel>
        <InputField
          textAlign="center"
          type="text"
          placeholder="Username"
          defaultValue={newUsername}
          boxSizing="border-box"
          onChange={handleUsernameChange}
          onKeyDown={handleOnKeyDownUsername}
        />
      </Box>
      <Button my={2} onClick={saveDataAndRedirect}>
        Join the room
      </Button>
      <Logo mt={10} />
    </Box>
  )
}

export default RegisterNewUser
