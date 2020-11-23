import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../data'
// reducer function

const reducer = () => {}

const defaultState = {
  people: data,
  isShowModal: true,
  modalContent: 'Fine for now',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name) {
    } else {
    }
  }

  return (
    <>
      {state.isShowModal && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
