import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})