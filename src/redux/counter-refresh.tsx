import { createSlice } from "@reduxjs/toolkit"

export const counterRefreshSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    secondCount: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    incrementSecond: (state) => {
      state.secondCount += 1
    },
  },
})

export const selectSecond = (state: { secondCount: number }) =>
  state.secondCount

export const selectCount = (state: { count: number }) => state.count

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, incrementSecond } =
  counterRefreshSlice.actions

export default counterRefreshSlice.reducer
