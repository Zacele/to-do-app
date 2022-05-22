import { configureStore } from '@reduxjs/toolkit'
import { toDoApisSlice } from '../features/api/toDoApiSlice'

export const store = configureStore({
  reducer: {
    [toDoApisSlice.reducerPath]: toDoApisSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(toDoApisSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
