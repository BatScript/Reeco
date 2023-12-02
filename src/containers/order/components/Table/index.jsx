import React, { useEffect, useState } from 'react'
import { TableStyledWrapper } from './styledTableWrapper'
import { Check2, X } from 'react-bootstrap-icons'
import OrderModal from '../Modal/OrderModal'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrderCart } from '../../../../slice/orderSlice'
import EditModal from '../Modal/EditModal'

const OrderTable = ({ id, items }) => {
  const [originalItems] = useState(items)
  const dispatch = useDispatch()
  const currentOrderStatus = useSelector((state) => state.order.orders)
  const keys = Object.keys(items[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [editModalVisibility, setEditModalVisibility] = useState(false)
  const [modalVisibility, setModalVisibilty] = useState(false)
  const [tableItems, setTableItems] = useState(items)
  const [clickedProduct, setClickedProduct] = useState('')

  useEffect(() => {

  }, [currentOrderStatus])

  const handleUpdateCommon = async (itemId, type) => {
    const updatedItems = await items.map((item) => {
      if (item.id === itemId) {
        return { ...item, status: type }
      }
      return item
    })
    searchHandler(searchQuery, updatedItems)
    dispatch(updateOrderCart({ orderId: id, cartItems: updatedItems }))
  }

  const handleMissing = (product) => {
    setClickedProduct(product)
    setModalVisibilty(true)
  }

  const setMissing = (type, itemId) => {
    handleUpdateCommon(itemId, type)
    setModalVisibilty(false)
  }

  const toggleApproved = (itemId) => {
    handleUpdateCommon(itemId, 'approved')
    setModalVisibilty(false)
  }

  const searchHandler = (query, items) => {
    setSearchQuery(query)
    const results = items.filter((item) =>
      item.description.toLowerCase().includes(query)
    )
    setTableItems(results)
  }

  const handleCartEdit = (clickedItem) => {
    setClickedProduct(clickedItem)
    setEditModalVisibility(true)
  }

  return (
    <>
      <TableStyledWrapper>
        <div className="tableNav">
          <div>
            <input
              value={searchQuery}
              placeholder="Search Items..."
              onChange={(e) =>
                searchHandler(e.target.value.toLowerCase(), items)
              }
            />
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
                  <td>
                    <img
                      width={70}
                      src={item.image}
                      alt="Apple-Green-Smith"
                      border="0"
                    />
                  </td>
                  <td>
                    <span>{item.description}</span>
                  </td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.brand}</td>
                  <td>{item.totalPrice}</td>
                  <td>
                    <div className="approval">
                      <span className={`status ${item.status}`}>
                        {item.status}
                      </span>
                      <div className="actionContainer">
                        <Check2
                          color={item.status === 'approved' ? 'green' : 'black'}
                          onClick={() => toggleApproved(item.id)}
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
                        <span onClick={() => handleCartEdit(item)}>Edit</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TableStyledWrapper>
      {clickedProduct && (
        <>
          <OrderModal
            modalVisibility={modalVisibility}
            setModalVisibilty={setModalVisibilty}
            details={{ clickedProduct, setMissing }}
          />
          <EditModal
            modalVisibility={editModalVisibility}
            setModalVisibilty={setEditModalVisibility}
            details={{ clickedProduct, cartItems: items, currentOrderId: id }}
          />
        </>
      )}
    </>
  )
}

export default OrderTable
