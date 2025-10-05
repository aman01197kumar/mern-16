import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [count, setCount] = useState(0)

    const sum = () => {
        console.log('function called');
        let total = 0
        for (let i = 0; i <= 1000000000; i++) {
            total += i
        }
        return total;
    }

    const expensive = useMemo(sum,[])
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>click me</button>
            <h1>sum:{expensive}</h1>
        </>
    )
}

export default Usememo