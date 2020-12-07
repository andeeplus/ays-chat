import React from 'react'
import { Link } from 'react-router-dom'
import { Button, InputField, Box } from '@andeeplus/aplus-ui'

const LoginBox = () => {
  const [roomName, setRoomName] = React.useState('')
  const [username, setUsername] = React.useState('')

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
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
        value={roomName}
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
      />
      <Link to={`/${roomName}?username=${username}`}>
        <Button m={2}>Join room</Button>
      </Link>
    </Box>
  )
}

export default LoginBox
