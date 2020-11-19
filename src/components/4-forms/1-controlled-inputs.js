import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const person = { id: new Date().getTime().toString(), firstName, email }
    if (firstName && email) {
      setPeople((oldPeople) => {
        return [...oldPeople, person]
      })
      setFirstName('')
      setEmail('')
    } else {
      console.log('Fill all input fields')
    }
  }
  return (
    <article>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>First name: </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' onClick={handleSubmit}>
          Submit Form
        </button>
      </form>
      {people.map((pers) => {
        const { id, firstName, email } = pers
        return (
          <div key={id} className='item'>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </article>
  )
}

export default ControlledInputs
