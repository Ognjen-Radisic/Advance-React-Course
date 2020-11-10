import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Ognjen',
    food: 'gyros',
    sport: 'swimming',
  })

  const changeFood = () => {
    if (person.food === 'gyros') {
      setPerson({ ...person, food: 'lasagna' })
    } else {
      setPerson({ ...person, food: 'gyros' })
    }
  }
  return (
    <>
      <div className='item'>{person.name}</div>
      <div className='item'>{person.food}</div>
      <div className='item'>{person.sport}</div>
      <button type='button' className='btn' onClick={changeFood}>
        Change food
      </button>
    </>
  )
}

export default UseStateObject
