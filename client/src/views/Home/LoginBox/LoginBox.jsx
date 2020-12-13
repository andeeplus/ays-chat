import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, InputField, Box } from '@andeeplus/aplus-ui'
import { useSelector, useDispatch } from 'react-redux'
import {
  actualRoomSelector,
  usernameSelector,
} from '../../../store/modules/user/selectors'
import { actions } from '../../../store/modules/user/reducer'

const LoginBox = (props) => {
  const dispatch = useDispatch()
  const actualRoom = useSelector(actualRoomSelector)
  const username = useSelector(usernameSelector)
  const setUsername = (username) => dispatch(actions.setUsername({ username }))
  const setActualRoom = (actualRoom) =>
    dispatch(actions.setActualRoom({ actualRoom }))

  const handleRoomNameChange = (event) => {
    setActualRoom(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.history.push(`/${actualRoom}?username=${username}`)
    }
  }

  return (
    <Box
      column
      alignItems="center"
      p={3}
      justifyContent="center"
      width={320}
      border="1px solid"
      borderColor="gray.2"
      borderRadius="3px"
    >
      <InputField
        type="text"
        placeholder="Room"
        value={actualRoom}
        textAlign="center"
        boxSizing="border-box"
        m={2}
        onChange={handleRoomNameChange}
      />
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        textAlign="center"
        boxSizing="border-box"
        m={2}
        onChange={handleUsernameChange}
        onKeyDown={handleOnKeyDown}
      />
      {console.log(`/${actualRoom}?username=${username}`)}
      <Link to={`/${actualRoom}?username=${username}`}>
        <Button m={2}>Join room</Button>
      </Link>
    </Box>
  )
}

export default withRouter(LoginBox)
