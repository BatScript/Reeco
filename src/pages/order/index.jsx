import React, { useEffect } from 'react'
import OrderContainer from '../../containers/order'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { updateCart, updateDetails } from '../../slice/cartSlice'

const OrderRoute = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const orders = useSelector((state) => state.order.orders)
  const thisOrder = orders.find((order) => order.id === Number(id))

  return <OrderContainer thisOrder={thisOrder} />
}

export default OrderRoute
