import React, { useState } from 'react'
import { Icon, Box, Button } from '@andeeplus/aplus-ui'
import CreateRoom from './CreateRoom'
import Header from '../../components/Header'
import PreviousRooms from './PreviousRooms'
import { useSelector } from 'react-redux'
import { roomsSelector } from '../../store/modules/user/selectors'
import Logo from '../../components/Logo'
import EmptyRoomsView from './EmptyRoomsView'
import Footer from './Footer/Footer'

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
        <Button onClick={toggleCreateRoom} title="Add a new room" mx={3}>
          <Icon icon="plusSign" size={10} mr={2} fill="white" /> Room
        </Button>
      </Header>
      {showCreateRoom && <CreateRoom zIndex={1} shadow="small" />}
      {previousRooms.length ? <PreviousRooms /> : <EmptyRoomsView />}
      <Footer />
    </Box>
  )
}

export default Home
