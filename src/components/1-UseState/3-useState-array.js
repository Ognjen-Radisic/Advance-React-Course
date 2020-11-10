import React from 'react'
import { data } from '../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    const newPeople = people.filter((p) => p.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((p) => {
        const { id, name } = p
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              type='button'
              className='btn'
              onClick={() => removeItem(id)}
            >
              REMOVE
            </button>
          </div>
        )
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>
        ClearList
      </button>
    </>
  )
}

export default UseStateArray
