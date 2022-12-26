import { configureStore } from '@reduxjs/toolkit'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { orderDetailsSlice } from './slices/order'
import { ordersSlice } from './slices/orders'
import api from './thunk/ordersAPI'

export const makeStore = () =>
  configureStore({
    reducer: {
      [ordersSlice.name]: ordersSlice.reducer,
      [orderDetailsSlice.name]: orderDetailsSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { api },
        },
      }),
  })

type Store = ReturnType<typeof makeStore>
export type RootState = ReturnType<Store['getState']>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const store = makeStore()
