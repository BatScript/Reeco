import React, { useState } from 'react'
import { TableStyledWrapper } from './styledTableWrapper'
import { Check2, X } from 'react-bootstrap-icons'
import OrderModal from '../Modal'
import { useSelector, useDispatch } from 'react-redux'
import { updateOrder } from '../../../../slice/orderSlice'
// import { updateCart, updateDetails } from '../../../../slice/cartSlice'

const OrderTable = ({ items }) => {
  const dispatch = useDispatch()
  const order = useSelector((state) => state.orders)
  const [clickedProduct, setClickedProduct] = useState('')
  const keys = Object.keys(items[0])

  const [modalVisibility, setModalVisibilty] = useState(false)

  const handleMissing = (product) => {
    setClickedProduct(product)
    setModalVisibilty(true)
  }

  const setMissing = () => {}

  const setApproved = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, status: 'approved' }
      }
      return item
    })
    dispatch(updateOrder({...orders, updatedItems}))
  }
  return (
    <>
      <TableStyledWrapper>
        <div className="tableNav">
          <div>
            <input placeholder="Search Items..." />
          </div>
          <div>
            <button className="bordered">Add Item</button>
          </div>
        </div>
        <div className="tableContent">
          <table>
            <thead>
              <tr className="tableHeader">
                {keys.map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.brand}</td>
                  <td>{item.totalPrice}</td>
                  <td className="approval">
                    <Check2
                      color={item.status === 'approved' ? 'green' : 'black'}
                      onClick={() => setApproved(item.id)}
                      height={20}
                      width={20}
                    />
                    <X
                      color={
                        item.status === 'missing' ||
                        item.status === 'missing-urgent'
                          ? 'red'
                          : 'black'
                      }
                      onClick={() => handleMissing(item.description)}
                      height={20}
                      width={20}
                    />
                    <span>Edit</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TableStyledWrapper>
      <OrderModal
        modalVisibility={modalVisibility}
        setModalVisibilty={setModalVisibilty}
        type="removeItem"
        details={{ clickedProduct, setMissing }}
      />
    </>
  )
}

export default OrderTable
