import { combineReducers } from '@reduxjs/toolkit';
import orderReducer from './orderSlice'
import cartReducer from './cartSlice'

const rootReducer = combineReducers({
  orders: orderReducer,
  cartItems: cartReducer,
});

export default rootReducer;
