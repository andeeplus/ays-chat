import { configureStore } from '@reduxjs/toolkit'

import userReducer from './modules/user/reducer'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
