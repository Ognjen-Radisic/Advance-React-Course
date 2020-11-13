import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <h2>Show/Hide</h2>
      <button className='btn' onClick={() => setShow(!show)}>
        {' '}
        TOGGLER
      </button>
      {show && <Item />}
    </>
  )
}

const Item = () => {
  const [value, setValue] = useState(window.innerWidth)

  const changeWidth = () => {
    setValue(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <>
      <div style={{ marginTop: '2rem' }}>
        <h2>Window</h2>

        <h3>Size: {value}</h3>
      </div>
    </>
  )
}
export default ShowHide
