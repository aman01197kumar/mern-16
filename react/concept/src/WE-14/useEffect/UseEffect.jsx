//mounting

// import { useEffect, useState } from "react"

// const UseEffect = () => {
//     const [count, setCount] = useState(0)

//     useEffect(() => console.log('mouted!!!'), [])
//     return (
//         <>
//             <button onClick={() => setCount(prev => prev + 1)}>click me</button>
//         </>
//     )
// }

// export default UseEffect

//update

import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)

    useEffect(() => console.log('mouted!!!'), [count,number])
    return (
        <>
            <h1>count:{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>count me</button>
            <h1>Number:{number}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>number me</button>
        </>
    )
}

export default UseEffect