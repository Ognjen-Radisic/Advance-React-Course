import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          setIsLoading(false)
          return resp.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((info) => {
        console.log(info)
        setUser(info.login)
      })
      .catch((error) => {
        console.log('Error..')
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  } else if (isError) {
    return <h2>Error...</h2>
  }

  return <h2>{user}</h2>
}

export default MultipleReturns
