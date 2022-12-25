import { configureStore } from '@reduxjs/toolkit'

import { ordersSlice } from './slices/orders'
import api from './thunk/ordersAPI'

export const makeStore = () =>
  configureStore({
    reducer: {
      [ordersSlice.name]: ordersSlice.reducer,
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

export const store = makeStore()
