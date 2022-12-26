import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { AnyAction } from 'redux'

import { Order } from '../../interfaces/order'
import { RootState } from '../store'
import ordersAPI from '../thunk/ordersAPI'

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

export const queryOrders = createAsyncThunk('orders/queryOrders', async () => {
  return await ordersAPI.getOrders()
})

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
  extraReducers: (builder: ActionReducerMapBuilder<OrderListState>) => {
    builder.addCase(queryOrders.fulfilled, (state: OrderListState, action: AnyAction) => {
      state.orders = [...action.payload]
    })
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
