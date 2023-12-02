import React from 'react'
import Layout from '../../components/layout'
import OrderHeader from './components/Header'
import OrderStatistics from './components/Statistics'
import OrderTable from './components/Table'

const OrderContainer = ({ thisOrder }) => {
  const { id, cartItems } = thisOrder || false
  return (
    <Layout>
      {thisOrder ? (
        <>
          <OrderHeader id={id} />
          <OrderStatistics order={thisOrder} />
          <OrderTable id={id} items={cartItems} />
        </>
      ) : (
        <p>Oops Order Not Found</p>
      )}
    </Layout>
  )
}

export default OrderContainer
