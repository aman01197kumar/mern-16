// import './styles.css'

// const Styling = () => {

//     const style = {
//         backgroundColor: 'blue',
//         color: 'white'
//     }
//     return (
//         <>
//             <h1 style={{ backgroundColor: 'red', color: 'yellow' }}>Inline Styling</h1>
//             <h1 style={{ backgroundColor: style.backgroundColor, color: style.color }}>Internal</h1>
//             <h1 className='external'>External Styling</h1>
//         </>
//     )
// }

// export default Styling

import React from 'react'
import Button from './Button'

const btns = [
    {
        text: 'login', background: 'green'
    },
    {
        text: 'signup', background: 'red'
    },
    {
        text: 'subscribe', background: 'blue'
    },
    {
        text: 'add to cart', background: 'yellow'
    },
    {
        text: 'login', background: 'green'
    },
    {
        text: 'signup', background: 'red'
    },
    {
        text: 'subscribe', background: 'blue'
    },
    {
        text: 'add to cart', background: 'yellow'
    },
    {
        text: 'login', background: 'green'
    },
    {
        text: 'signup', background: 'red'
    },
    {
        text: 'subscribe', background: 'blue'
    },
    {
        text: 'add to cart', background: 'yellow'
    },
    {
        text: 'login', background: 'green'
    },
    {
        text: 'signup', background: 'red'
    },
    {
        text: 'subscribe', background: 'blue'
    },
    {
        text: 'add to cart', background: 'yellow'
    },
]

const Styling = () => {
    return (
        <>
            {/* <Button text='login' background='green' />
             <Button text='signup' background='red' />
              <Button text='subscribe' background='blue' />
               <Button text='add to cart' background='yellow' /> */}
            {btns?.map(({ text, background }) => (

                <Button text={text} background={background} />

            ))}
        </>
    )
}

export default Styling