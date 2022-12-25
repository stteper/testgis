import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Order } from '../../interfaces/order'
import { RootState } from '../store'

interface OrderListState {
  orders: Order[]
  filter: string
  type: 'id' | 'date'
}

const initialState: OrderListState = {
  orders: [],
  filter: '',
  type: 'id',
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = [...action.payload]
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },

    setFilterType: (state, action: PayloadAction<string>) => {
      state.type = action.payload === 'id' || action.payload === 'date' ? action.payload : 'id'
    },
  },
})

export const { setOrders, setFilter, setFilterType } = ordersSlice.actions

export const getOrders = (state: RootState): Order[] => state.orders.orders
export const getFilter = (state: RootState): string => state.orders.filter
export const getFilterType = (state: RootState): string => state.orders.type
export const getFilteredOrders = (state: RootState): Order[] => {
  return state.orders.filter.length === 0
    ? state.orders.orders
    : state.orders.orders.filter((order) =>
        state.orders.type === 'id' ? order.id.toString().indexOf(state.orders.filter) !== -1 : [],
      )
}

export const queryOrders = (): unknown => async (dispatch: any, _: RootState, extraArgument: any) => {
  const { api } = extraArgument
  api
    .getOrders()
    .then((data: Order[]) => dispatch(setOrders(data)))
    .catch((err: Error) => console.log(err))
}
