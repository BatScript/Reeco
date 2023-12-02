import React, { useEffect, useState } from 'react'
import CommonModal from '../../../../components/ui/Modal'
import { DashCircle, PlusCircle } from 'react-bootstrap-icons'
import { ModalStyledWrapper } from './styledModalWrapper'
import { updateCartItemQuantity } from '../../../../slice/orderSlice'
import { useDispatch, useSelector } from 'react-redux'

const EditModal = ({ modalVisibility, setModalVisibilty, details }) => {
  const dispatch = useDispatch()
  const { clickedProduct, currentOrderId, setTableItems } = details

  const [itemState, setItemState] = useState(clickedProduct)
  const order = useSelector((state) => state.order.orders)

  useEffect(() => {
    const currentItemState = order.find(
      (o) => o.id === currentOrderId
    ).cartItems
    setTableItems(currentItemState)
  }, [order, currentOrderId])

  const { id, description, brand, image, price, totalPrice, quantity } =
    itemState

  const handleQuantityChange = (type) => {
    const newQuantity =
      type === 'increment' ? quantity + 1 : Math.max(quantity - 1, 1)

    setItemState((prev) => ({
      ...prev,
      quantity: newQuantity,
      totalPrice: prev.price * newQuantity
    }))
  }

  const updateCartHandler = () => {
    dispatch(
      updateCartItemQuantity({
        orderId: currentOrderId,
        cartItemId: id,
        newQuantity: itemState.quantity
      })
    )

    setModalVisibilty(false)
  }

  return (
    <CommonModal
      minWidth="500px"
      isOpen={modalVisibility}
      onRequestClose={() => setModalVisibilty(false)}
    >
      <ModalStyledWrapper>
        <div className="header">
          <p className="name">{description}</p>
          <p className="brand">{brand}</p>
        </div>

        <div className="content">
          <div className="image">
            <img width={200} src={image} alt="Apple-Green-Smith" border="0" />
          </div>
          <div className="table">
            <div className="cell">
              <div>Price</div>
              <div className="quantity">
                <input readOnly value={price} />
              </div>
            </div>
            <div className="cell">
              <div>Quantity</div>
              <div className="quantity controlled">
                <DashCircle
                  onClick={() => handleQuantityChange('decrement')}
                  width={20}
                  height={20}
                />
                <input readOnly value={quantity} />
                <PlusCircle
                  width={20}
                  height={20}
                  onClick={() => handleQuantityChange('increment')}
                />
              </div>
            </div>
            <div className="cell">
              <div>Total</div>
              <div className="quantity">
                <input disabled value={totalPrice} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="filled" onClick={updateCartHandler}>
            Send
          </button>
        </div>
      </ModalStyledWrapper>
    </CommonModal>
  )
}

export default EditModal
