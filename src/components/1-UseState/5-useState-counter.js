import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  const complexInc = () => {
    setTimeout(() => {
      setValue((oldValue) => {
        return oldValue + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Simple Counter</h2>
        <h1>{value}</h1>
        <button
          type='button'
          className='btn'
          onClick={() => setValue(value - 1)}
        >
          Decrement
        </button>
        <button type='button' className='btn' onClick={reset}>
          Reset
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => setValue(value + 1)}
        >
          Increment
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>

        <button type='button' className='btn' onClick={complexInc}>
          Complex Increment
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
