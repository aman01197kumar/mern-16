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

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [count, setCount] = useState(0)
//     const [number, setNumber] = useState(0)

//     useEffect(() => console.log('mouted!!!'), [count,number])
//     return (
//         <>
//             <h1>count:{count}</h1>
//             <button onClick={() => setCount(prev => prev + 1)}>count me</button>
//             <h1>Number:{number}</h1>
//             <button onClick={() => setNumber(prev => prev + 1)}>number me</button>
//         </>
//     )
// }

// export default UseEffect

//unmounting




// const UseEffect = () => {
//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         console.log('mounted');
//         return () => console.log('unmount!!')
//     }, [])

//     const onClickHandler = () => setCount(prev => prev + 1)
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={onClickHandler}>click me</button>
//         </div>
//     )
// }

// export default UseEffect

//data-fetching

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [data, setData] = useState([])

//     const fetchData = async () => {
//         const response = await fetch('https://dummyjson.com/products/')
//         const resjson = await response.json()
//         console.log(resjson.products);
//         // setData(resjson.products)
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     // console.log(data, 'data');
//     return (
//         <div>UseEffect</div>
//     )
// }

// export default UseEffect