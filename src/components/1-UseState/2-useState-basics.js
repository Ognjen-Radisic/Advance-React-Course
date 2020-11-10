import React, { useState } from 'react'

const UseStateBasics = () => {
  //let title = 'Something went totally left'

  const [title, setTitle] = useState('Something went totally left')
  const handleChange = () => {
    if (title === 'Something went totally left') {
      setTitle('Something went totally right')
    } else {
      setTitle('Something went totally left')
    }
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleChange}>
        Change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
