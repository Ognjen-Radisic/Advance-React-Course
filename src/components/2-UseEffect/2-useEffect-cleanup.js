import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const sizeUpdate = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', sizeUpdate)
    return () => {
      window.removeEventListener('resize', sizeUpdate)
    }
  })
  return (
    <>
      <h2>Window Size</h2>
      <h1>{size}px</h1>
    </>
  )
}

export default UseEffectCleanup
