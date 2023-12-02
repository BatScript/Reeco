import React from 'react'
import CommonModal from '../../../../components/ui/Modal'

const OrderModal = ({ modalVisibility, setModalVisibilty, details }) => {
  const { clickedProduct, setMissing } = details
  return (
    <CommonModal
      isOpen={modalVisibility}
      onRequestClose={() => setModalVisibilty(false)}
    >
      <div>
        <p className="header">Missing Product</p>
        <p>
          Is <b>{clickedProduct.description}</b> urgent ?
        </p>
      </div>
      <div className="btnContainer">
        <button
          className="bordered"
          onClick={() => setMissing('missing-urgent', clickedProduct.id)}
        >
          Yes
        </button>
        <button
          className="filled"
          onClick={() => setMissing('missing', clickedProduct.id)}
        >
          No
        </button>
      </div>
    </CommonModal>
  )
}

export default OrderModal
