import { createSlice } from '@reduxjs/toolkit'

const initialState = { username: '', rooms: [], actualRoom: '' }

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUsername(state, { payload: { username } }) {
      state.username = username
    },
    deleteRoom(state, { payload: { roomId } }) {
      state.rooms = state.rooms.filter(room => room !== roomId)
    },
    setActualRoom(state, { payload: { actualRoom } }) {
      if (!state.rooms.includes(actualRoom)){
        state.rooms.push(actualRoom)
      }
      state.actualRoom = actualRoom
    },
  },
})

export const actions = userSlice.actions
export default userSlice.reducer
