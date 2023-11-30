import React from 'react'
import { StatisticsStyledWrapper } from './styledStatistics'

const OrderStatistics = ({ details }) => {
  return (
    <StatisticsStyledWrapper>
      {details.map((stat) => {
        console.log(stat)
        return (
          <>
            <div className="section">
              <p className="key">{stat.key}</p>
              <p className="value">{stat.value}</p>
            </div>
          </>
        )
      })}
    </StatisticsStyledWrapper>
  )
}

export default OrderStatistics
