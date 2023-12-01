import React, { useState } from 'react'
import { TableStyledWrapper } from './styledTableWrapper'
import { Check2, X } from 'react-bootstrap-icons'
import OrderModal from '../Modal'
import { useSelector, useDispatch } from 'react-redux'
import { updateOrderCart } from '../../../../slice/orderSlice'
// import { updateCart, updateDetails } from '../../../../slice/cartSlice'

const OrderTable = ({ id, items }) => {
  const dispatch = useDispatch()
  const keys = Object.keys(items[0])
  const [modalVisibility, setModalVisibilty] = useState(false)
  const [tableItems, setTableItems] = useState(items)
  // const [visibleTable, setVisibleTable] = useState(items)
  const [clickedProduct, setClickedProduct] = useState('')

  const handleUpdateCommon = async (itemId, type) => {
    const updatedItems = await items.map((item) => {
      if (item.id === itemId) {
        return { ...item, status: type }
      }
      return item
    })
    setTableItems(updatedItems)
    dispatch(updateOrderCart({ orderId: id, cartItems: tableItems }))
  }

  const handleMissing = (product) => {
    setClickedProduct(product)
    setModalVisibilty(true)
  }

  const setMissing = (type, itemId) => {
    handleUpdateCommon(itemId, type)
    setModalVisibilty(false)
  }

  const setApproved = (itemId) => {
    handleUpdateCommon(itemId, 'approved')
    setModalVisibilty(false)
  }

  const searchHandler = (e) => {
    const query = e.target.value.toLowerCase()
    const results = items.filter((item) =>
      item.description.toLowerCase().includes(query)
    )
    setTableItems(results)
  }

  return (
    <>
      <TableStyledWrapper>
        <div className="tableNav">
          <div>
            <input placeholder="Search Items..." onChange={searchHandler} />
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
              {tableItems.map((item, index) => (
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
                      onClick={() => handleMissing(item)}
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
