import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: {},
  cartDetails: {}
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cartItems = action.payload
    },
    updateDetails: (state, action) => {
      state.cartDetails = action.payload
    }
  }
})

export const { updateCart, updateDetails } = cartSlice.actions

export default cartSlice.reducer
