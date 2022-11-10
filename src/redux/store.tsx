import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "./counter-solution"
import counterRefreshReducer from "./counter-refresh"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterRefresh: counterRefreshReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
