import React, { useState } from 'react'
import Child from './Child'

const Props = () => {
    const [myName, setName] = useState('there!!')
    const [age, setAge] = useState(null)
    const [editName, setEditName] = useState(myName)

    const clickMeHandler = () => {
        setEditName(myName)
        setAge(20)
    }

    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={clickMeHandler}>click me</button>
            <Child name={editName} age={age} />
            <h1 onClick={(e) => console.log(e)}>Hello</h1>
        </div>
    )
}

export default Props