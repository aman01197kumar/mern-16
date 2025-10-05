import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[count,setCount] = useState(0)

  return (
    <div>
        <h1>{count}</h1>
        <Child setCount = {setCount}/>
    </div>
  )
}

export default Parent