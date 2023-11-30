import { createSlice } from '@reduxjs/toolkit'
import { ORDER } from '../constants/OrderConfig'

const initialState = {
  orders: ORDER
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateOrder: (state, action) => {
      state.orders = action.payload
    }
  }
})

export const { updateOrder } = orderSlice.actions

export default orderSlice.reducer
