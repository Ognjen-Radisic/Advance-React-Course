import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('We are back in game')
    if (value > 0) {
      document.title = `New messages (${value})`
    }
  }, [value])
  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        INCREMENT
      </button>
    </>
  )
}

export default UseEffectBasics
