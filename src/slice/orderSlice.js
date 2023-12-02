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
      const order = state.orders.find((o) => o.id === orderId)
      if (order) {
        order.cartItems = cartItems
      }
    },
    updateCartItemQuantity: (state, action) => {
      const { orderId, cartItemId, newQuantity } = action.payload
      const orderIndex = state.orders.findIndex((order) => order.id === orderId)

      if (orderIndex !== -1) {
        const cartItemIndex = state.orders[orderIndex].cartItems.findIndex(
          (item) => item.id === cartItemId
        )

        if (cartItemIndex !== -1) {
          let cartItem = state.orders[orderIndex].cartItems[cartItemIndex]
          cartItem.quantity = newQuantity
          cartItem.totalPrice = newQuantity * cartItem.price
        }
      }
    }
  }
})

export const { addOrder, updateOrderCart, updateCartItemQuantity } =
  orderSlice.actions

export default orderSlice.reducer
