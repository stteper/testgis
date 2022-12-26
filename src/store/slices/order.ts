import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AnyAction } from 'redux'

import { Parameter } from '../../components/ParamTable/ParamTable.props'
import { OrderDetails } from '../../interfaces/order'
import { RootState } from '../store'
import ordersAPI from '../thunk/ordersAPI'

interface OrderState {
  order: OrderDetails | null
  params: Parameter[]
}

export const queryOrderData = createAsyncThunk('orderDetail/queryOrderData', async (id: number) => {
  return await ordersAPI.getOrderById(id)
})

const initialState: OrderState = {
  order: null,
  params: [
    {
      name: 'Наименование',
      value: 'ООО “Арктех-Агро”',
    },
    {
      name: 'ИНН',
      value: '8980900808',
    },
    {
      name: 'Представиель',
      value: 'Бондарчук Иван Константинович',
    },
    {
      name: 'Телефон',
      value: '+7 (938) 098-90-00',
    },
  ],
}

export const orderDetailsSlice = createSlice({
  name: 'orderDetail',
  initialState: initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<OrderDetails>) => {
      state.order = { ...action.payload }
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<OrderState>) => {
    builder.addCase(queryOrderData.fulfilled, (state: OrderState, action: AnyAction) => {
      state.order = { ...action.payload }
    })
  },
})

export const { setOrder } = orderDetailsSlice.actions

export const getOrder = (state: RootState): OrderDetails | null => state.orderDetail.order
export const getAdditionalParams = (state: RootState): Parameter[] => state.orderDetail.params
