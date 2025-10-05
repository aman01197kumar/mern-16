import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

const UseCallback = () => {
  const [count, setCount] = useState(0)

  const func = useCallback(() => { }, [])
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>click me</button>
      <Child func={func} />
    </>
  )
}

export default UseCallback