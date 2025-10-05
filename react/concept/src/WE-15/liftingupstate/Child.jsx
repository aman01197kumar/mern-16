import React from 'react'

const Child = ({ setCount }) => {
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>click me</button>
        </div>
    )
}

export default Child