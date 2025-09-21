import React from 'react'
import Button from './Button'

const App = () => {
  const btn = ['subscription', 'login', 'signup','cknksjnk']
  return (
    <div>
      {
        btn?.map(item => (
          <Button item={item} />
        ))
      }
    </div>
  )
}

export default App