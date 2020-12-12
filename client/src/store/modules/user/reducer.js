import { createSlice } from '@reduxjs/toolkit'

const initialState = { username: '', rooms: '', actualRoom: '' }

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUsername(state, { payload: { username } }) {
      state.username = username
    },
    setRooms(state, { payload: { rooms } }) {
      state.rooms = rooms
    },
    setActualRoom(state, { payload: { actualRoom } }) {
      state.actualRoom = actualRoom
    },
  },
})

export const actions = userSlice.actions
export default userSlice.reducer
