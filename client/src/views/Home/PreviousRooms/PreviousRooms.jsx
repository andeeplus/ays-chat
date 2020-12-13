import { Box, Button, Icon, Heading, Text } from '@andeeplus/aplus-ui'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { actions } from '../../../store/modules/user/reducer'
import { roomsSelector } from '../../../store/modules/user/selectors'

const PreviousRooms = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const previousRooms = useSelector(roomsSelector)
  const deleteRoom = (roomId) => dispatch(actions.deleteRoom({ roomId }))
  const setActualRoom = (actualRoom) =>
    dispatch(actions.setActualRoom({ actualRoom }))

  const goToRoom = (roomToVisit) => {
    setActualRoom(roomToVisit)
    history.push(`/${roomToVisit}`)
  }

  return (
    <Box p={3} column>
      <Heading my={3} textStyle="semibold" mt={3}>
        Previous Rooms
      </Heading>
      <Box column>
        {previousRooms.map((room) => (
          <Box
            key={room}
            pt={3}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>{decodeURIComponent(room)}</Text>
            <Box>
              <Button variant="outlined" mx={3} onClick={() => goToRoom(room)}>
                Go To Room
              </Button>
              <Button
                width="40px"
                minWidth="40px"
                mainColor="red.6"
                onClick={() => deleteRoom(room)}
              >
                <Icon icon="trashCan" fill="white" size={16} />
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default PreviousRooms
