import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Parameter } from '../../components/ParamTable/ParamTable.props'
import { OrderDetails } from '../../interfaces/order'
import { RootState } from '../store'

interface OrderState {
  order: OrderDetails | null
  params: Parameter[]
}

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
})

export const { setOrder } = orderDetailsSlice.actions

export const getOrder = (state: RootState): OrderDetails | null => state.orderDetail.order
export const getAdditionalParams = (state: RootState): Parameter[] => state.orderDetail.params

export const queryOrderData =
  (id: number): unknown =>
  async (dispatch: any, _: RootState, extraArgument: any) => {
    const { api } = extraArgument
    api
      .getOrderById(id)
      .then((data: OrderDetails) => dispatch(setOrder(data)))
      .catch((err: Error) => console.log(err))
  }
