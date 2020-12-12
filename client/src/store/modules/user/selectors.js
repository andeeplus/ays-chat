import { createSelector } from '@reduxjs/toolkit'

const userSelect = state => state.user

const usernameSelector = createSelector(
  userSelect,
  user => user.username
)

const roomsSelector = createSelector(
  userSelect,
  user => user.rooms
)

const actualRoomSelector = createSelector(
  userSelect,
  user => user.actualRoom
)

export {
  usernameSelector,
  roomsSelector,
  actualRoomSelector
}