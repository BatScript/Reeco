import React from 'react'
import Layout from '../../components/layout'
import { useSelector } from 'react-redux'

const HomepageContainer = () => {
  const orders = useSelector((state) => state.order.orders)
  return (
    <Layout>
      {orders.map((order) => {
        return (
          <div className="shell">
            <h2>{order.supplierName}</h2>
            <a href={`/order/${order.id}`}>here</a>
          </div>
        )
      })}
    </Layout>
  )
}

export default HomepageContainer
