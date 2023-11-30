import React from 'react'
import CommonModal from '../../../../components/ui/Modal'

const OrderModal = ({
  modalVisibility,
  setModalVisibilty,
  type = 'removeItem',
  details = {}
}) => {
  switch (type) {
    case 'removeItem':
      const { clickedProduct, setMissing } = details
      return (
        <CommonModal
          isOpen={modalVisibility}
          onRequestClose={() => setModalVisibilty(false)}
        >
          <div>
            <p className="header">Missing Product</p>
            <p>
              Is <b>{clickedProduct}</b> urgent ?{' '}
            </p>
          </div>
          <div className="btnContainer">
            <button className="bordered" onClick={() => setMissing('urgent')}>
              Yes
            </button>
            <button className="filled" onClick={() => setMissing(null)}>
              No
            </button>
          </div>
        </CommonModal>
      )
  }
}

export default OrderModal
