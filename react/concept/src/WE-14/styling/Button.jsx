import React from 'react'

const Button = ({ text, background }) => {
    return (
        <button style={{ backgroundColor: background }}>{text}</button>
    )
}

export default Button