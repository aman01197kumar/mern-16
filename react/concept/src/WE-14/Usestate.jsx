// import React, { useState } from 'react'

// const Usestate = () => {
//     // let count = 0
//     //variable declaration [variable_name,callback_func] = useState(initial_value)
//     let [count, setCount] = useState(0)
//     const incrementHandler = () => {
//         if (count < 10) {

//             setCount(prev => prev + 1)
//         }

//     }
//     const decrementHandler = () => {
//         if (count > 0)
//             setCount(prev => prev - 1)
//     }

//     return (
//         <>
//             <h1>count:{count}</h1>
//             <button onClick={decrementHandler}>decrement</button>
//             <button onClick={incrementHandler}>increment</button>
//         </>
//     )
// }

// export default Usestate

// import React, { useState } from 'react'

// const Usestate = () => {
//     const [text, setText] = useState('light')
//     const toggleBtnHandler = () => {
//         text === 'light' ? setText('dark') : setText('light')
//     }
//     return (
//         <div>
//             <h1>{text}</h1>
//             <button onClick={toggleBtnHandler}>toggle</button>
//         </div>
//     )
// }

// export default Usestate

// import React, { useState } from 'react'

// const Usestate = () => {
//     const [toggleBtn, setToggleBtn] = useState('add to cart')
//     return (
//         <div>

//             <button onClick={() => setToggleBtn(prev => prev === 'added' ? 'add to cart' : 'added')}>{toggleBtn}</button>
//         </div>

//     )
// }

// export default Usestate

// import React, { useState } from 'react'

// const Usestate = () => {
//     const [showText, setShowText] = useState(false)
//     return (
//         <>
//             <button onClick={() => setShowText(!showText)}>show</button>
//             {showText && <h1>Hello</h1>}
//         </>
//     )
// }

// export default Usestate