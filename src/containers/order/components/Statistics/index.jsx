import React from 'react'
import { StatisticsStyledWrapper } from './styledStatistics'

const OrderStatistics = ({ order }) => {
  const { supplierName, shippingDate, category, department, status } = order
  const details = [
    { key: 'supplierName', value: supplierName },
    { key: 'shippingDate', value: shippingDate },
    { key: 'category', value: category },
    { key: 'department', value: department },
    { key: 'status', value: status }
  ]
  return (
    <StatisticsStyledWrapper>
      {details.map((stat, index) => {
        return (
          <div key={index} className="section">
            <p className="key">{stat.key}</p>
            <p className="value">{stat.value}</p>
          </div>
        )
      })}
    </StatisticsStyledWrapper>
  )
}

export default OrderStatistics
