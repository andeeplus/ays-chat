import React, { useState } from 'react'
import { Icon, Box, Heading } from '@andeeplus/aplus-ui'
import CreateRoom from './CreateRoom'
import Header from '../../components/Header'
import PreviousRooms from './PreviousRooms'
import { useSelector } from 'react-redux'
import { roomsSelector } from '../../store/modules/user/selectors'
import Logo from '../../components/Logo'

const Home = () => {
  const previousRooms = useSelector(roomsSelector)
  const [showCreateRoom, setShowCreateRoom] = useState(!previousRooms.length)
  const toggleCreateRoom = () => setShowCreateRoom((show) => !show)

  return (
    <Box column>
      <Header
        position="relative"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo ml={3} />
        <Icon icon="plusSign" size={16} p={5} onClick={toggleCreateRoom} />
      </Header>
      {showCreateRoom && <CreateRoom zIndex={1} shadow="small" />}
      <PreviousRooms />
    </Box>
  )
}

export default Home
