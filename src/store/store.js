import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slice/cartSlice'
import orderReducer from '../slice/orderSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer
  }
})
