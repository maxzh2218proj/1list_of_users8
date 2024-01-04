import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.value += 1
    },
    decrementCount: (state) => {
      state.value -= 1
    },
    resetCount: (state) => {
      state.value = 0
    },
  },
})

export const { incrementCount, decrementCount, resetCount } = counterSlice.actions

export default counterSlice.reducer