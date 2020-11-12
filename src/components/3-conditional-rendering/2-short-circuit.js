import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {text || <h2>What's up Ternary?</h2>}
      <button className='btn' onClick={() => setIsError(!isError)}>
        Trouble Maker
      </button>
      {isError && <h2>Errors everywhere I go..</h2>}
      {isError ? <p>Buggy boi</p> : <h3>NOT a BUGGY boi</h3>}
    </>
  )
}

export default ShortCircuit
