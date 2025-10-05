import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [count, setCount] = useState(0)

    const imgRef = useRef()
    // let value = 0
    // const value = useRef(0)
    // const bgRef = useRef()
    // const countHandler = () => {
    //     // setCount(prev => prev + 1)
    //     // // console.log(count, 'count');
    //     // value.current+=1
    //     // // console.log(value,'value');
    //     // console.log(value, 'value');
    //     if (bgRef.current.style.backgroundColor === 'red')
    //         bgRef.current.style.backgroundColor = 'yellow'
    //     else bgRef.current.style.backgroundColor = 'red'

    // }
    return (
        <div>
            {/* <h1>count:{count}</h1>
            <button onClick={countHandler}>count click</button>
            <h1 ref={bgRef}>Hello MERn-16, u r awesome!!!!</h1> */}
            <input type="file" ref={imgRef} style={{ display: 'none' }} />
            <div style={{ backgroundColor: 'red', width: '5rem', height: '5rem' }} onClick={() => imgRef.current.click()}></div>
        </div>
    )
}

export default UseRef