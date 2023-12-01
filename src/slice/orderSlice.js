import { createSlice } from '@reduxjs/toolkit'
import { ORDER } from '../constants/OrderConfig'

const initialState = {
  orders: ORDER
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload)
    },
    updateOrderCart: (state, action) => {
      const { orderId, cartItems } = action.payload

      const order = state.orders.find((order) => order.id === orderId)
      if (order) {
        order.cartItems = cartItems
      }
    }
  }
})

export const { addOrder, updateOrderCart } = orderSlice.actions

export default orderSlice.reducer
