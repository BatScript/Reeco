import React from 'react'
import Layout from '../../components/layout'
import OrderHeader from './components/Header'
import OrderStatistics from './components/Statistics'
import OrderTable from './components/Table'

const OrderContainer = ({ thisOrder }) => {
  const { id, details, cartItems } = thisOrder || false
  return (
    <Layout>
      {details ? (
        <>
          <OrderHeader id={id} />
          <OrderStatistics details={details} />
          <OrderTable items={cartItems} />
        </>
      ) : (
        <p>Oops Order Not Found</p>
      )}
    </Layout>
  )
}

export default OrderContainer
