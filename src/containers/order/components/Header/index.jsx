import React from 'react'
import { OrderStyledWrapper } from './styledOrderHeader'
import { useParams } from 'react-router-dom'

const OrderHeader = ({id}) => {
  return (
    <OrderStyledWrapper>
      <div className="leftSection">
        <span>
          Orders {'>'} {id}
        </span>
        <h1>Order {id}</h1>
      </div>
      <div className="rightSection">
        <button className="bordered">Back</button>
        <button className="filled">Approve Order</button>
      </div>
    </OrderStyledWrapper>
  )
}

export default OrderHeader
