import React, { useEffect } from 'react'

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal()
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return <div class='modal'>{modalContent}</div>
}

export default Modal
