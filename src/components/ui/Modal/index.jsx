import React, { useState } from 'react'
import { X } from 'react-bootstrap-icons'
import styled from 'styled-components'

// Style the modal components
const ModalOverlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  min-width: 300px;
  text-align: center;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  padding: 20px;
  position: relative;
  overflow: hidden;

  .header {
    color: red;
    text-align: center;
    margin: 0;
  }

  .bordered {
    border-radius: 0.3rem;
    padding: 0.3rem;
    border: 1px solid black;
    background: transparent;
  }
  .filled {
    border-radius: 0.3rem;
    padding: 0.3rem;
    border: 1px solid black;
    background: #333;
    color: white;
  }

  .close{
    border: 1px solid grey;
    border-radius: 1rem;
    padding: 0.2rem;
    margin-bottom: 0.4rem;
  }

  .btnContainer {
    display: flex;
    justify-content: flex-end;
    column-gap: 0.5rem;
  }
`

const CloseButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`

const CommonModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <X
              onClick={onRequestClose}
              className="close"
              width={20}
              height={20}
            />
            {children}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

export default CommonModal
