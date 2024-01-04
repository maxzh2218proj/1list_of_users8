import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "../slice"
import usersSlice from "../slice/usersSlice"

export const store = configureStore({
  reducer: {
    count: counterSlice,
    users: usersSlice
  },
})